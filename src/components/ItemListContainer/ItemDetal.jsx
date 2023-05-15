

const ItemDetal = ( {item} ) => {
  console.log(item);
  return (
    
    <div className="listado-detalle">
                <div className="item-detalle">
                  <img src={item.img} className="img-detalle" alt={item.nombre} />
                  <div className="detalle">
                    <h3>{item.nombre}</h3>
                    <p>${item.precio}</p>
                    <p>{item.description}</p> 
                  </div>
                </div>
    </div>
  )
}

export default ItemDetal;