import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CrearTipoInspeccion from "./CrearTipoInspeccion";
import ConsultaTabular from "../ConsultaTabularAdmin";
import { vistaConsultaTabularAdmin } from "../../../redux/actions/UI";

export const TiposInspeccionScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vistaConsultaTabularAdmin());
  }, []);

  const vistaActual = useSelector(
    (state) => state.UI.vistaConsultaTabularAdmin
  );

  const tiposInspeccion = useSelector((state) => state.admin.tiposInspeccion);

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
      {vistaActual ? (
        <ConsultaTabular
          name="TIPOS DE INSPECCIÓN"
          module="tiposInspeccion"
          columns={columnas}
        />
      ) : (
        <CrearTipoInspeccion />
      )}
    </>
  );
};
