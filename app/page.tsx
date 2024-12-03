import FAQ from "@/components/FAQ.component";
import EquipementsSection from "@/components/homePage/equipements.component";
import ProductsSection from "@/components/homePage/products.component";
import TimeLineComponent from "@/components/homePage/timeLine.component";
import ValuesSection from "@/components/homePage/values.component";
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
            <a href="#produits">
              <button className="btn btn-md btn-primary text-white">
                Découvrir
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="hero-content my-2 lg:my-12 flex-col lg:flex-row">
          <h2 className="md:hidden">
            Une Histoire Familiale de Confiance et de longévité
          </h2>
          <img
            src="/3d_samo.jpg"
            className="lg:max-w-md rounded-lg shadow-2xl lg:mr-8 brightness-90"
          />
          <div>
            <h2 className="mb-4 hidden md:inline">
              Une Histoire Familiale de Confiance et de longévité
            </h2>
            <p className="py-2 lg:py-6">
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
        <div className="hero-content flex flex-col my-2 lg:my-12">
          <ProductsSection />
        </div>
      </div>
      <div className="hero bg-white antialiased">
        <div className="hero-content flex flex-col my-2 lg:my-12">
          <ValuesSection />
        </div>
      </div>

      <div className="hero bg-slate-50">
        <div className="hero-content w-full flex-col my-2 lg:my-12">
          <div className="w-full text-left">
            <h2 className="mb-2">Samo en quelques chiffres</h2>
            {/* <p className="text-gray-500 sm:text-xl">
              Avec notre expertise de plus de 50 ans, nous vous garantissons un
              service de qualité
            </p> */}
          </div>
          <div className="">
            <div className="max-md:stats-vertical stats shadow">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="inline-block h-8 w-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                    />
                  </svg>
                </div>
                <div className="stat-title">Références sur stock</div>
                <div className="stat-value text-primary">2000</div>
                {/* <div className="stat-desc">Références sur stock</div> */}
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="inline-block h-8 w-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                    />
                  </svg>
                </div>
                <div className="stat-title">Nuances</div>
                <div className="stat-value text-secondary">30</div>
                {/* <div className="stat-desc">21% more than last month</div> */}
              </div>

              <div className="stat">
                {/* <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                
              </div> */}
                <div className="stat-figure text-standard">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="inline-block h-8 w-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div className="stat-title">Expédition</div>
                <div className="stat-value">48h</div>
                {/* <div className="stat-desc text-secondary">31 tasks remaining</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero bg-white antialiased">
        <div className="hero-content w-full flex flex-col my-2 lg:my-12">
          <EquipementsSection />
        </div>
      </div>

      <div className="hero bg-slate-50" id="histoire">
        <div className="hero-content flex flex-col">
          <h2 className="w-full lg:mb-4 text-left">Une histoire de famille</h2>
          <div className="hero-content p-0 lg:p-4 flex-col lg:flex-row">
            <img
              src="/history1.jpg"
              className="mb-2 w-1/2 lg:w-full lg:max-w-md rounded-lg shadow-2xl lg:mr-12 brightness-90"
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
                    Création de la Société d’Ameublement Mécanique et Outillage,
                    aujourd’hui connue sous son acronyme devenue sa dénomination
                    commerciale : SAMO Aciers. À ses débuts, elle se spécialise
                    dans la fabrication de petits mobiliers d’atelier et le
                    stockage d’aciers étirés à froid. Ce savoir-faire dans les
                    matériaux métallurgiques se perpétue encore aujourd’hui.
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
                    l’arrivée de Maxime BRUYERE, fils cadet de Jean-Claude. Fort
                    de son CV (Master de Commerce International) et ses 10 ans
                    d’expérience professionnelles dans la mécanique et le
                    commerce dans l’industrie, il booste ainsi l’activité de
                    SAMO Aciers.
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
                    stockage à près de 2000 m². Ce projet vise à élargir encore
                    davantage la gamme de produits et à améliorer le confort de
                    travail des collaborateurs. <br />
                    SAMO Aciers continue d’écrire son histoire en restant fidèle
                    à ses valeurs, tout en modernisant ses infrastructures pour
                    répondre aux besoins croissants de ses clients. Grâce à
                    cette vision, SAMO Aciers demeure un partenaire industriel
                    de confiance sur la région Rhône-Alpes.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <FAQ />
    </main>
  );
}
