import { Hero } from "../components/sections/Hero";
import { MenuSection } from "../components/sections/MenuSection";
import { LocationSection } from "../components/sections/LocationSection";
import { getOpenStatus } from "../lib/is-open-now";

export default function HomePage() {
  const status = getOpenStatus();

  return (
    <main>
      <Hero
        isOpenNow={status.isOpen}
        opensAt={!status.isOpen ? status.opensAt : undefined}
        opensLabel={!status.isOpen ? status.opensLabel : undefined}
        locationLabel="Horizon City, TX"
      />
      <MenuSection />
      <LocationSection
        isOpen={status.isOpen}
        opensAt={!status.isOpen ? status.opensAt : undefined}
        opensLabel={!status.isOpen ? status.opensLabel : undefined}
      />

      {/* Still pending: Reviews section, Final CTA */}
    </main>
  );
}
