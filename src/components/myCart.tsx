// @ts-nocheck
import React from "react";
import { useCart } from "../context/CartContext";
const MyCart = () => {

    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    return (
        <div>
            <p className="text-lg font-semibold mb-8">Shopping Cart</p>

            {cart.length <= 0 && <div>No item in cart</div>}
            <div className="grid grid-cols-4 gap-4">
                {cart.map((item) => {
                    return (
                        <div>
                            <div className="w-[100px] h-[100px]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="max-w-[100px] max-h-[100px]"
                                />
                            </div>
                            <p className="text-sm font-semibold mt-4 h-[48px]">{item.title}</p>
                            <p className="text-sm font-semibold mt-4 h-[48px]">${item.price}</p>
                            <div className='text-green-700 border border-green-700 w-fit py-2 px-4 bg-green-100 cursor-pointer rounded-lg'>
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default MyCart;