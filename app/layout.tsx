import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/Footer.component";
import MainHeader from "@/components/MainHeader.component";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samo aciers",
  description:
    "SAMO aciers, revendeur d'aciers au détails. Situé à coté de Saint etienne (lyon), nous pouvons expédier tous types de produits métallurgiques dans toute la france.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <Analytics />
      <SpeedInsights />
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <MainHeader />
          {children}
          <FooterComponent />
        </Suspense>
      </body>
    </html>
  );
}
