import FAQ from "@/components/FAQ.component";
import Products from "@/components/homePage/products.component";
import TimeLineComponent from "@/components/homePage/timeLine.component";
import { ReactElement } from "react";

function InfoCardComponent({
  svg,
  title,
  content,
}: {
  svg: ReactElement;
  title: any;
  content: any;
}) {
  return (
    <div className="card bg-base-100 shadow-xl rounded-box px-8 py-4 flex-cols gap-2 h-full">
      {svg}
      <h2 className="card-title">{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/home3.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <p className="mb-5 text-7xl font-mono font-bold text-white">
              SAMO Aciers
            </p>
            <p className="mb-5 text-3xl text-white">
              Votre fournisseur de produits métallurgiques ferreux et
              non-ferreux.
            </p>
            <a href="/produit/exemple">
              <button className="btn btn-md btn-primary text-white">
                Découvrir
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="hero-content my-12 flex-col lg:flex-row">
          <img
            src="/3d_samo.jpg"
            className="lg:max-w-md rounded-lg shadow-2xl lg:mr-8 brightness-90"
          />
          <div>
            <h1 className="mb-4 text-3xl md:text-5xl tracking-tight font-extrabold text-gray-800 hidden md:inline">
              Une Histoire Familiale de Confiance et de longévité
            </h1>
            <p className="py-6">
              Depuis 1958, SAMO Aciers accompagne ses clients avec expertise et
              passion dans le domaine du négoce d’aciers. De ses débuts dans la
              fabrication de mobiliers d’atelier à son évolution en un acteur
              majeur du secteur métallurgique, SAMO Aciers a su garder ses
              valeurs familiales intactes : la confiance, la rapidité, et la
              disponibilité.
            </p>
          </div>
        </div>
      </div>

      <div className="hero bg-slate-50" id="produits">
        <div className="hero-content flex flex-col my-8">
          <div className="w-full flex flex-col lg:flex-row justify-between align-top">
            <div className="">
              <h1 className="w-full mb-4 text-3xl md:text-5xl tracking-tight font-extrabold text-gray-800 text-left">
                Un service sur mesure
              </h1>
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
                  aciers alliés de mécaniques : C45, C35, S235, S355, 16NC8,
                  42CD4R, 42CD4T, ETG100, …
                </li>
                <li>
                  aciers fortement alliés à outils : 40CDM8T, 30CND8T, 55NCDV7T,
                  Z160CDV12, 35NCD16, Z38CDV5, 90MCV8, 100C6, …
                </li>
                <li>
                  aciers inoxydables : Z30C13T (1.4028), 304L (1.4307), 316L
                  (1.4404), 431 (1.4057), APX4 (1.4418), 17-4PH (1.4542), ...
                </li>
                <li>
                  produits non ferreux : Bronze, Laiton, Aluminium, Titane, …
                </li>
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
          <Products />
        </div>
      </div>
      <section className="bg-white antialiased py-4 md:py-8">
        <div className="py-8 mx-auto max-w-screen-xl px-8 sm:py-16">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-3xl md:text-5xl tracking-tight font-extrabold text-gray-800">
              Un service fiabilisé
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Avec notre expertise de plus de 50 ans, nous vous garantissons un
              service de qualité
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12">
                <svg
                  className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Confiance</h3>
              <p className="text-gray-500">
                En tant qu’entreprise familiale, nous mettons un point d’honneur
                à établir des relations solides avec nos clients, fondées sur la
                transparence et la fiabilité.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12">
                <svg
                  className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Rapidité</h3>
              <p className="text-gray-500">
                Grâce à notre stock et à notre capacité de sciage, notre
                entreprise de taille humaine nous permet de garantir des délais
                de livraison rapides pour répondre aux besoins urgents de nos
                clients.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12">
                <svg
                  className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Disponibilité</h3>
              <p className="text-gray-500">
                Nos installations, notre organisation optimisée et notre large
                gamme de produits métallurgiques, associée à un service client
                réactif, fait de SAMO Aciers un partenaire de choix pour tous
                vos projets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 w-full antialiased py-4 md:py-8">
        <div className="py-8 mx-auto max-w-screen-xl px-8 sm:py-16">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-3xl md:text-5xl tracking-tight font-extrabold text-gray-800">
              Samo en quelques chiffres
            </h2>
            {/* <p className="text-gray-500 sm:text-xl">
              Avec notre expertise de plus de 50 ans, nous vous garantissons un
              service de qualité
            </p> */}
          </div>
          <div className="max-md:stats-vertical stats shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Quantité d'acier vendue</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Client livré</div>
              <div className="stat-value text-secondary">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              </div>
              <div className="stat-value">86%</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white antialiased py-4 md:py-8">
        <div className="py-8 mx-auto max-w-screen-xl px-8 sm:py-16 ">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-3xl md:text-5xl tracking-tight font-extrabold text-gray-800">
              Equipements
            </h2>
            {/* <p className="text-gray-500 sm:text-xl">
              Nous nous efforcons de maintenir une qualité d'outillages pour
              garantir notre performance
            </p> */}
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              {/* <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12">
                <svg
                  className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div> */}
              <h3 className="mb-2 text-xl font-bold">Scies</h3>
              <p className="text-gray-500">
                Kasto SSB 260 A2 capacité de coupe Ø260 maxi <br /> Kasto SSB
                260 A2 capacité de coupe Ø260 maxi <br /> Kasto WIN A 3.3
                capacité de coupe Ø330 maxi <br /> Amada HA400 capacité de coupe
                Ø400 maxi <br />
              </p>
            </div>
            <div>
              {/* <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12">
                <svg
                  className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div> */}
              <h3 className="mb-2 text-xl font-bold">Pont roulants</h3>
              <p className="text-gray-500">
                KONE Pont Roulant 3.2T <br />
                SERAL Pont Roulant 5T <br />
                SERAL Pont Roulant 5T <br />
              </p>
            </div>
            <div>
              {/* <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12">
                <svg
                  className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div> */}
              <h3 className="mb-2 text-xl font-bold">Chariots élévateur</h3>
              <p className="text-gray-500">KOMATSU 2.5T</p>
            </div>
          </div>
        </div>
      </section>

      <div className="hero bg-slate-50" id="histoire">
        <div className="my-12">
          <div className="hero-content flex-col">
            <h1 className="w-full mb-4 text-3xl md:text-5xl tracking-tight font-extrabold text-gray-800 text-left">
              Une histoire de famille
            </h1>
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="/history1.jpg"
                className="lg:max-w-md rounded-lg shadow-2xl lg:mr-12 brightness-90"
              />
              <div>
                <ol className="relative border-s border-gray-700">
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-blue-500">
                      1958
                    </time>
                    {/* <h3 className="text-lg font-semibold text-white">
                Application UI code in Tailwind CSS
              </h3> */}
                    <p className="text-base font-normal text-gray-500">
                      Création de la Société d’Ameublement Mécanique et
                      Outillage, aujourd’hui connue sous son acronyme devenue sa
                      dénomination commerciale : SAMO Aciers. À ses débuts, elle
                      se spécialise dans la fabrication de petits mobiliers
                      d’atelier et le stockage d’aciers étirés à froid. Ce
                      savoir-faire dans les matériaux métallurgiques se perpétue
                      encore aujourd’hui.
                    </p>
                  </li>
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-blue-500">
                      1989
                    </time>
                    {/* <h3 className="text-lg font-semibold text-white">
                Application UI code in Tailwind CSS
              </h3> */}
                    <p className="text-base font-normal text-gray-500">
                      Jean-Claude BRUYERE reprend l’entreprise et décide de se
                      concentrer exclusivement sur le négoce d’aciers étirés à
                      froid.
                    </p>
                  </li>
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-blue-500">
                      1990
                    </time>
                    {/* <h3 className="text-lg font-semibold text-white">
                Application UI code in Tailwind CSS
              </h3> */}
                    <p className="text-base font-normal text-gray-500">
                      L’entreprise déménage à VILLARS, augmentant ainsi sa
                      capacité de stockage passant de 300m² à environ 900m² de
                      bâtiment.
                    </p>
                  </li>
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-blue-500">
                      1992
                    </time>
                    {/* <h3 className="text-lg font-semibold text-white">
                Application UI code in Tailwind CSS
              </h3> */}
                    <p className="text-base font-normal text-gray-500">
                      SAMO Aciers développe sa gamme pour proposer tous types de
                      produits métallurgiques, en barres ou à la coupe.
                    </p>
                  </li>
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-blue-500">
                      2018
                    </time>
                    {/* <h3 className="text-lg font-semibold text-white">
                Marketing UI design in Figma
              </h3> */}
                    <p className="text-base font-normal text-gray-500">
                      L’esprit familial de l’entreprise se renforce en 2018 avec
                      l’arrivée de Maxime BRUYERE, fils cadet de Jean-Claude.
                      Fort de son CV (Master de Commerce International) et ses
                      10 ans d’expérience professionnelles dans la mécanique et
                      le commerce dans l’industrie, il booste ainsi l’activité
                      de SAMO Aciers.
                    </p>
                  </li>
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-blue-500">
                      2023
                    </time>
                    {/* <h3 className="text-lg font-semibold text-white">
                E-Commerce UI code in Tailwind CSS
              </h3> */}
                    <p className="text-base font-normal text-gray-500">
                      Maxime reprend officiellement les rênes de l’entreprise,
                      marquant le début d’une nouvelle ère pour SAMO Aciers.
                    </p>
                  </li>
                  <li className="ms-4">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-blue-500">
                      2024
                    </time>
                    {/* <h3 className="text-lg font-semibold text-white">
                E-Commerce UI code in Tailwind CSS
              </h3> */}
                    <p className="text-base font-normal text-gray-500">
                      L’entreprise lance un ambitieux projet de rénovation et
                      d’agrandissement pour augmenter encore sa surface de
                      stockage à près de 2000 m². Ce projet vise à élargir
                      encore davantage la gamme de produits et à améliorer le
                      confort de travail des collaborateurs. <br />
                      SAMO Aciers continue d’écrire son histoire en restant
                      fidèle à ses valeurs, tout en modernisant ses
                      infrastructures pour répondre aux besoins croissants de
                      ses clients. Grâce à cette vision, SAMO Aciers demeure un
                      partenaire industriel de confiance sur la région
                      Rhône-Alpes.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
    </main>
  );
}
