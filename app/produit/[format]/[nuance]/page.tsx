import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fakeData } from "@/utils/fake-db";

type Props = {
  params: { format: string; nuance: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.entries(fakeData).flatMap(([format, data]) =>
    Object.keys(data.nuances).map((nuance) => ({ format, nuance }))
  );
}

export function generateMetadata({ params }: Props): Metadata {
  const format = fakeData[params.format];
  const data = format?.nuances[params.nuance];
  if (!format || !data) return {};
  const name = format.label.toLowerCase();

  return {
    title: `Acier ${name} ${params.nuance} (${data.description})`,
    description: `${format.label} en acier ${data.description} (nuance ${params.nuance}) : dimensions disponibles, vente en barres ou à la coupe. Devis rapide par mail ou téléphone, expédition dans toute la France.`,
    alternates: {
      canonical: `/produit/${params.format}/${encodeURIComponent(params.nuance)}`,
    },
  };
}

export default function NuancePage({ params }: Props) {
  const format = fakeData[params.format];
  const data = format?.nuances[params.nuance];
  if (!format || data === undefined) {
    notFound();
  }
  const name = format.label.toLowerCase();

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
          <li>
            <Link href={`/produit/${params.format}`}>{format.label}</Link>
          </li>
          <li>{params.nuance}</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold mb-4">
        {format.label} {params.nuance}
      </h1>
      <p className="text-gray-600 mb-6">{data.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={format.defaultImage}
            alt={`Barre d'acier ${name} ${data.description}`}
            className="w-2/3 h-auto mx-auto rounded"
            width={400}
            height={400}
          />
        </div>
        <div>
          <div className="flex flex-col gap-4 mb-4">
            {data.dims.length > 0 && (
              <h2 className="block text-xl font-semibold text-gray-700">
                Dimensions disponibles :
              </h2>
            )}
            {data.dims.map((dim, i) => (
              <div key={i}>
                {dim.type == "list" && (
                  <div>
                    <h3 className="block text-lg font-medium text-gray-700">
                      {dim.label}
                    </h3>
                    <ul className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-2 pr-2 max-h-64 sm:max-h-96 overflow-auto">
                      {dim.values.map((value: any) => (
                        <li
                          key={value}
                          className="border rounded-md py-2 px-4 bg-gray-100 text-center"
                        >
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {dim.type == "range" && (
                  <div>
                    <h3 className="block text-lg font-medium text-gray-700">
                      {dim.label}
                    </h3>
                    <p>
                      De {dim.values[0]} à {dim.values[1]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-4 flex-col lg:flex-row">
            <a
              href={`mailto:commercial@samo-aciers.fr?subject=${encodeURIComponent(
                `Demande de devis : ${format.label} ${params.nuance}`
              )}`}
              className="btn btn-wide btn-primary"
            >
              Demander un devis par mail
            </a>
            <a href="tel:0477930033" className="btn btn-wide btn-secondary">
              Demander un devis par téléphone
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
