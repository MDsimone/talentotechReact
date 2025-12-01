import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import useBoostrap from "../useBoostrap";
import { useProducts } from "../../context/ProductsContext";

export default function Dashboard() {
  useBoostrap(true);
  const { user, cerrarSesion } = useAuthContext();
   const { productos } = useProducts();
  const navigate = useNavigate();

  const tokenActual = localStorage.getItem("authToken") ?? user?.token ?? "";

  const manejarAgregarProducto = () => {
    navigate("/admin/productos");
  };

  return (
    <div className="py-4">
      <div style={{ gridColumn: "1 / -1", width: "100%" }}>
        <section className="reseñas" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div style={{ width: "100%", display: "block" }}>
            <div  style={{ maxWidth: 720, margin: "0 auto", width: "100%" }}>
             <div className="dashboard-card-wrapper">
              <div className="card"style={{display: "block", width: "100%",maxWidth: 900, minWidth: 360,padding: "1rem",margin: "0 auto"}}>
                <div className="card-body">
                  <p>
                    <strong>Sesión iniciada como:</strong> {user?.name ?? user?.email ?? "admin"}
                  </p>

                  <div
                    className="p-3 mb-3 rounded"
                    style={{ background: "#e9ecef", fontSize: 14 }}
                  >
                    <strong>Token de autenticación:</strong>
                    <br />
                    <code style={{ wordBreak: "break-word" }}>{tokenActual}</code>
                  </div>

                  <div style={{ margin: "20px 0" }}>
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex flex-wrap gap-2">
                        <button onClick={manejarAgregarProducto} className="btn btn-success">
                          Agregar Productos
                        </button>

                        <Link to="/admin/productos" className="btn btn-info text-white">
                          Ver / Editar / Eliminar Productos
                        </Link>
                          <p><strong>Productos en catálogo:</strong> {productos?.length ?? 0}</p>
                        
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-end">
                    <button
                      onClick={() => {
                        cerrarSesion();
                        navigate("/");
                      }}
                      className="btn btn-danger"
                    >
                      Cerrar sesión
                    </button>
                  </div>
                </div>
              </div> {/* card */}
              </div> {/* dashboard-card-wrapper */}
            </div> {/* container */}
          </div>
        </section>
      </div>
    </div>
  );
}