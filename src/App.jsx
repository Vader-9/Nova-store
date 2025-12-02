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
import { useEffect, useState } from "react";

//import { ConstructionIcon } from "lucide-react";


function App() {

  const [products, setProducts] = useState([])
  

  // for add to favourites items
  const [favourites, setFavourites] = useState([]);

  // for search items
  const [searchItem, setSearchItem] = useState(false)

  // for chart
  const [cartItems, setCartItems] = useState([]);



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

  return (
    <BrowserRouter className='w-full min-h-screen overflow-hidden  md:min-h-screen ' >
      <Nav likes={likes} setLikes={setLikes} setSearchItem={setSearchItem} />
      <Routes>
        <Route path="/" element={<Nova products={products} likes={likes} favourites={favourites} setFavourites={setFavourites} searchItem={searchItem} setSearchItem={setSearchItem} cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="Electronics" element={<Electronics products={products} likes={likes} favourites={favourites} setFavourites={setFavourites} />} />
        <Route path="Cloths" element={<Cloths />} />
        <Route path="Furniture" element={<Furniture />} />
        <Route path="Shoes" element={<Shoes />} />
        <Route path="Miscellaneous" element={<Miscellaneous />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
