import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import Carrito from "../Carrito/Carrito";


const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const carritoCantidad = cart.reduce((acc, prod) => acc + prod.cantidad, 0);
   
    return (
        <div>
            <Link to="/carrito" element={<Carrito />}><i class="fa-solid fa-cart-shopping"></i><span className="cantidad-carrito"> {carritoCantidad}</span></Link>
        </div>
    )
};

export default CartWidget;