import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";

import CrearUnidad from "./CrearUnidad";
import ConsultaTabular from "../ConsultaTabularAdmin";
import { vistaConsultaTabularAdmin } from "../../../redux/actions/UI";

export const UnidadesScreen = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(vistaConsultaTabularAdmin());
  }, []);

  const vistaActual = useSelector(
    (state) => state.UI.vistaConsultaTabularAdmin
  );

  const unidades = useSelector((state) => state.admin.unidades);
  console.log(unidades);

  // const columnas = [
  //   "ID",
  //   "Departamento",
  //   "Nombre",
  //   "Descripción",
  //   "Fecha Creación",
  //   "Usuario Creación",
  //   "Fecha Actualización",
  //   "Usuario Actualización",
  // ];

  const columnas = [
    {
      field: "",
      headerName: "Editar",
      width: 80,
      hideable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          onClick={() => navigate("/admin/unidades/" + params.row.id)}
        >
          <EditIcon />
        </Button>
      ),
    },
    { field: "id", headerName: "ID", width: 80, hideable: false },
    { field: "name", headerName: "Nombre", width: 250, hideable: false },
    { field: "short_name", headerName: "Nombre Corto", width: 130 },
    {
      field: "creation_Date",
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
    { field: "creation_User", headerName: "Usuario Creación", width: 200 },
    {
      field: "update_Date",
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
    { field: "update_User", headerName: "Usuario Actualización", width: 250 },
  ];

  return (
    <>
      {vistaActual ? (
        <ConsultaTabular
          name="UNIDADES"
          module="unidades"
          columns={columnas}
          data={unidades}
        />
      ) : (
        <CrearUnidad />
      )}
    </>
  );
};
