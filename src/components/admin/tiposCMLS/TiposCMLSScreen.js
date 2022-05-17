import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ConsultaTabular from "../ConsultaTabularAdmin";
import CrearTipoCML from "./CrearTipoCML";
import { vistaConsultaTabularAdmin } from "../../../redux/actions/UI";

export const TiposCMLSScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vistaConsultaTabularAdmin());
  }, []);

  const tiposCMLS = useSelector((state) => state.admin.tiposCMLS);

  const vistaActual = useSelector(
    (state) => state.UI.vistaConsultaTabularAdmin
  );
  const columnas = [
    "ID",
    "Nombre",
    "Nombre Corto",
    "Descripción",
    "Fecha Creación",
    "Usuario Creación",
    "Fecha Actualización",
    "Usuario Actualización",
  ];

  return (
    <>
      {vistaActual ? (
        <ConsultaTabular
          name="TIPOS DE CMLS"
          module="tiposCMLS"
          columns={columnas}
          data={tiposCMLS}
        />
      ) : (
        <CrearTipoCML />
      )}
    </>
  );
};
