import React from "react";
import Galleria from "./pages/Gallery";
import CardResenas from "./CardResenas";
import reseñas from "../data/ResenasData";
import CarritoFoto from "../assets/img/carrito-aside.png";
import Carrito from "./Carrito/Carrito";
import ProductosApi from "./ProductosApi";
import { useCartContext } from "../context/CartContext";
import productos from "../data/IndexData";

function Main({ children }) {
  const { carrito, vaciarCarrito } = useCartContext();

  return (
    <div className="container">
      {/* Sidebar: Menú secundario */}
      <aside className="sidebar">
        <nav className="secondary-nav">
          <ul>
            <li><a href="#destacados">Productos Destacados</a></li>
            <li><a href="#ofertas">Ofertas</a></li>
            <li><a href="form.html">Contacto</a></li>
          </ul>
        </nav>
      </aside>

      <main>
        {/* Galleria / contenido principal */}
        <section className="grid-container">
          {children}
          {/* si en algún caso querés renderizar la galleria por defecto
              podés mantener <Galleria/> aquí o pasarla como child */}
        </section>

        {/* Reseñas */}
        <section className="reseñas">
          <h2>Reseñas de Clientes</h2>
          <div className="flex-reviews">
            {reseñas.map((data, index) => (
              <CardResenas
                key={index}
                imagen={data.imagen}
                alt={data.alt}
                nombre={data.nombre}
                detalle={data.detalle}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Aside derecho: Complementario */}
      <aside className="complementary">
        <div className="publicidad">
          <img src={CarritoFoto} alt="Publicidad - Carrito de compras con instrumentos musicales" />
        </div>

          
        {/* Información rápida del carrito + botón para vaciar */}
        <div className="mini-cart-summary">
          <h3>Tu carrito</h3>
          <p>Artículos: {carrito.length}</p>
          <button onClick={vaciarCarrito} className="btn btn-sm">Vaciar carrito</button>
        </div>

        {/* Componente con los detalles del carrito (usa CartContext internamente) */}
        <Carrito />

        <h3>Complementa tu compra</h3>
        <p>Descubre tips, reseñas y guías para sacar el máximo provecho a tus instrumentos musicales.</p>

        {/* Productos desde la API */}
        <ProductosApi />
      </aside>
    </div>
  );
}

export default Main;