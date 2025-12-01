import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";

function Nav() {
  const { carrito } = useCartContext();
  const { user, cerrarSesion } = useAuthContext();
  const navigate = useNavigate();
  const cantidad = carrito ? carrito.length : 0;

  const handleLogout = () => {
    cerrarSesion();
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li className="dropdown">
          <Link to="/productos">Productos</Link>
          <ul className="dropdown-menu">
            <li><Link to="/productos/guitarras">Guitarras</Link></li>
            <li><Link to="/productos/teclados">Teclados</Link></li>
            <li><Link to="/productos/vientos">Vientos</Link></li>
            <li><Link to="/productos/microfonos">Micrófonos</Link></li>
          </ul>
        </li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
         {/*  ruta protegida */}
        <li><Link to="/pagar">Pagar</Link></li>
         {/* Auth links */}
        {!user ? (
          <li><Link to="/iniciar-sesion">Iniciar sesión</Link></li>
         ) : (
          <>
            <li className="nav-user">Hola, {user.name}</li>
            {user.isAdmin && <li><Link to="/dashboard">Dashboard</Link></li>}
            <li><button onClick={handleLogout} className="btn-logout">Cerrar sesión</button></li>
          </>
        )}

        <li> <Link to="/carrito" className="nav-carrito">
          Carrito ({cantidad})
        </Link></li>
      </ul>
    </nav>
  );
}

export default Nav;