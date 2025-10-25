import React from "react";
import { Link } from "react-router-dom";
import formatearPrecio from "./formatearPrecio";
function CardResenas({ imagen, alt, titulo, precio, descripcion, link }) {
  return (
    <article className="card">
      <img src={imagen} alt={alt} onError={(e)=> {e.target.src = '/vite.svg';}} style={{width:"100px", height:"auto"}} />
      <div className="card-content">
        <h3>{titulo}</h3>
        <p className="price">"{precio}"</p>
        <p className="description">{descripcion}</p>
        <Link to={link} className="btn">Más información</Link>
      </div>
    </article>
    );
}
export default CardResenas;
