import React from "react";
import './ItemListContainer.css';
import ItemCount from "../ItemCount/ItemCount";
import detergente from "../imagenes/1.jpg"


export const ItemListContainer = () => {
    const onAdd = (cantidad) => {
        console.log(cantidad)
    }
    return (
        <>
        <h1>Catalogo</h1>
        <img src={detergente} alt="" />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </>

    );
}