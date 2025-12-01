import React from "react";
import { Link } from "react-router-dom";
import formatearPrecio from "./formatearPrecio";
function CardResenas({ imagen, alt, titulo, precio, descripcion, link, linkState }) {
 
  const base = import.meta.env.BASE_URL || '/';
  const src_imagen =
    typeof imagen === 'string' && /^(https?:)?\/\//.test(imagen)
      ? imagen
      : `${base}${String(imagen).replace(/^\//, '')}`;
  return (
    <article className="card">
      <img src={src_imagen} alt={alt}  />
      <div className="card-content">
        <h3>{titulo}</h3>
        <p className="price">{precio}</p>
        <p className="description">{descripcion}</p>
       {/*<Link to={link} className="btn">Más información</Link> */}
        <Link to={link} state={linkState} className="btn">Más información</Link>
      </div>
    </article>
    );
}
export default CardResenas;
