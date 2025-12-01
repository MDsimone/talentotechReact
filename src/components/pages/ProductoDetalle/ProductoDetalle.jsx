import { useParams, useLocation, Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext';
import formatearPrecio from '../../formatearPrecio';
import useProductoPorRuta from '../../useProductoPorRuta';

function ProductoDetalle ({productos}) {
  const location = useLocation();
  const { agregarAlCarrito } = useCartContext(); // ahora desde context

  const productoDesdeState = location.state?.producto || location.state?.product || null;
  const { producto: productoPorRuta, cargando, error } = useProductoPorRuta(Array.isArray(productos) ? productos : []);
  const producto = productoDesdeState ?? productoPorRuta;

  if (!productoDesdeState) {
    if (cargando) return <p>Cargando producto...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!productoPorRuta) return <p>Producto no encontrado</p>;
  }

  // manejo de imagenes (igual que antes)
  const base = import.meta.env.BASE_URL || '/';
  const rawImagen = producto.imagen ?? producto.avatar ?? '';
  const clean = String(rawImagen || '')
    .replace(/^\/public\//, '')
    .replace(/^\//, '');
  const src_imagen =
    typeof rawImagen === 'string' && /^(https?:)?\/\//.test(rawImagen)
      ? rawImagen
      : `${base}${clean}`;

  return (
    <>
      <div className='container'>
        <h2 className="titulo_info"> Más información</h2>
        <section className="grid-container">
          <article className="Dcard">
             <img src={src_imagen} alt={producto.alt ?? producto.nombre ?? producto.titulo} onError={(e)=>{ e.target.onerror = null; e.target.src = `${base}vite.svg`; }} />
            <div className="Dcard-content">
              <h3>{producto.titulo ?? producto.nombre}</h3>
              <p className="price">{formatearPrecio(producto.precio)}</p>
              <p className='description'>{producto.descripcion}</p>
              <div className='btnDetalle'>
                <button className="btn" onClick={() => agregarAlCarrito(producto)}>
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
}

export default ProductoDetalle;