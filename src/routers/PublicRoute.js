import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { Navigate, useNavigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? <Navigate to="/admin/" /> : children;
};
