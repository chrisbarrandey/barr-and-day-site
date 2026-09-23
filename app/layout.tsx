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
    locale: "en_US",
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
  telephone: "+1-915-977-2655",
  email: "chris@barranddaycoffee.com",
  priceRange: "$",
  servesCuisine: "Coffee",
  address: {
    "@type": "PostalAddress",
    streetAddress: "13671 Eastlake Blvd",
    addressLocality: "Horizon City",
    addressRegion: "TX",
    postalCode: "79928",
    addressCountry: "US",
  },
  areaServed: "El Paso, TX",
  sameAs: [
    "https://www.instagram.com/barranddaycoffee",
    "https://www.facebook.com/barranddaycoffee",
    "https://www.tiktok.com/@barranddaycoffee",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
