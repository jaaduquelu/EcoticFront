import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConsultaTabular from "../ConsultaTabularAdmin";
import CrearMaterial from "./CrearMaterial";

import { vistaConsultaTabularAdmin } from "../../../redux/actions/UI";

export const MaterialesScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vistaConsultaTabularAdmin());
  }, []);

  const vistaActual = useSelector(
    (state) => state.UI.vistaConsultaTabularAdmin
  );

  const materiales = useSelector((state) => state.admin.materiales);

  const columnas = [
    "ID",
    "Grupo",
    "Forma",
    "Material",
    "Nombre",
    "Especificación",
    "Grado",
    "Codigo",
    "Uns",
    "Clase",
    "Tamaño",
    "P No",
    "Notas",
    "Temp Min",
    "Smts",
    "Smys",
  ];

  return (
    <>
      {vistaActual ? (
        <ConsultaTabular
          name="MATERIALES"
          module="materiales"
          columns={columnas}
        />
      ) : (
        <CrearMaterial />
      )}
    </>
  );
};
