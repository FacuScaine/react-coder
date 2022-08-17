import React from "react";
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import { useCartContext } from "../../contexts/CartContext";
import { Link } from 'react-router-dom'
import ItemCart from "../ItemCart/ItemCart.jsx";

export const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    const order = {
        cliente: {
            nombre: 'Facundo',
            email: 'facusca@gmail.com',
            telefono: '11 36013722',
            direccion: 'fragata hercules 1579'
        },
        items: cart.map(product => ({ id: product.id, titulo: product.title, precio: product.price})),
        total: totalPrice()
    }

    const emitirCompra = () =>{
        const db = getFirestore();
        const orderCollection = collection(db,'orders');
        addDoc(orderCollection, order)
        .then(({id})=>console.log(id))
    }

    if (cart.length === 0) {
        return <>
            <p>No hay elementos en el carrito!</p>
            <Link to="/productos">Hacer compras</Link>
        </>
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}></ItemCart>)
            }
            <p>
                total:${totalPrice()}
            </p>

            <button onClick={emitirCompra}>Emitir Compra</button>
        </>
    )
};

export default Cart