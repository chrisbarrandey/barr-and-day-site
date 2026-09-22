import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "text";
  children: ReactNode;
  disabledReason?: string;
};

export function Button({
  variant = "primary",
  children,
  disabledReason,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || Boolean(disabledReason);

  return (
    <button
      className={`btn btn--${variant} ${className}`}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      <span>{children}</span>
      {disabledReason && <span className="btn__reason">{disabledReason}</span>}
    </button>
  );
}
