import config from "@/config";
import Link from "next/link";

const CTA = () => {
  const profiles = [
    { name: "Damon Chen", startups: 7, image: "/avatar1.png" },
    { name: "Marc Lou", startups: 23, image: "/avatar2.png" },
    { name: "Arvid Kahl", startups: 5, image: "/avatar3.png" },
    { name: "Daniel Nguyen", startups: 7, image: "/avatar4.png" },
    { name: "Martin D...", startups: 8, image: "/avatar5.png" },
    { name: "Lilian ツ", startups: 1, image: "/avatar6.png" },
    // Ajoute plus de profils ici
  ];
  return (
    <section className="relative hero overflow-hidden">
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 md:mb-8">
            Des sportifs référencés
          </h2>
          <p className="text-lg opacity-80 mb-4 md:mb-8">
            Crée un profil pour être référencé à ton tour
          </p>

          <button className="btn btn-primary btn-wide mb-8">
            <Link href="/sign-up">Get {config.appName}</Link>
          </button>

          <div className="grid grid-cols-3 gap-4">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white p-4 rounded-lg flex items-center space-x-4"
              >
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <h3 className="font-bold">{profile.name}</h3>
                  <p className="text-gray-400">{profile.startups} startups</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
