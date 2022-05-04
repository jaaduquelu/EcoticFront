import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CrearUnidad from "./CrearUnidad";
import ConsultaTabular from "../ConsultaTabularAdmin";

import { vistaConsultaTabularAdmin } from "../../../redux/actions/UI";

export const UnidadesScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vistaConsultaTabularAdmin());
  }, []);

  const vistaActual = useSelector(
    (state) => state.UI.vistaConsultaTabularAdmin
  );
  const columnas = [
    "ID",
    "Departamento",
    "Nombre",
    "Descripción",
    "Fecha Creación",
    "Usuario Creación",
    "Fecha Actualización",
    "Usuario Actualización",
  ];

  return (
    <>
      {vistaActual ? (
        <ConsultaTabular name="UNIDADES" module="unidades" columns={columnas} />
      ) : (
        <CrearUnidad />
      )}
    </>
  );
};
