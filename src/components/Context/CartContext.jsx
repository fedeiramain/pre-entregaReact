import { createContext, useState } from "react";


export const CartContext = createContext();



export const CartShop = ({children}) => {

    const [cart, setCart] = useState([]);
    const [user, setUser] = useState("");

    return (
        <CartContext.Provider value={ {cart, setCart, user, setUser} }>
           {children}
        </CartContext.Provider>
    )
};

