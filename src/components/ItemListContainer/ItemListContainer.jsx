import React from "react";
import './ItemListContainer.css';
import ItemCount from "../ItemCount/ItemCount";

export const ItemListContainer = () => {
    const onAdd = (cantidad) => {
        console.log(cantidad)
    }
    return (
        <>
        <h1>Catalogo</h1>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </>

    );
}