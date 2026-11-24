import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/Footer.component";
import MainHeader from "@/components/MainHeader.component";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { SITE_URL, SITE_NAME } from "@/utils/site";

const inter = Inter({ subsets: ["latin"] });

const DESCRIPTION =
  "SAMO Aciers, négociant en aciers et produits métallurgiques ferreux et non ferreux : rond, plat, carré, hexagone. Vente aux professionnels et particuliers, coupe à la demande, expédition dans toute la France depuis la Loire (près de Saint-Étienne).";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SAMO Aciers | Négoce d'aciers et produits métallurgiques (Loire)",
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    url: "/",
    title: "SAMO Aciers | Négoce d'aciers et produits métallurgiques",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "SAMO Aciers | Négoce d'aciers et produits métallurgiques",
    description: DESCRIPTION,
  },
};

// Données structurées : aide Google à afficher l'entreprise (téléphone, adresse...).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.png`,
  description: DESCRIPTION,
  telephone: "+33477930033",
  email: "commercial@samo-aciers.fr",
  foundingDate: "1958",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 Avenue de l'Industrie",
    postalCode: "42390",
    addressLocality: "Villars",
    addressCountry: "FR",
  },
  areaServed: "FR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="winter">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Suspense fallback={<div>Chargement...</div>}>
          <MainHeader />
          {children}
          <FooterComponent />
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
