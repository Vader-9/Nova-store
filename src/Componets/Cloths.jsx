import { Heart, X, Settings, WifiOff } from "lucide-react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function Cloths({ products, likes, favourites, setFavourites, searchItem, setSearchItem, cartItems, setCartItems, setDescriptionItem }) {
  const [showCart, setShowCart] = useState(null);
  const [error, setError] = useState(false);

  // to go to chart
  const navigate = useNavigate();


   // for electronics category

  const clothsItems = (products || []).filter(
    (item) => item?.category && item?.category?.name === "Electronics"
  );

  // add to cart
  function addToCart(item) {

    const inCart = cartItems.find((cartItem) => cartItem.id === item.id)

    if (!inCart) {
      setCartItems((prev) => [...prev, {
        id: item.id,
        title: item.title,
        price: item.price,
        images: item.images,
        quantitiy: 1
      }])
    } else {
      setCartItems((prev) => prev.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantitiy: cartItem.quantitiy + 1 } : cartItem
      ))
    }
  }




  // search
  const [search, setSearch] = useState('')

  // Re-check internet connection
  useEffect(() => {
    if (!navigator.onLine) {
      setError(true);
    }
  }, []);
   console.log(products);
  // error state
  if (error || !clothsItems) {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <WifiOff className="text-red-500" size={100} />
        <h1 className="text-2xl font-semibold text-red-600">
          No Internet Connection
        </h1>
        <p className="text-gray-600">Please check your network and try again.</p>
      </div>
    );
  }

  // Loading State
  if (clothsItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <Settings className="animate-spin text-4xl text-green-500" size={100} />
        <p className="text-lg font-semibold">Loading products...</p>
      </div>
    );
  }



  // this is were the search will be place

  const fitteredSearchItems = clothsItems.filter((item) => item.title.toLowerCase().includes(search.toLocaleLowerCase()))



  const electro = searchItem ? fitteredSearchItems : clothsItems;

  // add to description
  const goToDescription = (id) => {
    const item = electro.find((p) => p.id === id)
    setDescriptionItem(item)
    navigate(`/description/${id}`)
  }

  // for the chart toggle
  const toggleCart = (id) => {
    setShowCart((prev) => (prev === id ? null : id));
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
      {searchItem && (
        <div className="w-full h-20 bg-gray-500 p-4 flex justify-center gap-3 text-center rounded sticky top-[60px] z-50 md:static">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍"
            className="w-full max-w-xs p-3 border outline-none rounded-3xl text-white"
          />

          <X
            onClick={() => setSearchItem(false)}
            className="cursor-pointer mt-3"
          />
        </div>
      )}

      {!likes ? (

        <div>

          <div className="w-full h-[80px] p-4 my-4 flex justify-center items-center gap-2">
            <h1>Nova products</h1>
            <p>({electro.length})</p>
          </div>

          <div className="flex justify-center w-full">
            <div className="grid gap-2 grid-cols-1 mb-10 w-full p-5 sm:grid-cols-2 md:gap-2 md:grid-cols-4">
              {electro.map((item) => (
                <div
                  key={item.id}
                  className=" md:p-1 md:m-1 text-center p-2  transition-all duration-300 hover:scale-105  rounded-3xl"
                >
                  <div className="relative w-full h-[300px] sm:h-[250px] md:h-[350px] lg:h-[300px] xl:h-[350px]">

                    {/* NEW ARRIVAL BADGE */}
                    {item?.slug?.toLowerCase().includes("new") && (
                      <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-20">
                        NEW ARRIVAL
                      </div>
                    )}

                    <img
                      src={item.images?.[0] || ""}
                      alt={item.title || "Image"}
                      className="w-full h-full rounded-3xl object-cover cursor-pointer"
                      onMouseEnter={() => toggleCart(item.id)}
                      onClick={() => goToDescription(item.id)}
                    />

                    <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-20">
                      <Heart
                        className={`cursor-pointer ${favourites.some((f) => f.id === item.id)
                          ? "fill-green-500 text-green-500"
                          : "fill-none text-green-500"
                          }`}
                        onClick={() => addToFavourites(item.id)}
                      />
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 bg-white bg-opacity-90 p-3 rounded-xl shadow-md z-20">
                      <h1 className="text-sm font-semibold">{item.title}</h1>
                      <p className="text-sm">${item.price}</p>

                      {showCart === item.id && (
                        <button className="bg-green-500 text-white w-full mt-2 p-2 rounded-xl" onClick={() => addToCart(item)}>
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
          <div className="m-2">
            <h1>Favourites</h1>

            <div className="flex justify-center w-full">
              <div className="grid gap-2 grid-cols-1 mb-10 w-full p-5 sm:grid-cols-2 md:grid-cols-4">
                {favourites.length > 0 ? (
                  favourites.map((favourite) => (
                    <div
                      key={favourite.id}
                      className="text-center p-2 md:p-1 md:m-1 transition-all duration-300 hover:scale-105  rounded-3xl"
                    >
                      <div className="relative w-full h-[300px] sm:h-[250px] md:h-[350px] lg:h-[300px] xl:h-[350px]">
                        <img
                          src={favourite.images?.[0] || ""}
                          alt={favourite.title || "Image"}
                          className="w-full h-full rounded-3xl object-cover cursor-pointer"
                          onClick={() => toggleCart(favourite.id)}
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

                          {showCart === favourite.id && (
                            <button className="bg-green-500 text-white w-full mt-2 p-2 rounded-xl" onClick={() => addToCart(favourite)}>
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

      {!likes ? <Footer /> : null}
    </div>
  );
}

export default Cloths;
