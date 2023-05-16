import { useState } from "react";
import ItemCount from "./ItemCount";


const ItemDetal = ( {item} ) => {
  
  const [cantidad, setCantidad] = useState(0);
  const aumentar = () => {
      if(cantidad < 5) {
          setCantidad(cantidad+1)
      }
  };

  const disminuir = () => {
      if (cantidad > 0) {
          setCantidad(cantidad-1)
      };
  }

  const agregar = () => {
    console.log({...item, cantidad})
  }

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