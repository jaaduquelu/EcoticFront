import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";

import ConsultaTabular from "../ConsultaTabularAdmin";
import CrearTipoCML from "./CrearTipoCML";
import { vistaConsultaTabularAdmin } from "../../../redux/actions/UI";

export const TiposCMLScreen = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(vistaConsultaTabularAdmin());
  }, []);

  const tiposCML = useSelector((state) => state.admin.tiposCML);

  const vistaActual = useSelector(
    (state) => state.UI.vistaConsultaTabularAdmin
  );

  const columnas = [
    {
      field: "",
      headerName: "",
      type: "actions",
      width: 80,
      hideable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          onClick={() => navigate("/admin/tiposCML/" + params.row.id)}
        >
          <EditIcon />
        </Button>
      ),
    },
    { field: "id", headerName: "ID", width: 80, hideable: false },
    { field: "name", headerName: "Nombre ", width: 140, hideable: false },
    { field: "description", headerName: "Descripción", width: 300 },
    { field: "tmlQty", headerName: "tml Qty", width: 90 },
    { field: "start_1", headerName: "Inicio 1", width: 80 },
    { field: "end_1", headerName: "Fin 1", width: 80 },
    { field: "start_2", headerName: "Inicio 2", width: 80 },
    { field: "end_2", headerName: "Fin 2", width: 80 },
    { field: "start_3", headerName: "Inicio 3", width: 80 },
    { field: "end_3", headerName: "Fin 3", width: 80 },
    { field: "start_4", headerName: "Inicio 4", width: 80 },
    { field: "end_4", headerName: "Fin 4", width: 80 },
    {
      field: "creationDate",
      headerName: "Fecha Creación",
      width: 130,
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
