import type { Metadata } from "next";
import "../styles/tokens.css";
import "./globals.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.barranddaycoffee.com"),
  title: "Barr & Day Coffee Co.",
  description: "Real coffee, at an everyday price. El Paso's coffee trailer.",
  openGraph: {
    title: "Barr & Day Coffee Co.",
    description: "Real coffee, at an everyday price. El Paso's coffee trailer.",
    url: "https://www.barranddaycoffee.com",
    siteName: "Barr & Day Coffee Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barr & Day Coffee Co.",
    description: "Real coffee, at an everyday price. El Paso's coffee trailer.",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
