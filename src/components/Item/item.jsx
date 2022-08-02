import React from "react";
import './Item.css';
import { Link } from "react-router-dom";

export const Item = ({info}) => {
    return (
        <Link to={`/detalle/${info.id}`} className="producto">
            <img src={info.image} alt='hola' />
            <p>{info.title}</p>
        </Link>
    )

}

export default Item