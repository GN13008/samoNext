export default function CoupeSection() {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row justify-between align-top">
        <div className="mr-12">
          <h2 className="w-full mb-4 text-left">
            Coupe à façon et stockage d’acier sur mesure
          </h2>
          <p className="w-full text-left text-base mb-4">
            Chez Samo Aciers, nous ne faisons pas que fournir des produits
            métallurgiques. Nous vous accompagnons également avec des services
            adaptés à vos besoins : la coupe à façon de votre matière, avec un
            stockage sécurisé chez nous et des débits à la demande en fonction
            de vos besoins.
          </p>
          <p className="w-full text-left text-base mb-4 lg:hidden">
            Grâce à nos équipements performants, nous découpons vos barres ou
            profilés aux dimensions souhaitées.
          </p>
          <p className="w-full text-left text-base mb-4 lg:hidden">
            Nous mettons à votre disposition un service de stockage dédié : vous
            pouvez commander vos produits en coupe et les faire livrer à la
            demande.
          </p>
          <ul className="hidden lg:block ps-5 mt-2 space-y-1 list-disc list-inside">
            <li>
              Grâce à nos équipements performants, nous découpons vos barres ou
              profilés aux dimensions souhaitées.
            </li>
            <li>
              Nous mettons à votre disposition un service de stockage dédié :
              vous pouvez commander vos produits en coupe et les faire livrer à
              la demande.
            </li>
            <li>
              Contactez-nous dès aujourd’hui pour un devis personnalisé sur vos
              besoins en coupe à façon et en stockage.
            </li>
          </ul>
        </div>
        <a
          href="/contact"
          title=""
          className="flex items-center text-base font-medium text-blue-600 hover:underline"
        >
          Demander un devis
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
    </>
  );
}
