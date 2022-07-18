import React from "react";
import './Item.css'

export const Item = ({info}) => {
    return (
        <a href='/' className="producto">
            <img src={info.image} alt='hola' />
            <p>{info.title}</p>
        </a>
    )

}

export default Item