import React from "react";
//import guitarra from '../assets/guitarra.png';
function Header() {
    return (
        <header>
            <div className="logo">
                <a href="index.html">
                    <img src="../src/assets/img/guitarra.png" alt="Logo de la tienda" />
                    Tu Sonido
                </a>
            </div>
            <h1>Instrumentos Musicales</h1>
            <h2>Encuentra el sonido perfecto para ti</h2>
        </header>
    );
}
export default Header;