import type { Metadata } from "next";
import Link from "next/link";
import { fakeData } from "@/utils/fake-db";

export const metadata: Metadata = {
  title: "Tous nos aciers : rond, plat, carré, hexagone",
  description:
    "Retrouvez toute la gamme SAMO Aciers : rond, plat, carré et hexagone en acier. Choisissez un format puis une nuance pour consulter les dimensions et demander un devis.",
  alternates: { canonical: "/produit" },
};

export default function ProduitsPage() {
  return (
    <div className="max-w-screen-xl mx-auto p-6 min-h-96 mt-12">
      <h1 className="text-3xl font-bold mb-4">Tous les aciers</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Choisissez un format pour découvrir les nuances disponibles, leurs
        dimensions, et demander votre devis. Nous coupons à la demande et
        expédions dans toute la France.
      </p>
      <ul className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-x-8 md:gap-y-4">
        {Object.entries(fakeData).map(([format, data]) => (
          <li key={format}>
            <Link
              href={`/produit/${format}`}
              className="group flex gap-4 items-center py-3 px-5 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center justify-center w-24 h-24 rounded-md bg-white ring-1 ring-slate-200 group-hover:ring-slate-400 group-hover:bg-white transition">
                <img
                  src={data.defaultImage}
                  alt={`Acier ${data.label.toLowerCase()}`}
                  className="w-16 h-16"
                  width={64}
                  height={64}
                />
              </div>
              <div className="font-semibold">{data.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
