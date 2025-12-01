import React from "react";
import { useCartContext } from "../../context/CartContext";
import formatearPrecio from "../../components/formatearPrecio";

export default function Pagar() {
  const { carrito, total, vaciarCarrito } = useCartContext();

  if (!carrito || carrito.length === 0) {
    return (
      <div className="container">
        <h2>Carrito vacío</h2>
        <p>No hay productos para pagar.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Resumen de pago</h2>
      <ul>
        {carrito.map((item, i) => {
          // Normalizar nombres de campos: probar varios nombres posibles
          const nombre = item.titulo ?? item.nombre ?? item.name ?? "Sin título";
          const precioRaw = item.precio ?? item.price ?? item.cost ?? "";
          return (
            <li key={i}>
              {nombre} — {formatearPrecio(String(precioRaw))}
            </li>
          );
        })}
      </ul>
      <p>Total: {formatearPrecio(String(total || 0))}</p>
      <button
        onClick={() => {
          alert("Compra simulada. Gracias.");
          vaciarCarrito();
        }}
        className="btn"
      >
        Confirmar compra (simulado)
      </button>
    </div>
  );
}