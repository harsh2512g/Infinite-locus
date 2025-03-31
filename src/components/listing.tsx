// @ts-nocheck
import React from 'react';
import { useCart } from '../context/CartContext';

const Listing = ({ data }: any) => {

    const { cart, addToCart, decreaseQuantity, increaseQuantity } = useCart();

    return (
        <div className="grid grid-cols-4 gap-4">
            {data?.map((d: any) => {
                const cartItem = cart.find((item) => item.id === d.id)
                return (
                    <div className="col-span-1 border border-gray-200 p-4 rounded-lg">
                        <div className="w-[100px] h-[100px]">
                            <img
                                src={d.image}
                                alt={d.title}
                                className="max-w-[100px] max-h-[100px]"
                            />
                        </div>
                        <p className="text-sm font-semibold mt-4 h-[48px]">{d.title}</p>
                        <p className="text-sm font-semibold mt-4 h-[48px]">${d.price}</p>

                        {cartItem ? (
                            <div className='text-green-700 border border-green-700 w-fit px-4 bg-green-100 cursor-pointer rounded-lg'>
                                <button onClick={() => decreaseQuantity(d.id)}>-</button>
                                <span>{cartItem.quantity}</span>
                                <button onClick={() => increaseQuantity(d.id)}>+</button>
                            </div>
                        ) : <div className='text-green-700 border border-green-700 w-fit py-2 px-4 bg-green-100 cursor-pointer rounded-lg' onClick={() => addToCart(d)}>Add</div>
                        }
                    </div>
                );
            })}
        </div>
    )
}

export default Listing;