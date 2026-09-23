import { Hero } from "../components/sections/Hero";
import { MenuSection } from "../components/sections/MenuSection";

export default function HomePage() {
  return (
    <main>
      <Hero isOpenNow={true} locationLabel="El Paso, TX" />
      <MenuSection />

      {/* Las siguientes secciones (Ubicación, Reseñas, CTA final)
          se agregan aquí en el mismo orden que definimos en el copy:
          <LocationSection />
          <ReviewsSection />
          <FinalCTA />
      */}
    </main>
  );
}
