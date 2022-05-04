import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import SideBarAdmin from "../SideBarAdmin";
import ConsultaTabular from "../ConsultaTabularAdmin";
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
      {vistaActual ? (
        <ConsultaTabular
          name="TIPOS DE CMLS"
          module="tiposCMLS"
          columns={columnas}
        />
      ) : (
        <CrearTipoCML />
      )}
    </>
  );
};
