import React from "react";
import instrumentos from "../../data/IndexData.js";
import CardIndex from "../CardIndex";
import formatearPrecio from "../formatearPrecio";
function Galleria() {

/* recorre el IndexData y arma los cards desde CardIndex */
    return (
      <>
       {instrumentos.map((data, index) => (
          <CardIndex
            key={index}
            imagen={data.imagen}
            alt={data.alt}
            titulo={data.titulo}
            precio={formatearPrecio(data.precio)}
            descripcion={data.descripcion}
            link={data.link}
          />
       ))}
       </>
      );
} 
        export default Galleria;