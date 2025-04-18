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
  // const pathname = usePathname();
  // const args = pathname.split("/");
  const formatPath = params.format;
  const nuancePath = params.nuance;
  // const formatPath = args[2];
  // const nuancePath = args[3];
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
        <div>
          {/* <form action="/ajouter_devis" method="POST" className="space-y-4"> */}
          {/* Sélection du diamètre intérieur */}
          <div className="flex flex-col gap-4 mb-4">
            <label className="block text-xl font-semibold text-gray-700">
              {data.dims.length ? "Dimensions disponibles :" : ""}
            </label>
            {data.dims.map((dim, i) => (
              <div key={i}>
                {dim.type == "list" && (
                  <div className="">
                    <label className="block text-lg font-medium text-gray-700">
                      {dim.label}
                    </label>
                    {/* <label for="diametre_interieur" className="block text-lg font-medium text-gray-700">Diamètre intérieur (mm)</label> */}
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-2 pr-2 max-h-64 sm:max-h-96 overflow-auto">
                      {dim.values.map((diam: any) => (
                        <button
                          key={diam}
                          type="button"
                          className="border rounded-md py-2 px-4 bg-gray-100 hover:bg-gray-200 focus:bg-indigo-600 focus:text-white"
                        >
                          {diam}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {dim.type == "range" && (
                  <div className="">
                    <label className="block text-lg font-medium text-gray-700">
                      {dim.label}
                    </label>
                    <p>
                      De {dim.values[0]} à {dim.values[1]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Sélection du diamètre extérieur */}

          {/* Option certificat */}
          {/* <div className="flex items-center">
              <input
                id="ccpu"
                name="ccpu"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label for="ccpu" className="ml-2 text-gray-700">Obtenir le CCPU (+7,00€)</label>
              <label className="ml-2 text-gray-700">
                Obtenir le CCPU (+7,00€)
              </label>
            </div> */}
          {/* Quantité */}
          {/* <div>
              <label for="quantite" className="block text-lg font-medium text-gray-700">Quantité</label>
              <label className="block text-lg font-medium text-gray-700">
                Quantité
              </label>
              <input
                type="number"
                id="quantite"
                name="quantite"
                value="1"
                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div> */}
          {/* Bouton ajouter au devis */}
          <div className="flex justify-between gap-4 flex-col lg:flex-row">
            <a
              href="mailto:commercial@samo-aciers.fr"
              className="btn btn-wide btn-primary"
            >
              Demander un devis par mail
            </a>
            <a href="tel:0477930033" className="btn btn-wide btn-secondary">
              Demander un devis par téléphone
            </a>
          </div>
          {/* </form> */}
        </div>
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
