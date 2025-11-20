import { Heart } from "lucide-react"
import Footer from "../Footer"
import { useState } from "react"

function Electronics({ products }) {

    const [showChart, setShowChart] = useState(false);
    // const [green, setGreen] = useState('none');


    const electro = products.filter((product) => product?.category?.name === 'Electronics')
    console.log(electro);

    function toggleChart(id) {
        setShowChart(id);
        setGreen('green-500');
    }

    return (
        <div className="w-full h-screen   mt-8 mb-10  md:h-screen md:mt-2 md:mb-10 md:relative  ">
            <div className="w-full h-[80px] p-4  my-4 flex">
                <h1>{electro[0]?.category?.name}</h1>
                <p>({electro.length})</p>
            </div>
            <div className="flex justify-center text-center w-full  ">
                <div className=" grid gap-4 grid-col-2  md:grid-cols-4 text-center" >
                    {electro.map((item) => (
                        <div className="text-center p-2" key={item.id}>

                       
                            <div className="relative md:w-[350px] md:h-[350px] w-[350px] h-[350px]">

                                
                                <img
                                    src={item.images[1]}
                                    alt={item.images[2]}
                                    className="w-full h-full rounded-3xl object-cover cursor-pointer"
                                    onClick={() => toggleChart(item.id)}
                                />


                                <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-20">
                                    <Heart className="fill-green-500 text-green-500" />

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
            <div>
                <h1>Favourites</h1>
                
            </div>
            <Footer />
        </div>
    )
}

export default Electronics