import formatearPrecio from "../formatearPrecio";
import { useCartContext } from "../../context/CartContext";

function Carrito(){
  const { carrito, vaciarCarrito, quitarItem, total } = useCartContext();

  return(
    <section className="listCarrito">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {carrito.map((item, index) => (
            <div key={index} className="lista-carrito">
              <span>{item.titulo} - {formatearPrecio(item.precio)}</span>
              <button onClick={() => quitarItem(index)} className="btn ">Eliminar</button>
            </div>
          ))}
          <p>Total: {formatearPrecio(total.toString())}</p>
          <button onClick={vaciarCarrito} className="btn">Vaciar Carrito</button>
        </>
      )}
    </section>
  );
}
export default Carrito;