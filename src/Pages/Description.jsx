import { useParams } from "react-router-dom";
import { Plus, Minus } from "lucide-react";

function Description({ descriptionItem, cartItems, setCartItems }) {
  const { id } = useParams();

  // Find the cart item for this product
  const inCart = cartItems.find(cartItem => cartItem.id === descriptionItem.id);

  // Add to cart
  function addToCart(item) {
    const exist = cartItems.find(cartItem => cartItem.id === item.id);

    if (!exist) {
      setCartItems(prev => [
        ...prev,
        {
          id: item.id,
          title: item.title,
          price: item.price,
          images: item.images,
          quantitiy: 1,
        },
      ]);
    } else {
      setCartItems(prev =>
        prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantitiy: cartItem.quantitiy + 1 }
            : cartItem
        )
      );
    }
  }

  // Increment quantity
  const incrementQuantitiy = (id) => {
    setCartItems(prev =>
      prev.map(cartItem =>
        cartItem.id === id
          ? { ...cartItem, quantitiy: cartItem.quantitiy + 1 }
          : cartItem
      )
    );
  };

  // Decrement quantity
  const decrementQuantitiy = (id) => {
    setCartItems(prev =>
      prev.map(cartItem =>
        cartItem.id === id
          ? {
              ...cartItem,
              quantitiy: cartItem.quantitiy > 1 ? cartItem.quantitiy - 1 : 1,
            }
          : cartItem
      )
    );
  };

  // Price calculation
  const priceitems = (item) => {
    return item.price * item.quantitiy;
  };

  return (
    <div className="w-full min-h-screen p-4 mt-8 flex flex-col md:flex-row">
      {/* Images */}
      <div className="w-full md:w-1/2 p-1">
        <img
          src={descriptionItem.images[0]}
          alt=""
          className="w-full h-[310px] md:h-[650px] object-cover rounded-xl mb-4"
        />
        <div className="flex gap-4">
          <img
            src={descriptionItem.images[1]}
            alt=""
            className="w-1/2 h-[150px] md:h-[180px] object-cover rounded-xl"
          />
          <img
            src={descriptionItem.images[2]}
            alt=""
            className="w-1/2 h-[150px] md:h-[180px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Details */}
      <div className="w-full md:w-1/2 p-6 bg-white">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          {descriptionItem.title}
        </h1>

        <p className="text-md md:text-lg font-semibold text-gray-700 leading-relaxed mb-4">
          {descriptionItem.description}
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-6">
          ₦{descriptionItem.price}
        </h2>

        {inCart ? (
          <div className="flex flex-col items-center md:items-end mt-2 md:mt-0">
            <p className="my-2">$ {priceitems(inCart)}</p>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => incrementQuantitiy(descriptionItem.id)}
                className="bg-gray-200 p-2 rounded-full"
              >
                <Plus />
              </button>

              <p>{inCart.quantitiy}</p>

              <button
                onClick={() => decrementQuantitiy(descriptionItem.id)}
                className="bg-gray-200 p-2 rounded-full"
              >
                <Minus />
              </button>
            </div>
          </div>
        ) : (
          <button
            className="bg-green-600 text-white w-full md:w-[40%] py-3 rounded-xl font-bold hover:bg-green-700 hover:scale-105 transition"
            onClick={() => addToCart(descriptionItem)}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Description;
