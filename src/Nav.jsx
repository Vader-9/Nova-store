import { Search, Heart, ShoppingCart, TextAlignJustify, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav({ likes, setLikes, setSearchItem }) {

    const [nav, setNav] = useState(false);
    
    

    function toggleNav() {
        setNav(!nav);
    }

    function handleLikes() {
        setLikes(!likes); // simpler toggle
    }

    return (
        <>
            {/* DESKTOP NAV */}
            <div className="w-full hidden md:flex md:justify-between md:p-4 md:border-b-2 md:border-gray-200 shadow">
                <div className="flex items-center gap-3">
                    <h1 className="font-bold text-2xl text-green-500">
                        <Link to="/" >Nova</Link>

                    </h1>

                    <Link to="/Electronics"  >Electronics</Link>
                    <Link to="/Cloths">Cloths</Link>
                    <Link to="/Furniture">Furniture</Link>
                    <Link to="/Shoes">Shoes</Link>
                    <Link to="/Miscellaneous">Miscellaneous</Link>
                </div>

                <div className="flex gap-4 items-center">
                    <Search onClick={()=>setSearchItem(true)} />
                    <Heart
                        onClick={handleLikes}
                        className={`cursor-pointer ${likes ? "text-green-500 fill-green-500" : "text-black"}`}
                    />


                    <ShoppingCart />
                </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div
                className="md:hidden block p-2 mb-3 border-b-2 border-green-500 fixed top-0 left-0 w-full bg-white z-50"
            >
                <div onClick={toggleNav}>
                    {nav ? <X /> : <TextAlignJustify />}
                </div>
            </div>

            {/* MOBILE NAV */}
            <div
                className={`w-1/2 h-screen border-b-2 border-green-500 p-4 bg-white z-50 shadow absolute top-0 left-0 transition-all duration-700 md:hidden
                ${nav ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
            >
                <div className="w-full flex flex-col gap-5 p-6">
                    <h1 className="font-bold text-2xl text-green-500">
                        <Link to="/">Nova</Link>
                    </h1>

                    <Link to="/Electronics"  >Electronics</Link>
                    <Link to="/Cloths">Cloths</Link>
                    <Link to="/Furniture">Furniture</Link>
                    <Link to="/Shoes">Shoes</Link>
                    <Link to="/Miscellaneous">Miscellaneous</Link>
                </div>

                <div className="w-full flex justify-center gap-6 mt-5">
                    <Search  onClick={()=>setSearchItem(true)}/>
                    <Heart
                        onClick={handleLikes}
                        className={`cursor-pointer ${likes ? "text-green-500 fill-green-500" : "text-black"}`}
                    />


                    <ShoppingCart />
                    <X onClick={toggleNav} className="cursor-pointer" />
                </div>
            </div>
        </>
    );
}

export default Nav;
