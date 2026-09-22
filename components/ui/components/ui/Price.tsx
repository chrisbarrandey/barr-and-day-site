type PriceProps = {
  value: string;
  anchor?: boolean;
};

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
