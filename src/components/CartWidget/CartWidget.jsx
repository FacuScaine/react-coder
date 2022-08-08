import React from "react";
import './CartWidget.css';
import { BsFillCartFill } from "react-icons/bs";

export const CartWidget = () => {
    return (
        <>
            <li className="nav-item">
                <BsFillCartFill />
            </li>
        </>

    );
}