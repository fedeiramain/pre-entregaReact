import { useEffect, useState } from "react";
import { traerItem } from "../traer";
import ItemDetal from "./ItemDetal";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
    console.log(item);

    useEffect(() => {
        setTimeout(() => {
          traerItem(Number(id))
            .then(res => setItem(res))
        }, 300);
    })
  return (
    <div>
        {item && <ItemDetal item={item} />}
    </div>
  )
}

export default ItemDetailContainer;