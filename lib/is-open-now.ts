type DaySchedule = { open: string; close: string } | null;

// 0 = domingo ... 6 = sábado
const SCHEDULE: Record<number, DaySchedule> = {
  0: { open: "09:00", close: "13:00" },
  1: null,
  2: null,
  3: null,
  4: { open: "08:00", close: "14:00" },
  5: { open: "08:00", close: "14:00" },
  6: { open: "09:00", close: "13:00" },
};

// Horizon City / El Paso, TX está en horario de Montaña, no Central.
const TIMEZONE = "America/Denver";

const DAY_LABELS = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

function getPartsInTZ(date: Date) {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = fmt.formatToParts(date);
  const map: Record<string, string> = {};
  for (const p of parts) map[p.type] = p.value;
  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  return {
    day: weekdayMap[map.weekday],
    hour: parseInt(map.hour, 10),
    minute: parseInt(map.minute, 10),
  };
}

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function formatTime(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${h12}:00 ${period}` : `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

export type OpenStatus =
  | { isOpen: true }
  | { isOpen: false; opensAt: string; opensLabel: string };

export function getOpenStatus(now: Date = new Date()): OpenStatus {
  const { day, hour, minute } = getPartsInTZ(now);
  const nowMinutes = hour * 60 + minute;
  const today = SCHEDULE[day];

  if (today) {
    const openMin = toMinutes(today.open);
    const closeMin = toMinutes(today.close);
    if (nowMinutes >= openMin && nowMinutes < closeMin) {
      return { isOpen: true };
    }
    if (nowMinutes < openMin) {
      return { isOpen: false, opensAt: formatTime(today.open), opensLabel: "hoy" };
    }
  }

  for (let i = 1; i <= 7; i++) {
    const nextDay = (day + i) % 7;
    const sched = SCHEDULE[nextDay];
    if (sched) {
      return {
        isOpen: false,
        opensAt: formatTime(sched.open),
        opensLabel: i === 1 ? "mañana" : DAY_LABELS[nextDay],
      };
    }
  }

  return { isOpen: false, opensAt: "", opensLabel: "" };
}
