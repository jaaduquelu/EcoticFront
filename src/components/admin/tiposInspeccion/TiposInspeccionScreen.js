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
    { field: "id", headerName: "ID", width: 80, hideable: false },
    { field: "name", headerName: "Nombre", width: 250, hideable: false },
    { field: "shortName", headerName: "Nombre Corto", width: 100 },
    { field: "description", headerName: "Descripción", width: 400 },
    { field: "forCr", headerName: "For Cr", width: 100 },
  ];

  return (
    <>
      {vistaActual ? (
        <ConsultaTabular
          name="TIPOS DE INSPECCIÓN"
          module="tiposInspeccion"
          columns={columnas}
          data={tiposInspeccion}
        />
      ) : (
        <CrearTipoInspeccion />
      )}
    </>
  );
};
