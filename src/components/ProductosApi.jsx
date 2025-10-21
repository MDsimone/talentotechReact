import { useState, useEffect } from "react";
import CardIndex from "./CardIndex";
import { Link } from "react-router-dom";
import formatearPrecio from "./formatearPrecio";

export default function ProductosApi() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://68d482e3214be68f8c696ae2.mockapi.io/api/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        {console.error("Error!,", error)}
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul id="lista-productos">
  {productos.map((producto) => (
    console.log(producto.avatar),
    <CardIndex
      key={producto.id}
      imagen={producto.avatar}
      alt={producto.nombre}
      titulo={producto.nombre}
      precio={formatearPrecio(producto.precio)}
      descripcion={producto.descripcion}
      link={`/productos/${producto.id}`}
    />
  ))}
  
</ul>

  );
}
