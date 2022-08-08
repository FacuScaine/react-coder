import React from "react";
import './NavBar.css';
import Tensop from "../imagenes/Tensop.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";



export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to='/'>
          <img src={Tensop} alt="Logo" width="100%" height="auto" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link select" aria-current="page" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to=''>Clientes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to=''>Contacto</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/empresa'>Empresa</NavLink>
            </li>
            <li className="nav-item dropdown ">
              <NavLink to='/productos' className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="true">Productos</NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="nav-link dropdown-item" to='/productos/domestico'>Domestico</NavLink>
                </li>
                <li>
                  <NavLink className="nav-link dropdown-item" to='/productos/industrial'>Industrial</NavLink>
                </li>

              </ul>
            </li>
            <NavLink to='/cart'><CartWidget></CartWidget></NavLink>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default NavBar