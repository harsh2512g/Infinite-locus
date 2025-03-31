import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null);

export const CartProvider = ({ children }: any) => {

    const [cart, setCart] = useState<any>([]);

    const addToCart = (product: any) => {
        setCart((prevCart: any) => {
            const existingProduct = prevCart.find((item: any) => item.id === product.id)
            if (existingProduct) {
                return prevCart.map((item: any) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: any) => {
        setCart((prevCart: any) => prevCart.filter((item: any) => item.id !== id));
    };

    const increaseQuantity = (id: any) => {
        setCart((prevCart: any) =>
            prevCart.map((item: any) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 } : item
            ))
    }
    const decreaseQuantity = (id: any) => {
        setCart((prevCart: any) =>
            prevCart.map((item: any) =>
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 } : item
            ).filter((item) => item.quantity > 0)
        )
    }



    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}
        >
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context;
}