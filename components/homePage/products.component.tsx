export default function Products() {
  const products = [
    {
      title: "Rond",
      img: "/acier_rond.png",
      content: "Un texte sur le produit",
      cta: "Découvrir",
      link: "/",
    },
    {
      title: "Plat",
      img: "/acier_plat.png",
      content: "Un texte sur le produit",
      cta: "Découvrir",
      link: "/",
    },
    {
      title: "Tube",
      img: "/acier_tube.png",
      content: "Un texte sur le produit",
      cta: "Découvrir",
      link: "/",
    },
    {
      title: "Cornière",
      img: "/acier_corniere.png",
      content: "Un texte sur le produit",
      cta: "Découvrir",
      link: "/",
    },
    {
      title: "Tous les aciers",
      img: "/acier_tous.png",
      content: "Un texte sur le produit",
      cta: "Découvrir",
      link: "/",
    },
  ];
  return (
    <div className="flex content-center gap-4">
      {products.map((prod) => {
        return (
          <div className="card w-1/5 bg-base-100 image-full shadow-xl">
            <figure>
              <img src={prod.img} alt={prod.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{prod.title}</h2>
              <p>{prod.content}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">{prod.cta}</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
