import { fakeData } from "@/utils/fake-db";
import { capitalizeFirstLetter } from "@/utils/utils";
import { notFound } from "next/navigation";

function Table() {
  const data = [
    ["Nuance", "E355+SR"],
    ["Diamètre intérieur (mm)", "[75, 80, 85, 90, 95]"],
    ["Tolérance", "H8"],
    ["Diamètre extérieur (mm)", "[150, 160, 170, 180, 200]"],
    ["Types d’alliage", "E355+SR"],
  ];
  return (
    <>
      {/* Affichage pour les grands écrans (mode lignes) */}
      <div className="hidden lg:block">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-200">
            <tr>
              <th className="border text-left px-4 py-2">Nuance</th>
              <th className="border text-left px-4 py-2">
                Diamètre intérieur (mm)
              </th>
              <th className="border text-left px-4 py-2">Tolérance</th>
              <th className="border text-left px-4 py-2">
                Diamètre extérieur (mm)
              </th>
              <th className="border text-left px-4 py-2">Types d’alliage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">E355+SR</td>
              <td className="border px-4 py-2">[75, 80, 85, 90, 95]</td>
              <td className="border px-4 py-2">H8</td>
              <td className="border px-4 py-2">[150, 160, 170, 180, 200]</td>
              <td className="border px-4 py-2">E355+SR</td>
            </tr>
            {/* Ajouter d'autres lignes si nécessaire */}
          </tbody>
        </table>
      </div>

      {/* Affichage pour les petits écrans (mode colonnes) */}
      <div className="lg:hidden">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-200">
            <tr>
              <th className="border text-left px-4 py-2">Caractéristiques</th>
              <th className="border text-left px-4 py-2">Valeurs</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border px-4 py-2">{row[0]}</td>
                <td className="border px-4 py-2">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

import type { Metadata, ResolvingMetadata } from "next";
import DevisForm from "@/components/product/devis-form.component";
type Props = {
  params: { format: string; nuance: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Fetch product details (simulated)
  // const product = await fetchProduct(params.id)

  return {
    title: "Acheter de l'acier " + params.format + " nuance " + params.nuance,
    // description: product.description,
    // openGraph: {
    //   title: product.name,
    //   description: product.description,
    //   images: [product.image],
    // },
  };
}

export default function ExempleProduct({
  params,
}: {
  params: {
    format: string;
    nuance: string;
  };
}) {
  const formatPath = params.format;
  const nuancePath = params.nuance;
  const format = fakeData[formatPath];
  const data = format.nuances[nuancePath];
  if (
    ["rond", "carre", "hexagone", "plat"].indexOf(formatPath) < 0 ||
    data === undefined
  ) {
    notFound();
  }
  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <div className="breadcrumbs text-xs sm:text-sm">
        <ul>
          <li>
            <a href={"/"}>Accueil</a>
          </li>
          <li>
            <a href={"/produit/" + formatPath}>
              Sélection de nuance - {capitalizeFirstLetter(formatPath)}
            </a>
          </li>
          <li>
            {capitalizeFirstLetter(formatPath)} {nuancePath}
          </li>
        </ul>
      </div>
      {/* {/* Titre principal */}
      <h1 className="text-3xl font-bold mb-4">
        {capitalizeFirstLetter(formatPath)} {nuancePath}
      </h1>
      {/* Description produit */}
      <p className="text-gray-600 mb-6">{data.description}</p>
      {/* Section principale avec image et sélections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image produit */}
        <div>
          <img
            src={format.defaultImage}
            alt={format.description}
            className="w-2/3 h-auto mx-auto rounded"
          />
        </div>
        {/* Formulaire de sélection */}
        <DevisForm
          data={data}
          nuance={`${capitalizeFirstLetter(formatPath)}  ${nuancePath}`}
        />
      </div>
      {/* Informations complémentaires */}
      {/* <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Informations complémentaires
        </h2>
        <Table />
      </div> */}
    </div>
  );
}
