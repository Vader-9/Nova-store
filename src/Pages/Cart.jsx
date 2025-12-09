import { Plus, Minus, Trash } from "lucide-react";
import { useState } from "react";


function Cart({ cartItems, setCartItems }) {

    console.log(cartItems);

    const incrementQuantitiy = (id) => {
        setCartItems((prev)=> prev.map((cartItem)=>
        cartItem.id === id ? {...cartItem, quantitiy: cartItem.quantitiy+1} : cartItem))
    }
    
    const decrementQuantitiy = (id) => {
        setCartItems((prev)=> prev.map((cartItem)=>
        cartItem.id === id ? {...cartItem, quantitiy: cartItem.quantitiy-1} : cartItem))
    }

    const removeFromCart = (id) => {
        setCartItems((prev) =>
          prev.filter((cartItem) => cartItem.id !== id)
        );
  }
    
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantitiy, 0);


    return (
        <div className="w-full min-h-screen px-5 pt-5 flex justify-center bg-grey-800   ">
            <div className="w-[100%] flex flex-col  ">
                <h1 className="p-5 shadow-lg bg-white boreder-b w-[95%]">cart({cartItems.length})</h1>
                {
                    cartItems.map((item) => (
                        <div className=" w-[95%] h-[25%] p-4 shadow-lg bg-white flex justify-between" key={item.id}>
                            <div>
                                <div>
                                    <img src={item.images} alt="" className="h-[100px] w-[]" />
                                    <p>{item.title}</p>
                                </div>
                                <button><Trash onClick={()=> removeFromCart(item.id)} /></button>
                            </div>
                           
                            <div>
                                <p>${item.price * item.quantitiy  }</p>
                                <button onClick={()=> incrementQuantitiy(item.id)}><Plus /></button>
                                <p>{item.quantitiy < 1 ? 0 : item.quantitiy}</p>
                                <button onClick={()=> decrementQuantitiy(item.id)}><Minus /></button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="w-[25%] h-[100%] p-5 mt-3 shadow-lg bg-white ">
                <h1>Summary</h1>
                <p>items total :{cartItems.length}</p>
                <p>deleivery fee :$10 </p>
                <p>total :{totalPrice+10}</p>
                <button className="bg-green-500 text-white w-full p-2 rounded-xl mt-2">Proceed to checkout</button>
            </div>

        </div>
    )
}

export default Cart