const Hero2 = () => {
  return (
    <div className="mx-auto bg-base-200 flex flex-col items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <h2 className="text-center font-bold text-3xl lg:text-5xl tracking-tight">
        Les avantages d'un site web sans les inconvénients
      </h2>
      <p className="text-gray-400 mt-4">
        Design, référencement, cout de maintenance... ne t'en occupes même pas,
        crée ton profil.
      </p>

      <div className="flex justify-center items-center mt-8 space-x-8">
        <div className="text-white">
          <span className="text-3xl">👩‍💻</span>
          <p className="mt-2">Crée un profil</p>
        </div>
        <span className="text-gray-400 text-3xl">➡️</span>
        <div className="text-white">
          <span className="text-3xl">😥</span>
          <p className="mt-2">Obtient ta page personnalisé</p>
        </div>
        <span className="text-gray-400 text-3xl">➡️</span>
        <div className="text-white">
          <span className="text-3xl">😔</span>
          <p className="mt-2">Partage tes infos</p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
