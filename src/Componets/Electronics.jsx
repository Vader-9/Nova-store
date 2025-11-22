import { Heart } from "lucide-react"
import Footer from "../Footer"
import { useState } from "react"

function Electronics({ products }) {

    const [showChart, setShowChart] = useState(false);
    const [favourites, setFavourites] = useState([]);
  //  const [isFavourite, setIsFavourite] = useState(false);



    const electro = products.filter((product) => product?.category?.name === 'Electronics')
   // console.log(electro);
      //console.log(favourites);


    function toggleChart(id) {
        setShowChart(id);
        
    }

  


    

    return (
        <div className="w-full h-screen  sm:w-full  mt-8 mb-10  md:h-screen md:mt-2 md:mb-10 md:relative  ">
            <div className="w-full h-[80px] p-4  my-4 flex">
                <h1>{electro[0]?.category?.name}</h1>
                <p>({electro.length})</p>
            </div>
            <div className="flex justify-center text-center w-full  ">
                <div className=" grid gap-2 grid-cols-1 mb-10 w-full p-4 border-b-2 border-gray-700 sm:grid-cols-2 md:grid-cols-4 text-center" >
                    {electro.map((item) => (
                        <div className="text-center p-2 md:p-1 md:m-1 transition-all duration-300 hover:scale-105 hover:p-1 hover:border-2 hover:border-gray-700 rounded-3xl " key={item.id}>

                       
                            <div className="relative w-full h-[300px] sm:h-[250px] md:h-[350px] lg:h-[300px] xl:h-[350px]  ">

                                
                                <img
                                    src={item.images[1]}
                                    alt={item.images[2]}
                                    className=" w-full h-full rounded-3xl object-cover cursor-pointer"
                                    onClick={() => toggleChart(item.id)}
                                />


                                <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-20">
                                    <Heart className={`fill-${favourites}-500 text-green-500`} onClick={()=>addToFavourites(item.id)} />

                                </div>

                              
                                <div className="absolute bottom-3 left-3 right-3 bg-white bg-opacity-90 p-3 rounded-xl shadow-md z-20">
                                    <h1 className="text-sm font-semibold">{item.title}</h1>
                                    <p className="text-sm">${item.price}</p>

                                    
                                    {showChart === item.id ? (
                                        <button className="bg-green-500 text-white w-full mt-2 p-2 rounded-xl">
                                            Add to cart
                                        </button>
                                    ) : null}
                                </div>

                            </div>

                        </div>

                    ))}

                </div>
            </div>
            <div className="m-4">
                <h1>Favourites</h1>

            </div>
            <Footer />
        </div>
    )
}

export default Electronics