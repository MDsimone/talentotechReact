import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductoDetalle from './components/pages/ProductoDetalle/ProductoDetalle';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
//import './App.css'
import './styles/styles.css'
import Carrito from './components/Carrito/Carrito';
import ProductosPorTipo from './components/pages/ProductosPorTipo';
import Galleria from './components/pages/Gallery';
import IndexData from './data/IndexData.js';
import InstrumentosData from './data/InstrumentosData.json';
import Contacto from './components/pages/Contacto.jsx';
import Servicios from './components/pages/servicios.jsx';
import Nosotros from './components/pages/Nosotros.jsx';
import Productos from './components/pages/Productos.jsx'
function App() {
  const[carrito, setCarrito] = useState([]);
  
  

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]); /*a lo que ya está en el carrito, ...carrito, le agrega producto */
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };
  return (
    <>
      <Header />
      <Nav />
      <Routes>
       {/* <Route path="/" element={<Main carrito={carrito} vaciarCarrito={vaciarCarrito}/>} /> /*PAso como props carrito y vaciarCarrito a Main*
        <Route path="/producto/:id" element={<ProductoDetalle agregarAlCarrito={agregarAlCarrito}/>} /> /* Muestra el producto al hacer clic en más detalles 
        <Route path="/productos-guitarras"  element={<ProductosGuitarras />} /> /* Muestra la página de productos de guitarras 
        <Route path="/carrito" element={<Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} />} /> */
       }
        
        <Route path="/" element={
          <Main carrito={carrito} vaciarCarrito={vaciarCarrito}>
          <Galleria/>
        </Main>
        }/>

        <Route path="/nosotros" element={
          <Main carrito={carrito} vaciarCarrito={vaciarCarrito}>
          <Nosotros /> 
          </Main>} />

        <Route path="/productos" element={
          <Main carrito={carrito} vaciarCarrito={vaciarCarrito}>
          <Productos />
          </Main>} />  

        <Route path="/producto/:id" element={<Main carrito={carrito} vaciarCarrito={vaciarCarrito}>
        <ProductoDetalle productos={IndexData} agregarAlCarrito={agregarAlCarrito}/> </Main> } /> /* Muestra el producto al hacer clic en más detalles */

        
        <Route path="/productos/:tipo"  element={
          <Main carrito={carrito} vaciarCarrito={vaciarCarrito}>
          <ProductosPorTipo /> </Main>} /> /* Muestra la página de productos por tipo(guitarras, vientos...) */

        <Route path="/productos/:tipo/:id"  element={
          <Main carrito={carrito} vaciarCarrito={vaciarCarrito}>
          <ProductoDetalle productos={InstrumentosData} agregarAlCarrito={agregarAlCarrito}/> </Main>} /> /* Muestra en ProductoDetalle*/

        <Route path="/servicios" element={
          <Main carrito={carrito} vaciarCarrito={vaciarCarrito}>
          <Servicios /> 
          </Main>} />

        <Route path="/contacto" element={
          <Main carrito={carrito} vaciarCarrito={vaciarCarrito}>
          <Contacto /> 
          </Main>} />
        
        <Route path="/carrito" element={<Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} />} /> /* Muestra el carrito de compras */
      </Routes>


      <Footer />
    </>
  )
}
export default App
