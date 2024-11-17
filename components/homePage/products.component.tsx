import { products } from "../data";

export default function ProductsSection() {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row justify-between align-top">
        <div className="">
          <h2 className="w-full mb-4 text-left">Un service sur mesure</h2>
          <p className="w-full text-left text-base mb-4">
            Nous vendons tous types de produits métallurgiques laminé ou
            étiré, en rond, plat, carré, tube, et profilé.
          </p>
          <p className="w-full text-left text-base mb-4 lg:hidden">
            Produits traditionnels en aciers standard, aciers alliés de
            mécanique, aciers fortement alliés à outils, aciers inoxydables,
            produits non ferreur, plastique, ...
          </p>
          <ul className="hidden lg:block ps-5 mt-2 space-y-1 list-disc list-inside">
            <li>
              produits traditionnels en acier standard : tube carré, tube
              rectangulaire, cornière, poutrelle, tôle, …
            </li>
            <li>
              aciers alliés de mécaniques : C45, C35, S235, S355, 16NC8, 42CD4R,
              42CD4T, ETG100, …
            </li>
            <li>
              aciers fortement alliés à outils : 40CDM8T, 30CND8T, 55NCDV7T,
              Z160CDV12, 35NCD16, Z38CDV5, 90MCV8, 100C6, …
            </li>
            <li>
              aciers inoxydables : Z30C13T (1.4028), 304L (1.4307), 316L
              (1.4404), 431 (1.4057), APX4 (1.4418), 17-4PH (1.4542), ...
            </li>
            <li>produits non ferreux : Bronze, Laiton, Aluminium, Titane, …</li>
            <li>
              plastique : PA6, PEHD, POM, PMMA, PC, CELORON, PTFE, PEEK, …
            </li>
          </ul>
        </div>
        <a
          href="/produit/exemple"
          title=""
          className="flex items-center text-base font-medium text-blue-600 hover:underline"
        >
          Voir tous les aciers
          <svg
            className="ms-1 h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>
      </div>
      <div className="flex flex-row flex-wrap w-full mx-auto content-center items-center">
        {products.map((prod, i) => {
          return (
            <div className="w-1/2 lg:w-1/5 p-4">
              <a
                key={i}
                href="/produit/exemple"
                className="relative flex flex-col justify-center overflow-hidden rounded-xl shadow-md"
              >
                <div className="group relative m-0 flex rounded-xl shadow-2xl sm:mx-auto sm:max-w-lg">
                  <div className="z-10 h-full w-full overflow-hidden rounded-xl border opacity-50 transition duration-300 ease-in-out group-hover:opacity-80">
                    <img
                      className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-60 transition duration-300 group-hover:scale-110"
                      src={prod.img}
                      alt={prod.title}
                    />
                  </div>
                  <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                    <h1 className="text-l lg:text-2xl font-semibold text-white">
                      {prod.title}
                    </h1>
                    <h1 className="hidden lg:block text-sm font-light text-gray-200">
                      {prod.content}
                    </h1>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
