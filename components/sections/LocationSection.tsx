import location from "../../content/location.json";

type LocationSectionProps = {
  isOpen: boolean;
  opensAt?: string;
  opensLabel?: string;
};

// Coordenadas exactas confirmadas por GPS (esquina Darrington Rd & Eastlake,
// junto a Albertsons). Se usan directo en vez del número de calle aproximado,
// para que "Get directions" siempre caiga en el punto real.
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=31.701778,-106.212667";

export function LocationSection({ isOpen, opensAt, opensLabel }: LocationSectionProps) {
  return (
    <section className="location" id="location">
      <div className="location__inner">
        <h2 className="location__title">Find us</h2>

        <span className={`badge ${isOpen ? "badge--open" : "badge--closed"}`}>
          {isOpen
            ? "Open now"
            : `Closed · Opens ${opensLabel ? opensLabel + " " : ""}at ${opensAt}`}
        </span>

        <p className="location__address">
          {location.address}
          <br />
          <span className="location__ref">{location.reference}</span>
        </p>

        <div className="location__hours">
          {location.hours.map((h) => (
            <div className="location__hours-row" key={h.day}>
              <span>{h.day}</span>
              <span>{h.time}</span>
            </div>
          ))}
        </div>

        <div className="location__actions">
          <a
            className="btn btn--primary"
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions
          </a>
          <a className="location__phone" href={`tel:${location.phoneHref}`}>
            {location.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
