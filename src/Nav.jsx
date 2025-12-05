import { Search, Heart, ShoppingCart, TextAlignJustify, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Nav({ nav, setNav, likes, setLikes, setSearchItem, cartItems }) {





  function toggleNav() {
    setNav(!nav);
  }

  function handleLikes() {
    setLikes(!likes);
  }

  function mobileNav() {
    setNav(!nav);
    setSearchItem(true)
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
          <Search onClick={() => setSearchItem(true)} />
          <Heart
            onClick={handleLikes}
            className={`cursor-pointer ${likes ? "text-green-500 fill-green-500" : "text-black"}`}
          />
          <Link to='Cart'>
            <div className="relative" >
              <ShoppingCart />

              <p className={`absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full ${cartItems.length === 0 ? "hidden" : "block"
                }`}>
                {cartItems.length}
              </p>
            </div>
          </Link>

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
      {nav && (
        <div className="fixed inset-0 z-40">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleNav}
          />

          {/* Sidebar */}
          <div
            className={`w-3/4 max-w-xs h-screen border-b-2 border-green-500 p-4 bg-white z-50 shadow absolute top-0 left-0 transition-all duration-700
                  ${nav ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
          >
            <div className="w-full flex flex-col gap-5 p-6">
              <h1 className="font-bold text-2xl text-green-500">
                <Link to="/">Nova</Link>
              </h1>

              <Link to="/Electronics">Electronics</Link>
              <Link to="/Cloths">Cloths</Link>
              <Link to="/Furniture">Furniture</Link>
              <Link to="/Shoes">Shoes</Link>
              <Link to="/Miscellaneous">Miscellaneous</Link>
            </div>

            <div className="w-full flex justify-center gap-6 mt-5">
              <Search onClick={mobileNav} />
              <Heart
                onClick={handleLikes}
                className={`cursor-pointer ${likes ? "text-green-500 fill-green-500" : "text-black"}`}
              />
              <ShoppingCart onClick={goToCart} />
              <X onClick={toggleNav} className="cursor-pointer" />
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default Nav;
