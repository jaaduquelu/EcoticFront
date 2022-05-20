import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";

import ConsultaTabular from "../ConsultaTabularAdmin";
import CrearMaterial from "./CrearMaterial";

import { vistaConsultaTabularAdmin } from "../../../redux/actions/UI";

export const MaterialesScreen = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(vistaConsultaTabularAdmin());
  }, []);

  const vistaActual = useSelector(
    (state) => state.UI.vistaConsultaTabularAdmin
  );

  const materiales = useSelector((state) => state.admin.materiales);

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
          onClick={() => navigate("/admin/materiales/" + params.row.id)}
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
      field: "material_group",
      headerName: "Grupo",
      headerClassName: "super-app-theme--header",
      width: 220,
      hideable: false,
      renderHeader: () => <strong>Grupo</strong>,
    },
    {
      field: "name",
      headerName: "Nombre",
      headerClassName: "super-app-theme--header",
      width: 200,
      hideable: false,
      renderHeader: () => <strong>Nombre</strong>,
    },
    {
      field: "material",
      headerName: "Material",
      headerClassName: "super-app-theme--header",
      width: 250,
      hideable: false,
      renderHeader: () => <strong>Material</strong>,
    },
    {
      field: "specification",
      headerName: "Especificación",
      headerClassName: "super-app-theme--header",
      width: 130,
      renderHeader: () => <strong>Especificación</strong>,
    },
    {
      field: "product_form",
      headerName: "Forma",
      headerClassName: "super-app-theme--header",
      width: 110,
      renderHeader: () => <strong>Forma</strong>,
    },
    {
      field: "grade",
      headerName: "Grado",
      headerClassName: "super-app-theme--header",
      width: 120,
      renderHeader: () => <strong>Grado</strong>,
    },
    {
      field: "applicable_code",
      headerName: "Código",
      headerClassName: "super-app-theme--header",
      width: 120,
      renderHeader: () => <strong>Código</strong>,
    },
    {
      field: "uns",
      headerName: "Uns",
      headerClassName: "super-app-theme--header",
      width: 100,
      renderHeader: () => <strong>Uns</strong>,
    },
    {
      field: "short_name",
      headerName: "Clase",
      headerClassName: "super-app-theme--header",
      width: 130,
      renderHeader: () => <strong>Clase</strong>,
    },
    {
      field: "size",
      headerName: "Tamaño",
      headerClassName: "super-app-theme--header",
      width: 130,
      renderHeader: () => <strong>Tamaño</strong>,
    },
    {
      field: "notes",
      headerName: "Notas",
      headerClassName: "super-app-theme--header",
      width: 130,
      renderHeader: () => <strong>Notas</strong>,
    },
    {
      field: "min_temp",
      headerName: "Temp Min",
      headerClassName: "super-app-theme--header",
      width: 110,
      renderHeader: () => <strong>Temp Min</strong>,
    },
    {
      field: "smts",
      headerName: "Smts",
      headerClassName: "super-app-theme--header",
      width: 90,
      renderHeader: () => <strong>Smts</strong>,
    },
    {
      field: "smys",
      headerName: "Smys",
      headerClassName: "super-app-theme--header",
      width: 90,
      renderHeader: () => <strong>Smys</strong>,
    },
  ];

  return (
    <>
      {vistaActual ? (
        <ConsultaTabular
          name="MATERIALES"
          module="materiales"
          columns={columnas}
          data={materiales}
        />
      ) : (
        <CrearMaterial />
      )}
    </>
  );
};
