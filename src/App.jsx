import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';

import Servicios from "./components/pages/Servicios";
import Galleria from "./components/pages/Gallery";
import Nosotros from "./components/pages/Nosotros";
import Productos from "./components/pages/Productos";
import ProductosPorTipo from "./components/pages/ProductosPorTipo";
import ProductoDetalle from "./components/pages/ProductoDetalle/ProductoDetalle";
import Carrito from "./components/Carrito/Carrito";
import IniciarSesion from "./components/pages/IniciarSesion";
import Pagar from "./components/pages/Pagar.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import Contacto from "./components/pages/Contacto";

import RutaProtegida from './components/RutaProtegida';
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext"; // si ya existe
import { ProductsProvider } from "./context/ProductsContext.jsx";

import ProductosAdmin from './components/pages/ProductosAdmin.jsx';
import FormularioProducto from './components/FormularioProducto.jsx';

import IndexData from "./data/IndexData.json";
import InstrumentosData from "./data/InstrumentosData.json";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductsProvider>
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={
              <Main>
                <Galleria />
              </Main>
            } />
            <Route path="/nosotros" element={
              <Main>
                <Nosotros /> 
              </Main>
            } />
            <Route path="/productos" element={
              <Main>
                <Productos />
              </Main>
            } />  

            <Route path="/iniciar-sesion" element={<Main><IniciarSesion /></Main>} />
            <Route path="/pagar" element={<RutaProtegida><Pagar /></RutaProtegida>} />
            <Route path="/dashboard" element={<Main><RutaProtegida soloAdmin={true}><Dashboard /></RutaProtegida></Main>} />
            
            <Route path="/producto/:id" element={<Main>
              <ProductoDetalle productos={IndexData} /> 
            </Main>} />

            <Route path="/productos/:tipo" element={<Main><ProductosPorTipo /> </Main>} />

            <Route path="/productos/:tipo/:id" element={<Main>
              <ProductoDetalle productos={InstrumentosData} /> 
            </Main>} />

            <Route path="/servicios" element={<Main><Servicios /> </Main>} />
            <Route path="/contacto" element={<Main><Contacto /> </Main>} />
            <Route path="/carrito" element={<Carrito />} />
          
            <Route path="/admin/productos" element={<Main><RutaProtegida soloAdmin={true}><ProductosAdmin /></RutaProtegida></Main>} />
            <Route path="/admin/productos/nuevo" element={<Main><RutaProtegida soloAdmin={true}><FormularioProducto /></RutaProtegida></Main>} />
            <Route path="/admin/productos/:id/editar" element={<Main><RutaProtegida soloAdmin={true}><FormularioProducto /></RutaProtegida></Main>} />
            
               
          </Routes>  
          <Footer />
        </ProductsProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
