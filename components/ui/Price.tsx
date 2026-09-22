type PriceProps = {
  value: string;
  anchor?: boolean;
};

export function Price({ value, anchor = false }: PriceProps) {
  return (
    <span className={`price ${anchor ? "price--anchor" : ""}`}>
      {value}
    </span>
  );
}
