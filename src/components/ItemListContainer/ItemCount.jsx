import { useState } from "react"


const ItemCount = ( {stock} ) => {

    const [cantidad, setCantidad] = useState(0);
    const aumentar = () => {
        if(cantidad < stock) {
            setCantidad(cantidad+1)
        }
    };

    const disminuir = () => {
        if (cantidad > 0) {
            setCantidad(cantidad-1)
        };
    }

   
  return (
    <div className="cantidad">
        <h4 className="titulo-cantidad">Cantidad:</h4>
        <button className="sumar" onClick={aumentar}>+</button>
        <p className="numero">{cantidad}</p>
        <button className="restar" onClick={disminuir}>-</button>
        {cantidad > 0 && <button className="agregar-prod">Agregar</button>}
    </div>
  )
}

export default ItemCount;