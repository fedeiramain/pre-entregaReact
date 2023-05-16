import { useEffect, useState } from "react";
import ItemDetal from "./ItemDetal";
import { useParams } from "react-router-dom";
import { traerItem } from "../../datos/traerDatos";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const idItem = useParams().id;

    useEffect(() => {
          traerItem(Number(idItem))
            .then(res => setItem(res))
    })
  return (
    <div>
        {item && <ItemDetal item={item} />}
    </div>
  )
}

export default ItemDetailContainer;