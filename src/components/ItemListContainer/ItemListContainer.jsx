import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { traerProductos } from "../../datos/traerDatos";


const ItemListContainer = () => {
    const [productos, setProductos] = useState();
    const categoria = useParams().categoria;
    

    useEffect(() => {
      traerProductos()
        .then((data) => {
          if (categoria) {
            setProductos(data.filter(prod => prod.categoria === categoria))
          } else {
            setProductos(data)
          }
        }
         )  
    }, [categoria]);

      
    
    return (
        <div className="listado">
         {productos && productos.map((item) => {
        return (
          <div key={item.id} className="item">
            <img src={item.img} className="img-prod" alt="prod" />
            <h3>{item.nombre}</h3>
            <p>${item.precio}</p>
            <div>
            <button className="boton-info">Añadir</button>
            <button className="boton-info"><Link to={`/item/${item.id}`}>Info</Link></button>
            </div>
          </div>
        )
      })}
        </div>
    )
}

export default ItemListContainer;

