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

  const columnas = [
    {
      field: "",
      headerName: "",
      type: "actions",
      headerClassName: "super-app-theme--header",
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
    {
      field: "id",
      headerName: "ID",
      headerClassName: "super-app-theme--header",
      width: 80,
      hideable: false,
      renderHeader: () => <strong>ID</strong>,
    },
    {
      field: "name",
      headerName: "Nombre",
      headerClassName: "super-app-theme--header",
      width: 250,
      hideable: false,
      renderHeader: () => <strong>Nombre</strong>,
    },
    {
      field: "description",
      headerName: "Descripción",
      headerClassName: "super-app-theme--header",
      width: 260,
      renderHeader: () => <strong>Descripción</strong>,
    },
    {
      field: "departmentName",
      headerName: "Departamento",
      headerClassName: "super-app-theme--header",
      width: 240,
      renderHeader: () => <strong>Departamento</strong>,
    },
    {
      field: "creation_date",
      headerName: "Fecha Creación",
      headerClassName: "super-app-theme--header",
      width: 150,
      renderHeader: () => <strong>Fecha Creación</strong>,
      valueFormatter: (params) => {
        if (params.value == null) {
          return "";
        }
        const valueFormatted = moment(params.value).format("DD/MM/YYYY");
        return valueFormatted;
      },
    },
    {
      field: "creation_user",
      headerName: "Usuario Creación",
      headerClassName: "super-app-theme--header",
      width: 200,
      renderHeader: () => <strong>Usuario Creación</strong>,
    },
    {
      field: "upate_date",
      headerName: "Fecha Actualización",
      headerClassName: "super-app-theme--header",
      width: 170,
      renderHeader: () => <strong>Fecha Actualización</strong>,
      valueFormatter: (params) => {
        if (params.value == null) {
          return "";
        }
        const valueFormatted = moment(params.value).format("DD/MM/YYYY");
        return valueFormatted;
      },
    },
    {
      field: "update_user",
      headerName: "Usuario Actualización",
      headerClassName: "super-app-theme--header",
      width: 250,
      renderHeader: () => <strong>Usuario Actualización</strong>,
    },
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
