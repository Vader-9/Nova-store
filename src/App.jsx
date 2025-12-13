import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
//import { Camera, Heart, Home } from "lucide-react";
import Nova from "./Componets/Nova";
import Nav from "./Nav";
import Electronics from "./Componets/Electronics";
import Cloths from "./Componets/Cloths";
import Furniture from "./Componets/Furniture";
import Shoes from "./Componets/Shoes";
import Miscellaneous from "./Componets/Miscellaneous";
import Description from "./Pages/description";
import Cart from "./Pages/Cart";
//import Footer from "./Footer";
import { useEffect, useState } from "react";
//import { getItem } from "./utiles/Localstorage";

//import { ConstructionIcon } from "lucide-react";


function App() {

  const [products, setProducts] = useState([])

 
  
  // for description
const [descriptionItem, setDescriptionItem] = useState([]);

  // for add to favourites items
 const [favourites, setFavourites] = useState(() => {
  const storedFavourites = localStorage.getItem("favourites");
  return storedFavourites ? JSON.parse(storedFavourites) : [];
});


  // for search items
  const [searchItem, setSearchItem] = useState(false)

  // for cart
 const [cartItems, setCartItems] = useState(() => {
  try {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch {
    return [];
  }
});

useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}, [cartItems]);



  // for error
 // const [error, setError] = useState(false)


 useEffect(() => {
  localStorage.setItem("favourites", JSON.stringify(favourites));
}, [favourites]);


  // nav
  const [likes, setLikes] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await axios.get('https://api.escuelajs.co/api/v1/products')
        //console.log(responce.data)
        setProducts(responce.data)

      } catch (error) {

        console.error(error)
        
      }
    }
    fetchData()
  }, [])
  // console.log(products)
  //console.log(products[1]?.category?.name)

  //w-full min-h-screen overflow-hidden md:min-h-screen




  return (
    <BrowserRouter className='w-full min-h-screen flex flex-col ' >
      <Nav  likes={likes} setLikes={setLikes} setSearchItem={setSearchItem} cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Nova products={products} likes={likes} favourites={favourites} setFavourites={setFavourites} searchItem={searchItem} setSearchItem={setSearchItem} cartItems={cartItems} setCartItems={setCartItems} descriptionItem={descriptionItem} setDescriptionItem={setDescriptionItem} />} />
        <Route path="Electronics" element={<Electronics products={products} likes={likes} favourites={favourites} setFavourites={setFavourites} searchItem={searchItem} setSearchItem={setSearchItem} cartItems={cartItems} setCartItems={setCartItems} descriptionItem={descriptionItem} setDescriptionItem={setDescriptionItem} />} />
        <Route path="Cloths" element={<Cloths  products={products} likes={likes} favourites={favourites} setFavourites={setFavourites} searchItem={searchItem} setSearchItem={setSearchItem} cartItems={cartItems} setCartItems={setCartItems} descriptionItem={descriptionItem} setDescriptionItem={setDescriptionItem}  />} />
        <Route path="Furniture" element={<Furniture products={products} likes={likes} favourites={favourites} setFavourites={setFavourites} searchItem={searchItem} setSearchItem={setSearchItem} cartItems={cartItems} setCartItems={setCartItems} descriptionItem={descriptionItem} setDescriptionItem={setDescriptionItem}  />} />
        <Route path="Shoes" element={<Shoes products={products} likes={likes} favourites={favourites} setFavourites={setFavourites} searchItem={searchItem} setSearchItem={setSearchItem} cartItems={cartItems} setCartItems={setCartItems} descriptionItem={descriptionItem} setDescriptionItem={setDescriptionItem}  />} />
        <Route path="Miscellaneous" element={<Miscellaneous products={products} likes={likes} favourites={favourites} setFavourites={setFavourites} searchItem={searchItem} setSearchItem={setSearchItem} cartItems={cartItems} setCartItems={setCartItems} descriptionItem={descriptionItem} setDescriptionItem={setDescriptionItem}  />} />
        <Route path="/description/:id" element={<Description descriptionItem={descriptionItem} cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="Cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
       
    </BrowserRouter>
  )
}

export default App
