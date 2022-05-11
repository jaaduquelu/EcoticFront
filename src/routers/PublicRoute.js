import { useIsAuthenticated } from "@azure/msal-react";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? <Navigate to="/admin" /> : children;
};
