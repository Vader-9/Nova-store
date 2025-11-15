import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import { Camera, Heart, Home } from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";
import Electronics from "./Componets/Electronics";
import Cloths from "./Componets/Cloths";
import Furniture from "./Componets/Furniture";
import Shoes from "./Componets/Shoes";
import Miscellaneous from "./Componets/Miscellaneous";


function App() {


  return (
    <BrowserRouter className='w-full min-h-screen overflow-hidden' >
      <Nav />
      <Routes>
        <Route path="/" element={<Electronics/>}/>
        <Route path="Cloths" element={<Cloths/>}/>
        <Route path="Furniture" element={<Furniture/>}/>
        <Route path="Shoes" element={<Shoes/>}/>
        <Route path="Miscellaneous" element={<Miscellaneous/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
