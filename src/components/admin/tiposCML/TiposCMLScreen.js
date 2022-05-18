import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import ConsultaTabular from "../ConsultaTabularAdmin";
import CrearTipoCML from "./CrearTipoCML";
import { vistaConsultaTabularAdmin } from "../../../redux/actions/UI";

export const TiposCMLScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vistaConsultaTabularAdmin());
  }, []);

  const tiposCML = useSelector((state) => state.admin.tiposCML);

  const vistaActual = useSelector(
    (state) => state.UI.vistaConsultaTabularAdmin
  );

  const columnas = [
    { field: "id", headerName: "ID", width: 80, hideable: false },
    { field: "name", headerName: "Nombre ", width: 140, hideable: false },
    { field: "description", headerName: "Descripción", width: 260 },
    { field: "unitId", headerName: "Unidad Id", width: 100 },
    {
      field: "creationDate",
      headerName: "Fecha Creación",
      width: 150,
      valueFormatter: (params) => {
        if (params.value == null) {
          return "";
        }
        const valueFormatted = moment(params.value).format("DD/MM/YYYY");
        return valueFormatted;
      },
    },
    { field: "creationUserId", headerName: "Usuario Creación", width: 150 },
    {
      field: "updateDate",
      headerName: "Fecha Actualización",
      width: 150,
      valueFormatter: (params) => {
        if (params.value == null) {
          return "";
        }
        const valueFormatted = moment(params.value).format("DD/MM/YYYY");
        return valueFormatted;
      },
    },
    { field: "updateUserId", headerName: "Usuario Actualización", width: 160 },
  ];

  return (
    <>
      {vistaActual ? (
        <ConsultaTabular
          name="TIPOS DE CMLS"
          module="tiposCML"
          columns={columnas}
          data={tiposCML}
        />
      ) : (
        <CrearTipoCML />
      )}
    </>
  );
};
