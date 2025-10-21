import formatearPrecio from "../formatearPrecio";
function Carrito({carrito, vaciarCarrito}){
    const total = carrito.reduce((sum, item) => {
        const precioNumber = parseFloat(item.precio.replace('$', '').trim())
        return sum + (isNaN(precioNumber)? 0: precioNumber);
        }, 0);
   
    return(
        <section className="listCarrito">
        <h2>Carrito de Compras</h2>
        {carrito.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
            <>
            {carrito.map((item, index) => (
                <div key={index} className="carrito-item">
                    <span>{item.titulo} - {formatearPrecio(item.precio)}</span>
                    </div>
            ))}
            <p>Total: {formatearPrecio(total.toString())}</p>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            </>
        )}
        </section>
    );
}
export default Carrito;