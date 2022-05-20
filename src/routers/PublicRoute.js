import { useIsAuthenticated } from "@azure/msal-react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();

  const autenticado = useSelector((state) => state.auth.autenticado);

  return isAuthenticated || autenticado ? <Navigate to="/admin/" /> : children;
};
