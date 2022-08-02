import React, {useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({ data }) => {

    const [goToCart, setGoCart] = useState(false);

    const onAdd = (cantidad) => {
        setGoCart(true)
    }

    return (
        <div className="producto">
            <img src={data.image} alt="" />
            <h3>{data.title}</h3>
            <p>{data.precio}</p>
            {
                goToCart
                    ? <Link to={'/cart'}>Terminar Compra</Link>
                    : <ItemCount initial={1} stock={5} onAdd={onAdd} />
            }
        </div>
    )
};

export default ItemDetail;