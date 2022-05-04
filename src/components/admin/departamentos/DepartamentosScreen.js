import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CrearDepartamento from "./CrearDepartamento";

import { asyncCargarJerarquia } from "../../../redux/actions/admin";
import ConsultaTabular from "../ConsultaTabularAdmin";

export const DepartamentosScreen = () => {
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
          name="DEPARTAMENTOS"
          module="departamentos"
          columns={columnas}
        />
      ) : (
        <CrearDepartamento />
      )}
    </>
  );
};

export default DepartamentosScreen;
