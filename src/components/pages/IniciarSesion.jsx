import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useBoostrap from "../useBoostrap";

export default function IniciarSesion() {
  useBoostrap(true); // carga Bootstrap mientras esté montado

  const { iniciarSesion } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [formulario, setFormulario] = useState({ nombre: "", email: "" });
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("");


  const modalRef = useRef(null);
  const bsModalRef = useRef(null);

  useEffect(() => {
    // inicializa modal cuando bootstrap está cargado
    if (typeof window !== "undefined" && window.bootstrap && modalRef.current) {
      bsModalRef.current = new window.bootstrap.Modal(modalRef.current);
    }
  }, []);

  const manejarEnvio = (e) => {
    e.preventDefault();
    const fromPath = location.state?.from?.pathname;

    if (formulario.nombre === "admin" && formulario.email === "123@cigarrillo43") {
      iniciarSesion("admin", formulario.email);
      navigate("/dashboard");
      return;
    }

    if (formulario.nombre && formulario.email) {
      iniciarSesion(formulario.nombre, formulario.email);
      setModalTitle("Inicio de sesión correcto");
      setModalBody(`Bienvenido ${formulario.nombre}. ¿Ir a la página anterior?`);

      navigate(fromPath ?? "/productos");
      bsModalRef.current?.show();
      return;
    }

    setModalTitle("Error");
    setModalBody("Completa nombre y email.");
    bsModalRef.current?.show();
  };

  const handleModalConfirm = () => {
    bsModalRef.current?.hide();
  
  };

  return (
    <div className="d-flex justify-content-center py-4">
       <div style={{ width: "100%", maxWidth: 680 }}>
         <div className="card shadow-sm w-100">
           <div className="card-body">
            
              <h3 className="card-title mb-3">Iniciar sesión</h3>
              <form onSubmit={manejarEnvio}>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Tu nombre"
                    value={formulario.nombre}
                    onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="tu@ejemplo.com"
                    value={formulario.email}
                    onChange={(e) => setFormulario({ ...formulario, email: e.target.value })}
                    required
                  />
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                  <button type="button" className="btn btn-secondary" onClick={() => navigate("/productos")}>Cancelar</button>
                </div>
              </form>

              <hr />

              <div className="small text-muted">
                Credenciales de prueba: <strong>admin / 123@cigarrillo43</strong>
              </div>
            </div>
          </div>
        </div>

      {/* Bootstrap modal */}
      <div className="modal fade" tabIndex="-1" ref={modalRef} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{modalTitle}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              <p>{modalBody}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={handleModalConfirm}>Continuar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}