import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";

import ConsultaTabular from "../ConsultaTabularAdmin";
import { CrearLazo } from "./CrearLazos";
import { vistaConsultaTabularAdmin } from "../../../redux/actions/UI";

export const LazosScreen = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(vistaConsultaTabularAdmin());
  }, []);

  const vistaActual = useSelector(
    (state) => state.UI.vistaConsultaTabularAdmin
  );

  const lazos = useSelector((state) => state.admin.lazos);

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
          onClick={() => navigate("/admin/lazos/" + params.row.id)}
        >
          <EditIcon />
        </Button>
      ),
    },
    {
      field: "id",
      headerName: "ID",
      width: 80,
      hideable: false,
      renderHeader: () => <strong>ID</strong>,
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 140,
      hideable: false,
      renderHeader: () => <strong>Nombre</strong>,
    },
    {
      field: "description",
      headerName: "Descripción",
      width: 260,
      renderHeader: () => <strong>Descripción</strong>,
    },
    {
      field: "unitId",
      headerName: "Unidad",
      width: 100,
      renderHeader: () => <strong>Unidad</strong>,
    },
    {
      field: "creationDate",
      headerName: "Fecha Creación",
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
      field: "creationUser",
      headerName: "Usuario Creación",
      width: 150,
      renderHeader: () => <strong>Usuario Creación</strong>,
    },
    {
      field: "updateDate",
      headerName: "Fecha Actualización",
      width: 180,
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
      field: "updateUser",
      headerName: "Usuario Actualización",
      width: 180,
      renderHeader: () => <strong>Usuario Actualización</strong>,
    },
  ];

  return (
    <>
      {vistaActual ? (
        <ConsultaTabular
          name="LAZOS DE CORROSIÓN"
          module="lazos"
          columns={columnas}
          data={lazos}
        />
      ) : (
        <CrearLazo />
      )}
    </>
  );
};
