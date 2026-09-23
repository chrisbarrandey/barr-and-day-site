import { Price } from "../ui/Price";

type HeroProps = {
  isOpenNow: boolean;
  opensAt?: string;
  opensLabel?: string;
  locationLabel: string;
};

export function Hero({ isOpenNow, opensAt, opensLabel, locationLabel }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className={`badge ${isOpenNow ? "badge--open" : "badge--closed"}`}>
          {isOpenNow
            ? "Open now"
            : `Closed · Opens ${opensLabel ? opensLabel + " " : ""}at ${opensAt}`}
          {" "}in {locationLabel}
        </span>

        <h1 className="hero__title">
          Real coffee,
          <br />
          at an everyday price.
        </h1>

        <p className="hero__subtitle">
          Espresso from <Price value="$3.00" anchor /> — your nearest coffee
          trailer, ready in minutes.
        </p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#menu">
            See the menu
          </a>
          <a className="btn btn--text" href="#location">
            ¿Dónde andamos hoy?
          </a>
        </div>
      </div>
    </section>
  );
}
