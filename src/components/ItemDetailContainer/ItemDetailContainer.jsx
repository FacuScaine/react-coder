import React, {useEffect,useState} from "react";
import detergente from "../imagenes/1.jpg";
import suavizante from "../imagenes/2.jpg"
import desengrasante from "../imagenes/3.jpg"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const productos = [
    {
        id:1,
        image:`${detergente}`,
        title:"Detergente",
        precio:"$220"
    },
    {
        id:2,
        image:`${suavizante}`,
        title:"Suavizante",
        precio:"$180"
    },
    {
        id:3,
        image:`${desengrasante}`,
        title:"Desengrasante",
        precio:"$280"
    }
]

export const ItemDetailContainer = () => {
    const [data,setData] = useState({});
    const {productoID} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(productos);
            },3000)
        });
        getData.then(res => setData(res.find(productos => productos.id === parseInt(productoID))))
    })
    

    return (
        <ItemDetail data={data} />
    )
};

export default ItemDetailContainer;