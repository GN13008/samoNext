import { products } from "../data";

export default function Products() {
  return (
    <div className="flex flex-row flex-wrap w-full mx-auto content-center items-center">
      {products.map((prod, i) => {
        return (
          <div className="w-1/2 lg:w-1/5 p-4">
            <a
              key={i}
              href="/produit/exemple"
              className="relative flex flex-col justify-center overflow-hidden rounded-xl shadow-md"
            >
              <div className="group relative m-0 flex rounded-xl shadow-2xl sm:mx-auto sm:max-w-lg">
                <div className="z-10 h-full w-full overflow-hidden rounded-xl border opacity-50 transition duration-300 ease-in-out group-hover:opacity-80">
                  <img
                    className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-60 transition duration-300 group-hover:scale-110"
                    src={prod.img}
                    alt={prod.title}
                  />
                </div>
                <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                  <h1 className="text-l lg:text-2xl font-semibold text-white">
                    {prod.title}
                  </h1>
                  <h1 className="hidden lg:block text-sm font-light text-gray-200">
                    {prod.content}
                  </h1>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
