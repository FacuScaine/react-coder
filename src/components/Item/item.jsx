import React from "react";
import './Item.css';
import { Link } from "react-router-dom";

export const Item = ({info}) => {
    return (
        <Link to={`/detalle/${info.id}`} className="producto">
            <img src={info.image} alt='hola' />
            <h5>{info.title}</h5>
        </Link>
    )

}

export default Item