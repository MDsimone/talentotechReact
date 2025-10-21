import React from "react";
import { Link } from "react-router-dom";
import imgCarro from '../assets/img/carrito.png';
function Nav() {
    return (
    <nav className="main-nav">
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/nosotros">Nosotros</Link></li>
      <li className="dropdown">
        <Link to="/productos">Productos</Link>
          <ul className="dropdown-menu">
              <li><Link to="/productos/guitarras">Guitarras</Link></li>
              <li><Link to="productos/teclados">Teclados</Link></li>
              <li><Link to="productos/vientos">Vientos</Link></li>
              <li><Link to="productos/microfonos">Micrófonos</Link></li>
          </ul>
      </li>
      <li><Link to="/servicios">Servicios</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
      <li> <Link to="/carrito"> 
        <img src={imgCarro} alt="carrito" id="carrito"/>
        </Link></li>
    </ul>
   
  </nav>
  );
}
export default Nav;