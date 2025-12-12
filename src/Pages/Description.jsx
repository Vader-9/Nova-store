import { useParams } from "react-router-dom";


function Description({ descriptionItem, cartItems, setCartItems }) {
  const { id } = useParams();
  // console.log("URL ID:", id);
  console.log("Item:", descriptionItem);
  console.log(descriptionItem.title);


  const exist = cartItems.find((items) => items.id === descriptionItem.id);

  const toggoleCart = (id) => {
    

    if(exist){
      setCartItems(prev => prev.filter((items) => items.id !== id))
    }else{
      setCartItems(prev =>[...prev, descriptionItem])
    }
  }
  
  

  return (

    <div className="w-full min-h-screen p-4 mt-8 flex flex-col md:flex-row">

  <div className="w-full md:w-1/2 p-1">
    <img
      src={descriptionItem.images[0]}
      alt=""
      className="w-full h-[300px] md:h-[650px] object-cover rounded-xl mb-4"
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

  <div className="w-full md:w-1/2 p-6 bg-white">
    <h1 className="text-2xl md:text-3xl font-bold mb-4">{descriptionItem.title}</h1>

    <p className="text-md md:text-lg font-semibold text-gray-700 leading-relaxed mb-4">
      {descriptionItem.description}
    </p>

    <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-6">
      ₦{descriptionItem.price}
    </h2>

    <button
      className="bg-green-600 text-white w-full md:w-[40%] py-3 rounded-xl font-bold hover:bg-green-700 hover:scale-105 transition"
      onClick={() => toggoleCart(descriptionItem.id)}
    >
      {exist ? "Remove from Cart" : "Add to Cart"}
    </button>

  </div>

</div>

   
  );
}

export default Description;
