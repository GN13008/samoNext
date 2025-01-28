"use client";
import { fakeData } from "@/utils/fake-db";
import { capitalizeFirstLetter } from "@/utils/utils";

export default function ExempleProduct({
  params,
}: {
  params: { format: string };
}) {
  return (
    <div className="max-w-screen-xl mx-auto p-6 min-h-96 mt-12">
      {/* {/* Titre principal */}
      <h1 className="text-3xl font-bold mb-4">Tous les aciers</h1>
      <ul className="flex flex-col md:flex-row gap-8 md:gap-16">
        {Object.keys(fakeData).map((produit) => (
          <li>
            <a
              href={`/produit/${produit}`}
              className="flex gap-3 items-center py-3 px-5 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center justify-center w-20 h-20">
                <img
                  src={fakeData[produit].defaultImage}
                  alt={`icone vente ${produit}`}
                  className="w-16 h-16"
                />
              </div>
              <div className="font-semibold">
                {capitalizeFirstLetter(produit)}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
