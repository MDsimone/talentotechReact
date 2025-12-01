import React, { createContext, useState, useContext, useEffect } from "react";

const ProductsContext = createContext();
const API_BASE = "https://68fcd4df96f6ff19b9f66a75.mockapi.io/api/music/productos";

export function ProductsProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const validarProducto = (producto) => {
    const errores = {};
    if (!producto.nombre?.trim()) errores.nombre = "El nombre es obligatorio.";
    if (!producto.precio?.toString().trim()) errores.precio = "El precio es obligatorio.";
    else {
      const limpio = producto.precio.toString().replace(/\./g, "").replace(",", ".");
      const num = parseFloat(limpio);
      if (isNaN(num) || num <= 0) errores.precio = "Precio no válido, debe ser mayor a 0.";
    }
    if (!producto.descripcion?.trim()) errores.descripcion = "La descripción es obligatoria.";
    else if (producto.descripcion.length < 10) errores.descripcion = "Mínimo 10 caracteres.";
    else if (producto.descripcion.length > 600) errores.descripcion = "Máximo 600 caracteres.";
    return errores;
  };

  const validar = (producto) => {
    const errores = validarProducto(producto);
    return { esValido: Object.keys(errores).length === 0, errores };
  };

  useEffect(() => {
    async function cargar() {
      try {
        const res = await fetch(API_BASE);
        if (!res.ok) throw new Error("Error al cargar productos");
        const data = await res.json();
        setProductos(data);
      } catch (err) {
        console.error(err);
        setError("Hubo un problema al cargar los productos.");
      } finally {
        setCargando(false);
      }
    }
    cargar();
  }, []);

  const agregarProducto = async (nuevoProducto) => {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoProducto),
    });
    if (!res.ok) throw new Error("Error al agregar el producto");
    const data = await res.json();
    setProductos((prev) => [...prev, data]);
    return data;
  };

  const editarProducto = async (productoActualizado) => {
    const res = await fetch(`${API_BASE}/${productoActualizado.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productoActualizado),
    });
    if (!res.ok) throw new Error("Error al editar el producto");
    const data = await res.json();
    setProductos((prev) => prev.map((p) => (p.id === data.id ? data : p)));
    return data;
  };

  const eliminarProducto = async (id) => {
    const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Error al eliminar el producto");
    setProductos((prev) => prev.filter((p) => p.id !== id));
    return true;
  };

  return (
    <ProductsContext.Provider
      value={{
        productos,
        cargando,
        error,
        agregarProducto,
        editarProducto,
        eliminarProducto,
        validarProducto,
        validar,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error("useProducts debe usarse dentro de ProductsProvider");
  return ctx;
}