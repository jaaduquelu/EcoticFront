import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";

import CrearTipoInspeccion from "./CrearTipoInspeccion";
import ConsultaTabular from "../ConsultaTabularAdmin";
import { vistaConsultaTabularAdmin } from "../../../redux/actions/UI";

export const TiposInspeccionScreen = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(vistaConsultaTabularAdmin());
  }, []);

  const vistaActual = useSelector(
    (state) => state.UI.vistaConsultaTabularAdmin
  );

  const tiposInspeccion = useSelector((state) => state.admin.tiposInspeccion);

  const columnas = [
    {
      field: "",
      headerName: "Editar",
      width: 80,
      hideable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          onClick={() => navigate("/admin/tiposInspeccion/" + params.row.id)}
        >
          <EditIcon />
        </Button>
      ),
    },
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
