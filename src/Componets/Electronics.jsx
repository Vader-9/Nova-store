import { Heart, X } from "lucide-react";
import Footer from "../Footer";
import { useState } from "react";

function Electronics({ products, likes }) {
  const [showChart, setShowChart] = useState(null);
  const [favourites, setFavourites] = useState([]);

  const electro = products.filter(
    (product) => product?.category?.name === "Electronics"
  );

  const toggleChart = (id) => {
    setShowChart((prev) => (prev === id ? null : id));
  };

  const addToFavourites = (id) => {
    const item = electro.find((product) => product.id === id);
    if (!item) return;

    const alreadyInFavourites = favourites.find((f) => f.id === id);
    if (alreadyInFavourites) {
      alert("Item is already in favourites");
      return;
    }

    setFavourites((prev) => [
      ...prev,
      {
        id: item.id,
        title: item.title,
        price: item.price,
        images: item.images,
      },
    ]);
  };

  const removeFromFavourites = (id) => {
    setFavourites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full h-screen text-center mt-8 mb-10 md:h-screen md:mt-2 md:mb-10 md:relative">
      {likes ? (
        <div>
          {/* Electronics Section */}
          <div className="w-full h-[80px] p-4 my-4 flex justify-center items-center gap-2">
            <h1>{electro[0]?.category?.name}</h1>
            <p>({electro.length})</p>
          </div>

          <div className="flex justify-center w-full">
            <div className="grid gap-2 grid-cols-1 mb-10 w-full p-5 sm:grid-cols-2 md:grid-cols-4">
              {electro.map((item) => (
                <div
                  key={item.id}
                  className="text-center p-2 md:p-1 md:m-1 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-gray-700 rounded-3xl"
                >
                  <div className="relative w-full h-[300px] sm:h-[250px] md:h-[350px] lg:h-[300px] xl:h-[350px]">
                    <img
                      src={item.images?.[0] || ""}
                      alt={item.title || "Image"}
                      className="w-full h-full rounded-3xl object-cover cursor-pointer"
                      onClick={() => toggleChart(item.id)}
                    />

                    <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-20">
                      <Heart
                        className={`cursor-pointer ${
                          favourites.some((f) => f.id === item.id)
                            ? "fill-green-500 text-green-500"
                            : "fill-none text-green-500"
                        }`}
                        onClick={() => addToFavourites(item.id)}
                      />
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 bg-white bg-opacity-90 p-3 rounded-xl shadow-md z-20">
                      <h1 className="text-sm font-semibold">{item.title}</h1>
                      <p className="text-sm">${item.price}</p>

                      {showChart === item.id && (
                        <button className="bg-green-500 text-white w-full mt-2 p-2 rounded-xl">
                          Add to cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Favourites Section */}
          <div className="m-2">
            <h1>Favourites</h1>

            <div className="flex justify-center w-full">
              <div className="grid gap-2 grid-cols-1 mb-10 w-full p-5 sm:grid-cols-2 md:grid-cols-4">
                {favourites.length > 0 ? (
                  favourites.map((favourite) => (
                    <div
                      key={favourite.id}
                      className="text-center p-2 md:p-1 md:m-1 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-gray-700 rounded-3xl"
                    >
                      <div className="relative w-full h-[300px] sm:h-[250px] md:h-[350px] lg:h-[300px] xl:h-[350px]">
                        <img
                          src={favourite.images?.[0] || ""}
                          alt={favourite.title || "Image"}
                          className="w-full h-full rounded-3xl object-cover cursor-pointer"
                          onClick={() => toggleChart(favourite.id)}
                        />

                        <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-20">
                          <X
                            className="cursor-pointer text-red-500"
                            onClick={() => removeFromFavourites(favourite.id)}
                          />
                        </div>

                        <div className="absolute bottom-3 left-3 right-3 bg-white bg-opacity-90 p-3 rounded-xl shadow-md z-20">
                          <h1 className="text-sm font-semibold">
                            {favourite.title}
                          </h1>
                          <p className="text-sm">${favourite.price}</p>

                          {showChart === favourite.id && (
                            <button className="bg-green-500 text-white w-full mt-2 p-2 rounded-xl">
                              Add to cart
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No favourites added yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Electronics;
