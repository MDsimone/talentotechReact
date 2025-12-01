import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import useBoostrap from "./useBoostrap";

export default function FormularioProducto() {
 useBoostrap(true);  
  const { productos, agregarProducto, editarProducto, validar } = useProducts();
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({ nombre: "", precio: "", descripcion: "", avatar: "" });
  const [errores, setErrores] = useState({});

  useEffect(() => {
    if (id && productos.length) {
      const p = productos.find((x) => String(x.id) === String(id));
      if (p) setForm({
        nombre: p.nombre ?? p.titulo ?? "",
        precio: p.precio ?? p.price ?? "",
        descripcion: p.descripcion ?? p.desc ?? "",
        avatar: p.avatar ?? ""
      });
    }
  }, [id, productos]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { esValido, errores } = validar(form);
    setErrores(errores);
    if (!esValido) return;

    try {
      if (id) {
        await editarProducto({ ...form, id });
        alert("Producto actualizado");
      } else {
        await agregarProducto(form);
        alert("Producto agregado");
      }
      navigate("/admin/productos");
    } catch (err) {
      alert("Error guardando producto");
      console.error(err);
    }
  };

  return (
    <div className="container py-4">
      <h4>{id ? "Editar producto" : "Nuevo producto"}</h4>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label>Nombre</label>
          <input className="form-control" value={form.nombre} onChange={(e)=>setForm({...form,nombre:e.target.value})}/>
          <div className="text-danger small">{errores.nombre}</div>
        </div>
        <div className="mb-3">
          <label>Precio</label>
          <input className="form-control" value={form.precio} onChange={(e)=>setForm({...form,precio:e.target.value})}/>
          <div className="text-danger small">{errores.precio}</div>
        </div>
        <div className="mb-3">
          <label>Descripción</label>
          <textarea className="form-control" value={form.descripcion} onChange={(e)=>setForm({...form,descripcion:e.target.value})}/>
          <div className="text-danger small">{errores.descripcion}</div>
        </div>
        <div className="mb-3">
          <label>Imagen (URL)</label>
          <input className="form-control" value={form.avatar} onChange={(e)=>setForm({...form,avatar:e.target.value})}/>
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-primary" type="submit">{id ? "Guardar" : "Crear"}</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate("/admin/productos")}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}