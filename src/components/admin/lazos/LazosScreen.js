import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ConsultaTabular from "../ConsultaTabularAdmin";
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

  const lazos = useSelector((state) => state.admin.lazos);

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
      {vistaActual ? (
        <ConsultaTabular
          name="LAZOS DE CORROSIÓN"
          module="lazos"
          columns={columnas}
        />
      ) : (
        <CrearLazo />
      )}
    </>
  );
};
