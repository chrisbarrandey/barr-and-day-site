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
    </section>
  );
}
