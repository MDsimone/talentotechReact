import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("authEmail");
    const name = localStorage.getItem("authName");
    const token = localStorage.getItem("authToken");
    if (email && name) setUser({ name, email, isAdmin: name === "admin", token });
  }, []);

  const generarToken = () => {
    // token simple de ejemplo; en producción deberías usar el token real del backend
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  };

  const iniciarSesion = (name, email) => {
    const token = generarToken();
    localStorage.setItem("authEmail", email);
    localStorage.setItem("authName", name);
    localStorage.setItem("authToken", token);
    setUser({ name, email, isAdmin: name === "admin", token });
  };

  const cerrarSesion = () => {
    localStorage.removeItem("authEmail");
    localStorage.removeItem("authName");
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}