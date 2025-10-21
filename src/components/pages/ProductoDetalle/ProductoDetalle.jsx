import { useParams } from 'react-router-dom';
/*import productos from '../../../data/IndexData';*/
import { Link } from 'react-router-dom';
import formatearPrecio from '../../formatearPrecio';
import useProductoPorRuta from '../../useProductoPorRuta';

function ProductoDetalle ({productos,agregarAlCarrito}) { // Muestra el detalle del producto seleccionado
 /* const { tipo,id } = useParams(); // Obtiene el ID del producto desde la URL
  const safeId = id ? id.trim().toLowerCase() : ''; // Asegura que id no sea undefined
  console.log("safeId:", safeId);
  let producto = productos.find(p => p.id && p.id.trim().toLowerCase()=== safeId); // Busca el producto por ID
 console.log("ID recibido:", id);
 console.log("Producto encontrado inicialmente:", producto);
  if (tipo && producto) {
    const safeTipo = tipo.trim().toLowerCase();
    const productoTipo = producto.tipo ? producto.tipo.trim().toLowerCase() : "";
    if (productoTipo !== safeTipo) {
      producto = undefined;
    }
  }
console.log("Producto encontrado:", producto);
  if (!producto) return <p>Producto no encontrado</p>;
*/

  const {producto, cargando, error} = useProductoPorRuta(productos); /* Usando el hook personalizado para obtener el producto basado en la ruta */

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!producto) return <p>Producto no encontrado</p>;
  return (
       <>
     
    <div className='container'>
      <h2 className="titulo_info"> Más información</h2>
      <section className="grid-container">
        <article className="Dcard">
           <img src={producto.imagen} alt={producto.alt} />
          <div className="Dcard-content">
            <h3>{producto.titulo}</h3>
            <p className="price">{formatearPrecio(producto.precio)}</p>
            <p className='description'>{producto.descripcion}</p>
            <div className='btnDetalle'>
                <button className="btn"  onClick={() => agregarAlCarrito(producto)}>
                  Agregar
                </button>
                <Link to="/" className="btn">Volver</Link>
             </div>   
          </div>
        </article>
    </section>
    </div>
    </>
  );
};

export default ProductoDetalle;