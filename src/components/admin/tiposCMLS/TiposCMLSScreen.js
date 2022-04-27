import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import SideBarAdmin from "../SideBarAdmin";
import ConsultaTabular from "../ConsultaTabular";
import CrearTipoCML from "./CrearTipoCML";
import { vistaConsultaTabularAdmin } from "../../../redux/actions/UI";

export const TiposCMLSScreen = () => {
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
            <ConsultaTabular
              name="TIPOS DE CMLS"
              module="tiposCMLS"
              columns={columnas}
            />
          ) : (
            <CrearTipoCML />
          )}
        </Box>
      </Box>
    </>
  );
};
