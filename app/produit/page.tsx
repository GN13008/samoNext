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
      <ul className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-x-8 md:gap-y-4">
        {Object.keys(fakeData).map((produit) => (
          <li>
            <a
              href={`/produit/${produit}`}
              className="group flex gap-4 items-center py-3 px-5 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center justify-center w-24 h-24 rounded-md bg-white ring-1 ring-slate-200 group-hover:ring-slate-400 group-hover:bg-white transition">
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
