type PriceProps = {
  value: string; // ej. "$3.00" o "$5.25 / $5.75"
  anchor?: boolean; // true solo para el precio de entrada (espresso)
};

/**
 * Regla dura: el precio nunca se anima, nunca cuenta hacia arriba,
 * nunca aparece con fade. Ver "elementos que nunca deben moverse"
 * en /areas/barr-day-coffee.md.
 */
export function Price({ value, anchor = false }: PriceProps) {
  return (
    <span className={`price ${anchor ? "price--anchor" : ""}`}>
      {value}
      <style jsx>{`
        .price {
          font-family: var(--font-display);
          font-weight: 600;
          font-variant-numeric: tabular-nums;
          color: var(--color-ink);
          white-space: nowrap;
        }
        .price--anchor {
          color: var(--color-gold);
        }
      `}</style>
    </span>
  );
}
