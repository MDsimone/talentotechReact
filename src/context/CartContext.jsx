import React, { createContext, useContext, useState, useMemo, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => {
      // si querés evitar duplicados, modificalo aquí
      const next = [...prev, producto];
      return next;
    });
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const quitarItem = (index) => {
    setCarrito(prev => prev.filter((_, i) => i !== index));
  };

  const total = useMemo(() => {
    return carrito.reduce((sum, item) => {
      const num = parseFloat(String(item.precio || "").replace(/[^\d.-]/g, "")) || 0;
      return sum + num;
    }, 0);
  }, [carrito]);

  return (
    <CartContext.Provider
      value={{ carrito, agregarAlCarrito, vaciarCarrito, quitarItem, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}