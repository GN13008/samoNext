import CTA from "@/components/CTA.component";
import FAQ from "@/components/FAQ.component";
import Footer from "@/components/Footer.component";
import MainHeader from "@/components/MainHeader.component";
import Hero from "@/components/Hero.component";
import Hero2 from "@/components/Hero2.component";
import Pricing from "@/components/Pricing.component";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainHeader />
      <Hero />
      <Hero2 />
      <CTA />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
