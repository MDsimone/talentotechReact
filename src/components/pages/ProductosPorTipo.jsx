import productos from "../../data/InstrumentosData.json"
import CardIndex from "../CardIndex";
import { useParams } from "react-router-dom";
import { formatearPrecio } from "../formatearPrecio";

function ProductosPorTipo() {
 const { tipo } = useParams();
 //console.log("Tipo recibido:", tipo);
//console.log("Todos los productos:", productos);
  const filtrados = productos.filter(p => p.tipo === tipo);
    console.log("Productos filtrados:", filtrados);
  
  return (
    <section className={"productos-${tipo}"}>
      <h2>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h2>
      <div className="grid">
        {filtrados.map(producto => (
          <CardIndex
            key={producto.id}
            imagen={producto.imagen}
            alt={producto.alt}
            titulo={producto.titulo}
            precio={formatearPrecio(producto.precio)}
            descripcion={producto.descripcion}
            link={"/productos/" +tipo + "/" + producto.id}
          />
        ))}   
      </div>
    </section>
  );
}

export default ProductosPorTipo;
