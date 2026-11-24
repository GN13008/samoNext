import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fakeData } from "@/utils/fake-db";
import NuanceSelect from "./nuance-select";

type Props = { params: { format: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(fakeData).map((format) => ({ format }));
}

export function generateMetadata({ params }: Props): Metadata {
  const format = fakeData[params.format];
  if (!format) return {};
  const count = Object.keys(format.nuances).length;
  const name = format.label.toLowerCase();

  return {
    title:
      count > 0
        ? `Acier ${name} : nuances et dimensions`
        : `Acier ${name} : gamme et devis`,
    description:
      count > 0
        ? `Acier ${name} chez SAMO Aciers : ${count} nuances disponibles, vente en barres ou à la coupe, devis rapide et expédition dans toute la France.`
        : `Acier ${name} chez SAMO Aciers : vente en barres ou à la coupe, expédition dans toute la France. Contactez-nous pour connaître les dimensions disponibles et obtenir un devis.`,
    alternates: { canonical: `/produit/${params.format}` },
  };
}

export default function FormatPage({ params }: Props) {
  const format = fakeData[params.format];
  if (!format) notFound();

  const name = format.label.toLowerCase();
  // Trie les nuances par ordre alphabétique (insensible à la casse)
  const nuances = Object.keys(format.nuances).sort((a, b) =>
    a.localeCompare(b, "fr", { sensitivity: "base" })
  );

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <div className="breadcrumbs text-xs sm:text-sm">
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/produit">Produits</Link>
          </li>
          <li>{format.label}</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold mb-4">Acier {name}</h1>
      <p className="text-gray-600 mb-6 max-w-3xl">{format.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={format.defaultImage}
            alt={`Barre d'acier ${name}`}
            className="w-2/3 h-auto mx-auto rounded"
            width={400}
            height={400}
          />
        </div>
        <div>
          {nuances.length > 0 ? (
            <>
              <h2 className="text-xl font-semibold mb-3">
                Sélectionnez une nuance de {name}
              </h2>
              <NuanceSelect
                nuances={nuances}
                basePath={`/produit/${params.format}`}
                label={name}
              />
            </>
          ) : (
            <div className="mt-4">
              <p className="mb-4">
                Les références en ligne arrivent bientôt. En attendant,
                contactez-nous pour connaître les dimensions disponibles et
                obtenir un devis.
              </p>
              <div className="flex flex-col gap-4 lg:flex-row">
                <a
                  href="mailto:commercial@samo-aciers.fr"
                  className="btn btn-primary"
                >
                  Demander un devis par mail
                </a>
                <a href="tel:0477930033" className="btn btn-secondary">
                  04 77 93 00 33
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
