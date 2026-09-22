import type { Metadata } from "next";
import "../styles/tokens.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.barranddaycoffee.com"),
  title: "Barr & Day Coffee Co.",
  description: "Café de verdad, al precio de todos los días.",
  openGraph: {
    title: "Barr & Day Coffee Co.",
    description: "Café de verdad, al precio de todos los días.",
    url: "https://www.barranddaycoffee.com",
    siteName: "Barr & Day Coffee Co.",
    locale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barr & Day Coffee Co.",
    description: "Café de verdad, al precio de todos los días.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Barr & Day Coffee Co.",
  url: "https://www.barranddaycoffee.com",
  image: "https://www.barranddaycoffee.com/icon.svg",
  sameAs: ["https://www.instagram.com/barranddaycoffee"],
  servesCuisine: "Coffee",
  priceRange: "$",
  email: "chris@barranddaycoffee.com",
  // TODO: agregar address (PostalAddress) y telephone reales cuando estén confirmados
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
