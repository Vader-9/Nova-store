import { Plus, Minus, Trash } from "lucide-react";
import { useState } from "react";


function Cart({ cartItems, setCartItems }) {

    console.log(cartItems);

    const incrementQuantitiy = (id) => {
        setCartItems((prev) => prev.map((cartItem) =>
            cartItem.id === id ? { ...cartItem, quantitiy: cartItem.quantitiy + 1 } : cartItem))
    }

    const decrementQuantitiy = (id) => {
        setCartItems((prev) => prev.map((cartItem) =>
            cartItem.id === id ? { ...cartItem, quantitiy: cartItem.quantitiy - 1 } : cartItem))
    }

    const removeFromCart = (id) => {
        setCartItems((prev) =>
            prev.filter((cartItem) => cartItem.id !== id)
        );
    }

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantitiy, 0);

    const priceitems = cartItems.reduce((acc, item) => acc + item.price * item.quantitiy, 0);
    const deliveryFee = 10;
    //const totalAmount = priceitems + deliveryFee;


    return (
        <div className="w-full min-h-screen px-5 pt-5 bg-gray-200 flex flex-col md:flex-row gap-5">
            <div className="w-[100%] flex flex-col   ">
                <h1 className="p-5 mt-7 shadow-lg bg-white boreder-b w-[100%] rounded md:w-[95%]">cart({cartItems.length})</h1>
                {
                    cartItems.map((item) => (
                        <div
                            className="w-full md:w-[95%] p-2 shadow-lg bg-white flex flex-col md:flex-row justify-between rounded-b"
                            key={item.id}
                        >
                            {/* Left Section: Image, Title, Trash */}
                            <div className="flex flex-col md:flex-row items-center  md:items-start gap-2">
                                <img
                                    src={item.images}
                                    alt=""
                                    className="h-[100px] w-[100px] object-cover rounded-sm"
                                />
                                <p className="text-green-500 m-2 text-center md:text-left">{item.title}</p>
                                <button className="m-2">
                                    <Trash
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 cursor-pointer"
                                    />
                                </button>
                            </div>

                            {/* Right Section: Price and Quantity */}
                            <div className="flex flex-col items-center md:items-end mt-2 md:mt-0">
                                <p className="my-2">$ {priceitems + deliveryFee}</p>
                                <div className="flex gap-2 items-center">
                                    <button
                                        onClick={() => incrementQuantitiy(item.id)}
                                        className="bg-gray-200 p-2 rounded-full"
                                    >
                                        <Plus />
                                    </button>

                                    <p>{item.quantitiy < 1 ? 0 : item.quantitiy}</p>

                                    <button
                                        onClick={() => decrementQuantitiy(item.id)}
                                        className="bg-gray-200 p-2 rounded-full"
                                    >
                                        <Minus />
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>

            <div className="w-full md:w-[25%] h-[25%] p-5 mt-3 shadow-lg bg-white rounded flex flex-col gap-3">
                <h1 className="text-lg font-semibold">Summary</h1>
                <p>Items total: {cartItems.length}</p>
                <p>Delivery fee: $10</p>
                <p className="font-bold">Total: ${totalPrice}</p>
                <button className="bg-green-500 text-white w-full p-2 rounded-xl mt-2 hover:bg-green-600 transition">
                    Proceed to checkout
                </button>
            </div>


        </div>
    )
}

export default Cart