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

export default function LegalsPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8 text-gray-600">
        <div className="">
          {/* {{-- Mention légales --}} */}
          <div className="">
            <h1 className="text-gray-900 font-bold text-3xl pb-6">
              Mentions légales
            </h1>
            <h2 className="text-gray-900 font-bold text-xl pb-2">
              Nom de la société
            </h2>
            <p>
              SAMO ACIERS <br />
              Direction : Maxime Bruyère <br />
              RUE DE SAINT-GALMIER <br />
              42140 CHAZELLES-SUR-LYON <br />
              Téléphone : 04 77 93 00 33 <br />
              Email : direction@samo-aciers.fr
            </p>
            <p className="mt-2">N° Siret 58450034200046</p>
            <h2 className="text-gray-900 font-bold text-xl pt-4 pb-2">
              Conception et Hébergement
            </h2>
            <p>
              Le site est conçu par{" "}
              <a
                className="text-blue-500 "
                target="_blank"
                href="https://www.ateliergnd.fr/"
              >
                l'Atelier GND - Concepteur de projet web
              </a>
              <br />
              <br />
              Il est hébergée via la société Vercel. <br />
            </p>
            <h2 className="text-gray-900 font-bold text-xl pt-4 pb-2">
              Données personnelles
            </h2>
            <p>
              La visite du site ne nécessite pas d'informations liées à votre
              identité.
              {/* Celle ci vous seront cependant demandées pour procéder à
              tout paiement. Aucune informations bancaire n'est enregistré sur
              ce site. */}
            </p>
          </div>
          {/* {{-- CGV --}} */}
          {/* <div className="">
            <h1 className="text-gray-900 font-bold text-3xl pt-12 pb-6">
              Condition générales de vente
            </h1>
            <h2 className="text-gray-900 font-bold text-xl pb-2">
              ARTICLE 1 – OBJET
            </h2>
            <p>
              Les présentes Conditions Générales de Ventes (CGV) déterminent les
              droits et obligations du micro-entrepreneur Nicolé Jonathan et son
              client dans le cadre de la vente des prestations proposé par
              Captain John.
            </p>
            <h2 className="text-gray-900 font-bold text-xl pt-6 pb-2">
              ARTICLE 2 – PRESTATIONS
            </h2>
            <p>
              Captain John propose différentes balade en stand up paddle allant
              de quelques heures à quelques jours. Ces prestations sont
              encadrées par un professionnel, diplômé d’état et répondant aux
              obligations légales. <br />
              Une heure et un lieu de rendez-vous vous sont systématiquement
              communiqués sur la seance réservée. Pour le bon déroulement des
              activités et par respect envers les autres clients et le
              professionnel qui vous encadre, veillez à anticiper vos trajets de
              manière à être ponctuel.
            </p>
            <h2 className="text-gray-900 font-bold text-xl pt-6 pb-2">
              ARTICLE 3 – PRIX
            </h2>
            <p>
              Les prix sont indiqués sur chaques événements. Ils comprennent
              l'encadrement par un professionnel, ainsi que le prêt de tout le
              materiel nécessaire à l'activité (planche, pagaie et gilet de
              flottabilité). <br />
              Ces prix ne comprennent pas le transport ansi que les repas. Pour
              les évènements de plus d'une journée, voir directement sur le
              descriptif de l'activité (cas par cas). <br />
              Les prix peuvent varier à tout moment. le reglement se fait
              directement lors de la réservation. Le tarif est alors bloqué pour
              cette reservation.
            </p>
            <h2 className="text-gray-900 font-bold text-xl pt-6 pb-2">
              ARTICLE 4 – PAIEMENT
            </h2>
            <p>
              Le réglement se fait directement sur le site par carte bancaire
              via un outils de paiement en ligne : stripe.
            </p>
            <h2 className="text-gray-900 font-bold text-xl pt-6 pb-2">
              ARTICLE 5 – OBLIGATION DU CLIENT
            </h2>
            <p>
              Les activités de Captain John sont ouvertes à tous. <br />
              Il est cependant indispensable de ne présenter aucune
              contre-indication médicales à la pratique de l’activité encadrée.
              Pour les activités nautiques encadrées, le client doit en plus
              être capable de s’immerger totalement ainsi que de savoir nager au
              moins 25 mètres. <br />
              Si vous faite l’objet d’aucune contre-indication médicale mais que
              vous êtes dépendant de soins ou de traitements médicaux
              particuliers (asthme, diabète, etc.) ou encore que votre état de
              santé nécessite une attention particulière (femme enceinte,
              handicap, etc.) vous devrez impérativement en informer Captain
              john aventures lors de la réservation et prévoir les médicaments
              d’urgence adaptés selon les préconisations médicales. <br />
              Captain john aventures se réserve le droit de refuser le client en
              cas de non respect de ces conditions. Le client ne pourra
              prétendre à aucun remboursement, ni aucune indemnité.
            </p>
            <h2 className="text-gray-900 font-bold text-xl pt-6 pb-2">
              ARTICLE 6 – ASSURANCE ET RESPONSABILITE
            </h2>
            <p>
              Captain john aventures dispose d’une police d’assurance en
              Responsabilité Civile Professionnelle.
              <br />
              Elle permet notamment à l’assuré de satisfaire à l’obligation
              d’assurance résultant des dispositions des articles L321-1 et
              suivants et D321-1et suivants du Code du Sport.
              <br />
              En cas d’accident corporel , la responsabilité de captain john
              aventures est dégager dès la prise en charge de la victime par les
              organismes de secours compétents et toute suite hospitalière sera
              du ressort des assurances personnelles de l’accidenté.
              <br />
              Les activités de pleine nature se déroulent dans un environnement
              spécifique dit “à risque”. Chaque participant est conscient, étant
              donnée le caractère spécifique des activités proposées, qu’il peut
              courir certains risques dus notamment à l’éloignement, à
              l’isolement et au caractère spécifique du milieu (mer, grotte,
              falaise…etc). Il les assume en toute connaissance de cause et il
              doit se conformer aux règles de prudence et suivre les
              instructions données.
              <br />
              Le client est responsable du matériel qui lui à été prêté pour
              l’activité. Le micro-entrepreneur ne pourra être tenu responsable
              des préjudices pouvant être causés par le matériel mis à
              disposition. En cas de vol ou de détérioration du matériel prêté,
              il peut être demandé au client un dédommagement lié à l’usure
              anormale ou un remboursement total du matériel.
              <br />
              Captain John aventures ne pourra être tenu pour responsable de la
              perte, du vol (y compris dans les véhicules) ou des dommages
              matériel (lunettes, appareils photos, téléphone, etc.) durant
              l’activité et pouvant subvenir au cours de l’activité.
              <br />
              Les clients ont la possibilité d’effectuer les sorties avec leur
              propre matériel. Planche, pagaie, aide à flottabilité et leash
              sont obligatoires. Captain John aventures se réserve le droit de
              ne pas accepter un client si il juge que le matériel ne permet pas
              de naviguer en toute sécurité.
            </p>
            <h2 className="text-gray-900 font-bold text-xl pt-6 pb-2">
              ARTICLE 7 – PRET DE MATERIEL
            </h2>
            <p>
              En cas de vol ou de détérioration du matériel prêté, il peut être
              demandé au client un dédommagement lié à l’usure anormale ou un
              remboursement total du matériel.
            </p>
            <h2 className="text-gray-900 font-bold text-xl pt-6 pb-2">
              ARTICLE 8 – Annulation / Intérruption du fait du client
            </h2>
            <p>
              Dans le cas d'une annulation 48 h avant une réservation, un
              remboursement pourra être exigé. <br />
              En cas d’interruption lors de la prestation, le client ne pourra
              prétendre à aucun remboursement..
            </p>
            <h2 className="text-gray-900 font-bold text-xl pt-6 pb-2">
              ARTICLE 9 – Annulation / Intérruption du fait de Captain John
            </h2>
            <p>
              Captain John aventures se réserve le droit d’annuler, reporter ou
              adapter la sortie en fonction des conditions météorologiques ou du
              niveau des clients. <br />
              L’activité peu être annulée pour des raisons de sécurité ou pour
              tout autre cas de force majeur.
              <br />
              Dans ce cas la prestation est intégralement remboursée, si et
              seulement si celle-ci n’a pas engendrée de frais et sans pouvoir
              prétendre à une quelconque autre indemnité.
            </p>
            <h2 className="text-gray-900 font-bold text-xl pt-6 pb-2">
              ARTICLE 10 – Droit à l'image
            </h2>
            <p>
              Les participants aux activités de Captain John aventures acceptent
              que leur image puissent être utilisé dans des publications
              promotionnelles ou de publicitaire sur internet et les réseaux
              sociaux. Conformément à la Loi n°78-17 du 6 janvier 1978 relative
              à l’informatique, aux fichiers et aux libertés, vous disposez d’un
              droit d’accès et de rectification ou suppression des informations
              vous concernant.
            </p>
            <h2 className="text-gray-900 font-bold text-xl pt-6 pb-2">
              ARTICLE 11 – Litige et tribunal compétent
            </h2>
            <p>
              Tout litige relatif à l’interprétation et à l’exécution des
              présentes conditions générales de vente est soumis au droit
              français. <br />A défaut de résolution amiable, le litige sera
              porté devant le Tribunal de commerce de Marseille, 2 rue Emile
              POLLAK – 13291 Marseille Cedex 06.
            </p>
            <h2 className="text-gray-900 font-bold text-xl pt-6 pb-2"></h2>
            <p>Fait à Marseille le 31/01/2023 par Nicolé Jonathan</p>
          </div> */}
          {/* {{-- Protection des données --}} */}
          {/* <div className="">
            <h1 className="text-gray-900 font-bold text-3xl pt-12 pb-6">
              Protection des données
            </h1>
            <p>
              <strong>Captain John</strong> s’engage, dans le cadre de ses
              activités et conformément à la législation en vigueur en France, à
              assurer la protection, la confidentialité et la sécurité des
              données à caractère personnel des utilisateurs de ses services
              (données uniquement recupérées lors d'une réservation à un cours :
              nom, prénom, email et numéro de téléphone), ainsi qu’à respecter
              leur vie privée.
              <br />
              Ceci est notamment applicable aux clients et utilisateurs des
              offres et services et aux visiteurs du site
              <a href="https://www.captainjohnaventures.fr/">
                www.captainjohnaventures.fr
              </a>
              <br />
              <br />
              Pour toute demande merci de contacter :
              contact.captainjohn@gmail.com
            </p>
            <h2 className="text-gray-900 font-bold text-xl pt-6 pb-2"></h2>
            </div> */}
          <div className="mt-4">
            <p> Dernière mise à jour le 21/11/2024</p>
          </div>
        </div>
      </div>
    </>
  );
}
