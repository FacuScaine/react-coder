import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import detergente from "../imagenes/1.jpg"
import suavizante from "../imagenes/2.jpg"
import desengrasante from "../imagenes/3.jpg"
import quitaGrasa from "../imagenes/4.jpg"
import antibacterial from "../imagenes/5.jpg"
import limpiaBaños from "../imagenes/6.jpg"

const productos = [
    {
        id:1,
        image:`${detergente}`,
        title:"Detergente",
        categoria:"domestico"
    },
    {
        id:2,
        image:`${suavizante}`,
        title:"Suavizante",
        categoria:"domestico"
    },
    {
        id:3,
        image:`${desengrasante}`,
        title:"Desengrasante",
        categoria:"industrial"
    },
    {
        id:4,
        image:`${quitaGrasa}`,
        title:"Desengrasante",
        categoria:"domestico"
    },
    {
        id:5,
        image:`${antibacterial}`,
        title:"Desengrasante",
        categoria:"industrial"
    },
    {
        id:6,
        image:`${limpiaBaños}`,
        title:"Desengrasante",
        categoria:"industrial"
    }
]

export const ItemListContainer = () => {
    const [data,setData] = useState([]);

    const {categoriaID} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve =>{
                resolve(productos)
        });
        if(categoriaID){
            getData.then(res => setData(res.filter(product => product.categoria === categoriaID)));
        }else{
            console.log("hola")
            getData.then(res => setData(res))
        }
    },[categoriaID])

    return (
        <>
        <div className="body">
            <h1>Catalogo</h1>
            <div className="catalogo">
            <ItemList data={data} />
            </div> 
        </div>
        </>

    );
}

export default productos