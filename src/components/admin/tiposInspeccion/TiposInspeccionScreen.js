import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import SideBarAdmin from "../SideBarAdmin";
import CrearTipoInspeccion from "./CrearTipoInspeccion";

import { asyncCargarJerarquia } from "../../../redux/actions/admin";
import ConsultaTabular from "../ConsultaTabularAdmin";

export const TiposInspeccionScreen = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(asyncCargarJerarquia());
  // }, []);

  const vistaActual = useSelector(
    (state) => state.UI.vistaConsultaTabularAdmin
  );

  const columnas = [
    "ID",
    "Nombre",
    "Nombre corto",
    "Descripción",
    "For Cr",
    "Fecha Creación",
    "Usuario Creación",
    "Fecha Actualización",
    "Usuario Actualización",
  ];

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideBarAdmin />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", py: 1, px: 3 }}
        >
          {vistaActual ? (
            <ConsultaTabular
              name="TIPOS DE INSPECCIÓN"
              module="tiposInspeccion"
              columns={columnas}
            />
          ) : (
            <CrearTipoInspeccion />
          )}
        </Box>
      </Box>
    </>
  );
};
