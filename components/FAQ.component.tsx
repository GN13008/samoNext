"use client";

import { useRef, useState } from "react";

const faqList = [
  {
    question: "Pouvez-vous livrer la marchandise ?",
    answer: (
      <p>
        Oui nous travaillons avec des transporteurs fiables et disponible pour
        répondre à des livraisons rapides.
      </p>
    ),
  },
  // {
  //   question: "Est-ce possible de commander directement sur le site ?",
  //   answer: (
  //     <p>
  //       Bien sûr ! Vous avez accès à votre espace client dédié permettant
  //       d’obtenir dans un premier temps, vos tarifs personnalisés pour vos
  //       chiffrages, puis de les valider en commande par la suite si vous le
  //       souhaitez.
  //     </p>
  //   ),
  // },
  {
    question: "Puis-je enlever la marchandise sur place ?",
    answer: (
      <p>
        Oui, notre infrastructure nous permet de recevoir nos fournisseurs et
        nos clients d’une façon pratique et fluide.
      </p>
    ),
  },
  {
    question: "Puis-je commander si je suis particulier ?",
    answer: (
      // <p>
      //   Oui vous pouvez commander et payer en ligne, ou payer au bureau si vous
      //   venez directement récupérer votre matière.
      // </p>
      <p>Oui nous vendons aux professionnelles et aux particuliers.</p>
    ),
  },
  {
    question: "J'ai une autre question",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Contactez nous par mail{" "}
        <a href="mailto:info@samo-aciers.fr" className="text-primary">
          info@samo-aciers.fr
        </a>
      </div>
    ),
  },
];

const Item = ({ item }: { item: any }) => {
  const accordion = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-100" id="faq">
      <div className="py-8 lg:py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Questions fréquentes
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
