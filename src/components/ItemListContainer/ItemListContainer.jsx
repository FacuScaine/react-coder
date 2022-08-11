import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList.jsx'
import './ItemListContainer.css';
import {getFirestore , collection , getDocs, query, where} from 'firebase/firestore';


export const ItemListContainer = () => {
    const [data,setData] = useState([]);

    const {categoriaID} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb,'productos');

        if(categoriaID){
            const queryFilter = query(queryCollection, where('categoria','==', categoriaID));
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(producto => ({id:producto.id, ...producto.data()}))));
        }else{
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(producto => ({id:producto.id, ...producto.data()}))));
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
