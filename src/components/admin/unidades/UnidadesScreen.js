import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import SideBarAdmin from "../SideBarAdmin";
import CrearUnidad from "./CrearUnidad";

import ConsultaTabular from "../ConsultaTabular";
import { vistaConsultaTabularAdmin } from "../../../redux/actions/UI";

export const UnidadesScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vistaConsultaTabularAdmin());
  }, []);

  const vistaActual = useSelector(
    (state) => state.UI.vistaConsultaTabularAdmin
  );
  const columnas = ["Name", "Company", "City", "State"];

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
            <ConsultaTabular module="UNIDADES" columns={columnas} />
          ) : (
            <CrearUnidad />
          )}
        </Box>
      </Box>
    </>
  );
};
