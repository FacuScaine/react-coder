import React, {useEffect,useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getFirestore , doc , getDoc} from 'firebase/firestore';
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [data,setData] = useState({});
    const {productoID} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb,'productos',productoID);
        getDoc(queryDoc)
        .then(res => setData({id:res.id, ...res.data()}))

    },[productoID])
    
    return (
        <ItemDetail data={data} />
    )
};

export default ItemDetailContainer;