import React, {useEffect,useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import productos from "../ItemListContainer/ItemListContainer";

export const ItemDetailContainer = () => {
    const [data,setData] = useState({});
    const {productoID} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve =>{
                resolve(productos);
        });
        getData.then(res => setData(res.find(productos => productos.id === parseInt(productoID))))
    })
    

    return (
        <ItemDetail data={data} />
    )
};

export default ItemDetailContainer;