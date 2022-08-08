import React from "react";
import Item from "../Item/item";
// import './ItemList.css'

const ItemList = ({data = []}) => {
    return (
        data.map(product => <Item key={product.id} info={product}/>)
    )
}

export default ItemList