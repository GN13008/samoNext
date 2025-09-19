import FAQ from "@/components/FAQ.component";
import CoupeSection from "@/components/homePage/coupe.component";
import EquipementsSection from "@/components/homePage/equipements.component";
import NumbersSection from "@/components/homePage/numbers.component";
import ProductsSection from "@/components/homePage/products.component";
import ValuesSection from "@/components/homePage/values.component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/home3.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-45"></div>
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
            Une histoire familiale de confiance et de longévité
          </h2>
          <img
            src="/3d_samo.jpg"
            className="lg:max-w-md rounded-lg shadow-2xl lg:mr-8 brightness-90"
          />
          <div>
            <h2 className="mb-4 hidden md:inline">
              Une histoire familiale de confiance et de longévité
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
      <div className="hero bg-white" id="produits">
        <div className="hero-content flex flex-col my-2 lg:my-12">
          <CoupeSection />
        </div>
      </div>
      <div className="hero bg-slate-50 antialiased">
        <div className="hero-content flex flex-col my-2 lg:my-12">
          <ValuesSection />
        </div>
      </div>

      {/* <div className="hero bg-slate-50">
        <div className="hero-content w-full flex-col my-2 lg:my-12">
          <NumbersSection />
        </div>
      </div> */}

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
                    d’expériences professionnelles dans la mécanique et le
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
