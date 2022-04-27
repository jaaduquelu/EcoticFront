import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InteractionStatus } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";

import "../styles/App.css";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

//Auth
import AccesoDenegado from "../components/auth/AccesoDenegado";
import LogoutScreen from "../components/auth/SesionFinalizada";

import LoginScreen from "../components/auth/Login";
import Error404 from "../components/general/Error404";
import { AdminRoutes } from "./AdminRoutes";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const { inProgress } = useMsal();

  console.log(inProgress);

  if (inProgress != InteractionStatus.None) {
    return (
      <div className="container">
        <h1>ESPERE...</h1>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Error404" component={Error404} />

        <Route
          path="/"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />

        <Route
          path="/logout"
          element={
            <PublicRoute>
              <LogoutScreen />
            </PublicRoute>
          }
        />

        <Route
          path="/admin/*"
          element={
            <PrivateRoute>
              <AdminRoutes />
            </PrivateRoute>
          }
        />

        {/* <Route
          path="/activos/*"
          element={
            <PrivateRoute>
              <ActivosRoutes />
            </PrivateRoute>
          }
        /> */}

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
