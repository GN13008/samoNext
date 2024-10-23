import { products } from "../data";

export default function Products() {
  return (
    <div className="flex flex-col content-center gap-4 lg:flex-row items-center">
      {products.map((prod, i) => {
        return (
          <a
            href="/produit/exemple"
            className="da relative flex flex-col justify-center overflow-hidden w-4/5 lg:w-1/5 rounded-xl"
          >
            <div className="absolute inset-0 bg-center"></div>
            <div className="group relative m-0 flex rounded-xl shadow-xl sm:mx-auto sm:max-w-lg">
              <div className="z-10 h-full w-full overflow-hidden rounded-xl border opacity-50 transition duration-300 ease-in-out group-hover:opacity-80">
                <img
                  className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-60 transition duration-300 group-hover:scale-110"
                  src={prod.img}
                  alt={prod.title}
                />
              </div>
              <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <h1 className="font-serif text-2xl font-bold text-white">
                  {prod.title}
                </h1>
                <h1 className="text-sm font-light text-gray-200">
                  {prod.content}
                </h1>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
