import { Button } from "../ui/Button";
import { Price } from "../ui/Price";

type HeroProps = {
  isOpenNow: boolean;
  opensAt?: string;
  locationLabel: string;
};

export function Hero({ isOpenNow, opensAt, locationLabel }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className={`badge ${isOpenNow ? "badge--open" : "badge--closed"}`}>
          {isOpenNow ? "Abierto ahora" : `Cerrado · Abrimos a las ${opensAt}`}
          {" "}en {locationLabel}
        </span>

        <h1 className="hero__title">
          Café de verdad,
          <br />
          al precio de todos los días.
        </h1>

        <p className="hero__subtitle">
          Espresso desde <Price value="$3.00" anchor /> — tu trailer de café más
          cercano, listo en minutos.
        </p>

        <div className="hero__actions">
          <Button variant="primary">Ver menú y precios</Button>
          <Button variant="text">¿Dónde estamos hoy?</Button>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: var(--space-4) var(--space-3);
          background: radial-gradient(
            120% 90% at 50% -10%,
            #172657 0%,
            var(--color-navy) 45%,
            var(--color-navy-deep) 100%
          );
          color: var(--color-ink);
        }

        .hero__content {
          max-width: 640px;
          margin: 0 auto;
          text-align: left;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-body);
          font-size: var(--fs-small);
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid var(--color-line);
          margin-bottom: var(--space-3);
        }
        .badge::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }
        .badge--open::before {
          background: var(--color-open);
        }
        .badge--closed::before {
          background: var(--color-closed);
        }

        .hero__title {
          font-family: var(--font-display);
          font-size: var(--fs-h1);
          font-weight: 500;
          line-height: 1.08;
          letter-spacing: -0.01em;
          margin: 0 0 var(--space-2);
        }

        .hero__subtitle {
          font-family: var(--font-body);
          font-size: 18px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.82);
          max-width: 46ch;
          margin: 0 0 var(--space-4);
        }

        .hero__actions {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          flex-wrap: wrap;
        }

        @media (min-width: 1024px) {
          .hero {
            padding-left: 8vw;
          }
        }
      `}</style>
    </section>
  );
}
