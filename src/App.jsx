import { BrowserRouter, Routes, Route} from "react-router-dom";
import axios from "axios";
//import { Camera, Heart, Home } from "lucide-react";
import Nav from "./Nav";
import Electronics from "./Componets/Electronics";
import Cloths from "./Componets/Cloths";
import Furniture from "./Componets/Furniture";
import Shoes from "./Componets/Shoes";
import Miscellaneous from "./Componets/Miscellaneous";
import { useEffect, useState } from "react";


function App() {

  const [products, setProducts] = useState([])
  const [isloading, SetIsloading] = useState('Loading')

  useEffect(()=>{
    const fetchData = async() =>{
      try {
        const responce = await axios.get('https://api.escuelajs.co/api/v1/products')
        //console.log(responce.data)
        setProducts(responce.data)
      
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  },[])

 //console.log(products[1]?.category?.name)

  return (
    <BrowserRouter className='w-full min-h-screen overflow-hidden ' >
      <Nav />
      <Routes>
        <Route path="/" element={<Electronics products={products}/>}/>
        <Route path="Cloths" element={<Cloths/>}/>
        <Route path="Furniture" element={<Furniture/>}/>
        <Route path="Shoes" element={<Shoes/>}/>
        <Route path="Miscellaneous" element={<Miscellaneous/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
