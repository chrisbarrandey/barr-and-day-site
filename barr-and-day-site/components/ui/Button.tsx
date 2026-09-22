import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "text";
  children: ReactNode;
  /**
   * Si el botón está deshabilitado, esta razón se muestra visible
   * (no solo en un tooltip) y queda disponible para lectores de pantalla.
   * Nunca deshabilites un botón sin decir por qué — ver reglas de UX.
   */
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

      <style jsx>{`
        .btn {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 56px;
          padding: 0 28px;
          font-family: var(--font-body);
          font-size: var(--fs-body);
          font-weight: 500;
          border-radius: var(--radius);
          border: none;
          cursor: pointer;
          transition: background-color var(--dur-micro) var(--ease-standard),
            opacity var(--dur-tap);
        }

        .btn:active:not(:disabled) {
          opacity: 0.85; /* estado de presionado: instantáneo, sin transición */
        }

        .btn--primary {
          background: var(--color-gold);
          color: var(--color-navy-deep);
        }
        .btn--primary:hover:not(:disabled) {
          background: #d9b568;
        }

        .btn--secondary {
          background: transparent;
          color: var(--color-ink);
          border: 1px solid var(--color-line);
        }
        .btn--secondary:hover:not(:disabled) {
          border-color: rgba(255, 255, 255, 0.5);
        }

        .btn--text {
          height: auto;
          padding: 0;
          background: none;
          color: var(--color-sky);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .btn:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }

        .btn__reason {
          font-size: 11px;
          font-weight: 400;
          opacity: 0.8;
          margin-top: 2px;
        }
      `}</style>
    </button>
  );
}
