import React, { useState } from "react";
import { useProducts } from "../../context/ProductsContext";
import { Link } from "react-router-dom";
import useBoostrap from "../useBoostrap";

export default function ProductosAdmin() {
  useBoostrap(true);
  const { productos, cargando, error, eliminarProducto } = useProducts();
  const [procesandoId, setProcesandoId] = useState(null);

  const handleEliminar = async (id) => {
    if (!confirm("Eliminar producto?")) return;
    try {
      setProcesandoId(id);
      await eliminarProducto(id);
    } catch (err) {
      alert("Error eliminando producto");
      console.error(err);
    } finally {
      setProcesandoId(null);
    }
  };

  if (cargando) return <div className="container py-4">Cargando productos...</div>;
  if (error) return <div className="container py-4">Error: {error}</div>;

  return (
   <div className=" py-4">
  {/* Card de administración */}
  <div className="card mb-4">
    <div className="card-body text-center">
      <h2 className="card-title">Agregar Productos (admin)</h2>
      <Link to="/admin/productos/nuevo" className="btn btn-success w-100">
        Agregar Producto
      </Link>
    </div>
  </div>

  {/* Card del listado */}
  <div className="card">
    <div className="card-body">
      <h2 className="card-title mb-3">Listado de Productos (Api)</h2>
      <div className="list-group">
        {productos.map((p) => (
          <div
            key={p.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{p.nombre ?? p.titulo ?? p.name}</strong>
              <div className="small text-muted">{p.descripcion}</div>
            </div>
            <div className="d-flex gap-3">
              <Link
                to={`/admin/productos/${p.id}/editar`}
                className="btn btn-sm btn-primary"
              >
                Editar
              </Link>
              <button
                className="btn btn-sm btn-danger"
                disabled={procesandoId === p.id}
                onClick={() => handleEliminar(p.id)}
              >
                {procesandoId === p.id ? "..." : "Eliminar"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
}