import React, { useEffect } from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { Navigate, useNavigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated && navigate("/admin/");
  }, [isAuthenticated]);

  return isAuthenticated ? <Navigate to="/admin" /> : children;
};
