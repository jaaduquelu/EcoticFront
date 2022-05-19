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
    { field: "creationUser", headerName: "Usuario Creación", width: 150 },
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
    { field: "updateUser", headerName: "Usuario Actualización", width: 160 },
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
