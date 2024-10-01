import { products } from "../data";

export default function Products() {
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
