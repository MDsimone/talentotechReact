import React from "react";
function CardResenas({ imagen, alt, nombre, detalle }) {
  return (
    <article className="review-card">
      <img src={imagen} alt={alt} />
      <div className="review-content">
        <h3>{nombre}</h3>
        <p>"{detalle}"</p>
      </div>
    </article>
  );
}
export default CardResenas;
