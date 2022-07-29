import React, {useEffect,useState} from "react";
import detergente from "../imagenes/1.jpg";
import ItemDetail from "../ItemDetail/ItemDetail";


const productos = [
    {
        id:1,
        image:`${detergente}`,
        title:"Detergente"
    }
]

export const ItemDetailContainer = () => {
    const [data,setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(productos);
            },3000)
        });
        getData.then(res => setData(res))
    })
    

    return (
        <ItemDetail data={data} />
    )
};

export default ItemDetailContainer;