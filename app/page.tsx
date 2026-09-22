import { Hero } from "../components/sections/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero isOpenNow={true} locationLabel="El Paso, TX" />

      {/* Las siguientes secciones (Menú, Ubicación, Reseñas, CTA final)
          se agregan aquí en el mismo orden que definimos en el copy:
          <MenuSection />
          <LocationSection />
          <ReviewsSection />
          <FinalCTA />
      */}
    </main>
  );
}
