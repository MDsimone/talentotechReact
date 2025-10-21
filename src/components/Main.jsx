import React from "react";
import Galleria from "./pages/Gallery";
import CardResenas from "./CardResenas";
import reseñas from "../data/ResenasData";
import CarritoFoto from "../assets/img/carrito-aside.png";
import Carrito from "../components/Carrito/Carrito";
import ProductosApi from "../components/ProductosApi";
import productos from "../data/IndexData";


function Main({children,carrito, vaciarCarrito}) {
    return(  
        // Contenedor principal que agrupa sidebar, main y contenido complementario -->
  <div className="container">
     {/*Sidebar: Menú secundario */}
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
      
    {/* <!-- Galleria con productos --> */}
     <section className="grid-container">
      {children}   
      {/* <!-- <Galleria/> --> 
    {/*Galleria crea una <section> que carga CardIndex.jsx para crear un <article> por producto de la pagina index*/}
      </section>            
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
      {/* {/* <!--Sección reseñas--> 
      <section class="reseñas">
        <h2>Reseñas de Clientes</h2>
        <div class="flex-reviews">
          {/* <!-- Card de reseña 1 --> 
          <article class="review-card">
            <img src="./imagen/juanPerez.png" alt="Cliente feliz"/>
            <div class="review-content">
              <h3>Juan Pérez</h3>
              <p>"Excelente calidad en los instrumentos y un servicio inmejorable."</p>
            </div>
          </article>
        {/* <!-- Card de reseña 2 --> 
          <article class="review-card">
            <img src="./imagen/mariaGomez.png" alt="Cliente satisfecho"/>
            <div class="review-content">
              <h3>María Gómez</h3>
              <p>"Muy contenta con mi compra, la guitarra suena increíble."</p>
            </div>
          </article>
        {/* <!-- Card de reseña 3 --> 
          <article class="review-card">
            <img src="./imagen/carlosLopez.png" alt="Cliente emocionado"/>
            <div class="review-content">
              <h3>Carlos López</h3>
              <p>"Atención personalizada y productos de primera. ¡Recomendado!"</p>
            </div>
          </article>
        </div>
  

      </section>   */}
    </main>

    {/* <!-- Aside: Contenido complementario --> */}


    <aside className="complementary">
           <div className="publicidad">
              <img src={CarritoFoto} alt="Publicidad - Carrito de compras con instrumentos musicales"/>
            </div>
             <Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} /> 
             <br/>
      <h3>Complementa tu compra</h3>
      <p>Descubre tips, reseñas y guías para sacar el máximo provecho a tus instrumentos musicales.</p>
            <ProductosApi/>  
    </aside>
  </div> );
}
export default Main;