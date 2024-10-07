import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/Foooter.component";
import MainHeader from "@/components/MainHeader.component";
import { Suspense } from "react";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samo aciers",
  description: "revendeur d'aciers au détails",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
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
