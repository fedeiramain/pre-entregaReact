import { useState } from "react";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const ItemDetal = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);
  const { cart, setCart } = useContext(CartContext);

  const aumentar = () => {
    if (cantidad < 5) {
      setCantidad(cantidad + 1)
    }
  };

  const disminuir = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1)
    };
  }

  const agregar = () => {
    const agregado = { ...item, cantidad };
    const carrito = [...cart];
    const estaCarrito = carrito.find((producto) => producto.id === agregado.id);
    if (estaCarrito) {
      estaCarrito.cantidad += cantidad;
    } else {
      carrito.push(agregado);
    }
    setCart(carrito)
    console.log(cart);
  };


  return (
    
    <div className="listado-detalle">
                <div className="item-detalle">
                  <img src={item.img} className="img-detalle" alt={item.nombre} />
                  <div className="detalle">
                    <h3>{item.nombre}</h3>
                    <p>${item.precio}</p>
                    <p>{item.description}</p> 
                    {<ItemCount cantidad={cantidad} aumentar={aumentar} disminuir={disminuir} agregar={agregar} />}
                  </div>
                </div>
    </div>
  )
}

export default ItemDetal;