import { useState, useEffect } from "react";
import CardIndex from "./CardIndex";
import { Link } from "react-router-dom";
import formatearPrecio from "./formatearPrecio";

export default function ProductosApi() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://68fcd4df96f6ff19b9f66a75.mockapi.io/api/music/productos")
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
console.log("Productos cargados desde API:", productos);
  return (
    <ul id="lista-productos">
      {productos.map((producto) => (
      <li key={producto.id}>
        <CardIndex
        imagen={producto.avatar}
        alt={producto.nombre}
        titulo={producto.nombre}
        precio={formatearPrecio(producto.precio)}
        descripcion={producto.descripcion}
        link={"/producto/" + producto.id}
        linkState={{ producto }} // pasar objeto completo como state
        />
      </li>
  ))}
  
</ul>

  );
}
