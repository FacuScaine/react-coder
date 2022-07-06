import React from "react";
import './navBar.css';
import Tensop from "../imagenes/Tensop.png";
import "bootstrap/dist/css/bootstrap.min.css"


export const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="./index.html">
            <img src={Tensop} alt="Logo" height="auto"/> 
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link select" aria-current="page" href="./index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pages/clientes.html">Clientes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pages/contacto.html">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pages/empresa.html">Empresa</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pages/productos.html">Productos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    ); 
}

export default NavBar