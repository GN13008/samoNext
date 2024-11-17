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
            <a href="/produit/exemple">
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
        <div className="hero-content flex flex-col my-2 lg:my-12">
          <div className="w-full mb-2 lg:mb-8">
            <h2 className="mb-4">Samo en quelques chiffres</h2>
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
      </div>

      <div className="hero bg-white antialiased">
        <div className="hero-content flex flex-col my-2 lg:my-12">
          <EquipementsSection />
        </div>
      </div>

      <div className="hero bg-slate-50" id="histoire">
        <div className="hero-content flex-col">
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
