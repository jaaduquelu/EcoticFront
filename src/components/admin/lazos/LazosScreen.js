import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import SideBarAdmin from "../SideBarAdmin";
import ConsultaTabular from "../ConsultaTabular";
import { CrearLazo } from "./CrearLazos";

import { vistaConsultaTabularAdmin } from "../../../redux/actions/UI";

export const LazosScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vistaConsultaTabularAdmin());
  }, []);

  const vistaActual = useSelector(
    (state) => state.UI.vistaConsultaTabularAdmin
  );
  const columnas = [
    "ID",
    "Unidad",
    "Nombre",
    "Descripción",
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

        <Box component="main" sx={{ flexGrow: 1, py: 1, px: 3 }}>
          {vistaActual ? (
            <ConsultaTabular
              name="LAZOS DE CORROSIÓN"
              module="lazos"
              columns={columnas}
            />
          ) : (
            <CrearLazo />
          )}
        </Box>
      </Box>
    </>
  );
};
