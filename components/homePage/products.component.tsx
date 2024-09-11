export default function Products() {
  const products = [
    {
      title: "Rond",
      img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      content: "Un texte sur le produit",
      cta: "Découvrir",
      link: "/",
    },
    {
      title: "Plat",
      img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      content: "Un texte sur le produit",
      cta: "Découvrir",
      link: "/",
    },
    {
      title: "Tube",
      img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      content: "Un texte sur le produit",
      cta: "Découvrir",
      link: "/",
    },
    {
      title: "Cornière",
      img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      content: "Un texte sur le produit",
      cta: "Découvrir",
      link: "/",
    },
    {
      title: "Tous les aciers",
      img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      content: "Un texte sur le produit",
      cta: "Découvrir",
      link: "/",
    },
  ];
  return (
    <div className="flex gap-4">
      {products.map((prod) => {
        return (
          <div className="card bg-base-100 image-full w- shadow-xl">
            <figure>
              <img src={prod.img} alt={prod.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{prod.title}</h2>
              <p>{prod.content}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">{prod.cta}</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
