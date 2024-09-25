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
          backgroundImage: "url(/decoupe-laser.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-mono font-bold">SAMO Aciers</h1>
            <p className="mb-5 text-2xl">
              Vente d'acier au détails depuis 1991
            </p>
            <button className="btn btn-primary">Découvrir</button>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="hero-content my-12 flex-col lg:flex-row">
          <img
            src="/home.jpg"
            className="max-w-sm rounded-lg shadow-2xl lg:mr-8"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Une Histoire Familiale de Confiance et d’Innovation <br /> depuis
              1958
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

      <div className="hero bg-base-200">
        <div className="hero-content flex flex-col my-8">
          <h1 className="text-5xl font-extrabold mb-4">
            Un service sur mesure
          </h1>
          <p className="text-base mb-4">
            Nous vendons tous types de nuances (C45, S355, 304L, ...), profil
            (rond, plat, tube, ...), finition (Laminé, étiré, ...).
          </p>
          <Products />
        </div>
      </div>

      <div className="hero my-12 flex flex-col mx-auto">
        <h1 className="text-5xl font-extrabold mb-8">Un service fiabilisé</h1>

        <div className="hero-content grid grid-cols-3 gap-4 w-full p-4">
          <InfoCardComponent
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            }
            title="Confiance"
            content="En tant qu’entreprise familiale, nous mettons un point d’honneur à établir des relations solides avec nos clients, fondées sur la transparence et la fiabilité."
          />
          <InfoCardComponent
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                />
              </svg>
            }
            title="Rapidité"
            content="Grâce à notre capacité de stockage élargie et à une organisation optimisée, nous garantissons des délais de livraison rapides pour répondre aux besoins urgents de nos clients."
          />
          <InfoCardComponent
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
            }
            title="Disponibilité"
            content="Notre large gamme de produits métallurgiques, associée à un service client réactif, fait de SAMO Aciers un partenaire de choix pour tous vos projets."
          />
        </div>
      </div>

      {/* <div className="hero my-12 flex flex-col mx-auto">
        <h1 className="text-5xl font-extrabold mb-8">Un service fiabilisé</h1>
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
      </div> */}

      <div className="hero bg-base-200">
        <div className="my-12">
          <h1 className="text-5xl font-extrabold mb-4 text-center">
            Une histoire de famille
          </h1>
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/history.jpg"
              className="max-w-sm rounded-lg shadow-2xl lg:mr-12"
            />
            <div>
              <ol className="relative border-s border-gray-700">
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-800">
                    1958
                  </time>
                  {/* <h3 className="text-lg font-semibold text-white">
                Application UI code in Tailwind CSS
              </h3> */}
                  <p className="text-base font-normal text-gray-500">
                    la Société Ameublement Mécanique et Outillage, aujourd’hui
                    connue sous le nom de SAMO Aciers, est fondée. À ses débuts,
                    elle se spécialise dans la fabrication de petits mobiliers
                    d’atelier et le stockage d’aciers étirés à froid. Ce
                    savoir-faire dans les matériaux métallurgiques se perpétue
                    encore aujourd’hui.
                  </p>
                </li>
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-800">
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
                  <time className="mb-1 text-sm font-normal leading-none text-gray-800">
                    1990
                  </time>
                  {/* <h3 className="text-lg font-semibold text-white">
                Application UI code in Tailwind CSS
              </h3> */}
                  <p className="text-base font-normal text-gray-500">
                    l’entreprise déménage à VILLARS, augmentant ainsi sa
                    capacité de stockage et élargissant sa gamme pour proposer
                    tous types de produits métallurgiques, en barres ou à la
                    coupe.
                  </p>
                </li>
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-800">
                    2018
                  </time>
                  {/* <h3 className="text-lg font-semibold text-white">
                Marketing UI design in Figma
              </h3> */}
                  <p className="text-base font-normal text-gray-500">
                    L’esprit familial de l’entreprise se renforce en 2018 avec
                    l’arrivée de Maxime BRUYERE, fils cadet de Jean-Claude.
                  </p>
                </li>
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-800">
                    2023
                  </time>
                  {/* <h3 className="text-lg font-semibold text-white">
                E-Commerce UI code in Tailwind CSS
              </h3> */}
                  <p className="text-base font-normal text-gray-500">
                    En 2023, il reprend les rênes de l’entreprise, marquant le
                    début d’une nouvelle ère pour SAMO Aciers.
                  </p>
                </li>
                <li className="ms-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-800">
                    2024
                  </time>
                  {/* <h3 className="text-lg font-semibold text-white">
                E-Commerce UI code in Tailwind CSS
              </h3> */}
                  <p className="text-base font-normal text-gray-500">
                    Cette année, l’entreprise lance un ambitieux projet de
                    rénovation et d’agrandissement pour doubler sa surface de
                    stockage à plus de 1700 m². Ce projet vise à élargir encore
                    davantage la gamme de produits et à améliorer le confort de
                    travail des collaborateurs. SAMO Aciers continue d’écrire
                    son histoire en restant fidèle à ses valeurs d’entreprise
                    familiale, tout en modernisant ses infrastructures pour
                    répondre aux besoins croissants de ses clients. Grâce à
                    cette vision, SAMO Aciers demeure un partenaire de confiance
                    pour ses clients en quête de rapidité et de disponibilité.
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
