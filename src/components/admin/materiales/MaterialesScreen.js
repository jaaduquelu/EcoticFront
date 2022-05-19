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
    { field: "id", headerName: "ID", width: 80, hideable: false },
    {
      field: "material_group",
      headerName: "Grupo",
      width: 220,
      hideable: false,
    },
    { field: "name", headerName: "Nombre ", width: 200, hideable: false },
    { field: "material", headerName: "Material", width: 250, hideable: false },
    { field: "specification", headerName: "Especificación", width: 130 },
    { field: "product_form", headerName: "Forma", width: 110 },
    { field: "grade", headerName: "Grado", width: 120 },
    { field: "applicable_code", headerName: "Codigo", width: 120 },
    { field: "uns", headerName: "Uns ", width: 100 },
    { field: "short_name", headerName: "Clase", width: 130 },
    { field: "size", headerName: "Tamaño", width: 130 },
    { field: "notes", headerName: "Notas", width: 130 },
    { field: "min_temp", headerName: "Temp Min", width: 110 },
    { field: "smts", headerName: "Smts", width: 90 },
    { field: "smys", headerName: "Smys", width: 90 },
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
