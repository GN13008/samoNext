"use client";
import { fakeData } from "@/utils/fake-db";
import { usePathname, useRouter } from "next/navigation";

export default function ExempleProduct({
  params,
}: {
  params: { format: string };
}) {
  const router = useRouter();
  const pathname = usePathname();
  const nuances = Object.keys(fakeData[params.format]);
  return (
    <div className="max-w-screen-xl mx-auto p-6">
      {/* {/* Titre principal */}
      <h1 className="text-3xl font-bold mb-4">
        Selectionnez une Nuance de {params.format}
      </h1>
      {/* Description produit */}
      <p className="text-gray-600 mb-6">Description du format</p>
      {/* Section principale avec image et sélections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image produit */}
        <div>
          <img
            src="/acier_tube.png"
            alt="Tube acier rodé"
            className="w-2/3 h-auto mx-auto rounded"
          />
        </div>
        <select
          onChange={(e) => {
            const selectedValue = e.target.value;
            if (selectedValue) {
              // Conserve l'URL actuelle et ajoute `selectedValue`
              const newPath = `${pathname}/${selectedValue}`;
              router.push(newPath); // Met à jour l'URL
            }
          }}
          className="select select-primary w-full max-w-xs"
        >
          {nuances.length ? (
            <option disabled selected>
              Nuance de {params.format}
            </option>
          ) : (
            <option disabled selected>
              Pas de nuance disponible pour {params.format}
            </option>
          )}

          {nuances.map((nuance: any, index: any) => (
            <option key={index} value={nuance}>
              {nuance}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
