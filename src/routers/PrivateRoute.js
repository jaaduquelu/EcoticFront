import { useIsAuthenticated } from "@azure/msal-react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  console.log("entro a privado");

  return isAuthenticated ? children : <Navigate to="/login" />;
};
