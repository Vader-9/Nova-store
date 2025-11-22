import { Search, Heart, ShoppingCart, TextAlignJustify, X, Flag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";


function Nav({ likes, setLikes }) {

    const [nav, setNav] = useState(true);
    

    function toggleNav() {
        setNav(!nav)
    }

    function handleLikes() {
        if(likes === true){
            setLikes(false)
        } else {
            setLikes(true)
        }
    }


    return (
        <>

            <div className='w-full hidden md:flex md:justify-between md:p-4 md:border-b-2 md:border-b-solid md:border-gray-200  shadow-[0_4px_10px_rgba(0,0,94,0)]'>
                <div className="flex justify-center items-center gap-[8px] md:flex md:justify-center md:gap-[10px]">
                    <h1 className="font-bold text-2xl text-green-500 "><Link to='/'>Nova</Link></h1>
                    <Link to="/">Electronics</Link>
                    <Link to="/Cloths">Cloths</Link>
                    <Link to="/Furniture">Furniture</Link>
                    <Link to="/Shoes">Shoes</Link>
                    <Link to="/Miscellaneous">Miscellaneous</Link>

                </div>
                <div className="flex justify-center gap-[10px]">
                    <Search />
                    <Heart onClick={handleLikes} />
                    <ShoppingCart />
                </div>
            </div>

            <div className="md:hidden block p-2 mb-3 w-full border-b-2 border-solid border-green-500 fixed top-0 left-0 w-full  z-50 bg-white " onClick={toggleNav}>{nav ? <X /> : <TextAlignJustify />}</div>

            <div className={ `w-1/2 h-screen border-b-2 border-solid border-green-500 p-4 z-50 bg-white  block transition-all duration-1000 shadow-[0_4px_10px_rgba(34,197,94,0.4)] absolute top-0 left-0   md:hidden   ${nav ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
                <div className="w-full flex flex-col gap-3 p-6 ">
                    <h1 className="font-bold text-2xl text-green-500 "><Link to='/'>Nova</Link></h1>
                    <Link to="/">Electronics</Link>
                    <Link to='Cloths' />Cloths<Link />
                    <Link to='Furniture' />Furniture<Link />
                    <Link to='Shoes' />Shoes<Link />
                    <Link to='Miscellaneous' />Miscellaneous<Link />
                </div>
                <div className="w-full flex justify-center gap-5 p-2 mt-5 ">
                    <Search />
                    <Heart onClick={handleLikes} />
                    <ShoppingCart />
                    <X  onClick={toggleNav}/>
                </div>
            </div>
        </>
    )
}

export default Nav