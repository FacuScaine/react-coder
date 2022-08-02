import React, {useEffect,useState} from "react";
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import detergente from "../imagenes/1.jpg"
import suavizante from "../imagenes/2.jpg"
import desengrasante from "../imagenes/3.jpg"

const productos = [
    {
        id:1,
        image:`${detergente}`,
        title:"Detergente"
    },
    {
        id:2,
        image:`${suavizante}`,
        title:"Suavizante"
    },
    {
        id:3,
        image:`${desengrasante}`,
        title:"Desengrasante"
    }
]

export const ItemListContainer = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(productos)
            },3000)
        });
        getData.then(res => setData(res))
    },[])


    return (
        <>
        <h1>Catalogo</h1>
        <ItemList data={data} />
        </>

    );
}