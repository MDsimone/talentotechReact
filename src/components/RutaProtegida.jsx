import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function RutaProtegida({ children, soloAdmin = false }) {
  const { user } = useAuthContext();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/iniciar-sesion" state={{ from: location }} replace />;
  }
  if (soloAdmin && !user.isAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;
}