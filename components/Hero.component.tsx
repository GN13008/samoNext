import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars.component";
import config from "@/config";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Ton CV Sportif
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Augmente ta visibilité en ligne sans te prendre la tête. Plus rapide
          et moins onéreux qu'un site perso, affiche les infos que tu souhaites
          et augmente ta présence en ligne
        </p>
        <button className="btn btn-primary btn-wide">
          <Link href="/sign-up">Get {config.appName}</Link>
        </button>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src="/profil.jpg"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
