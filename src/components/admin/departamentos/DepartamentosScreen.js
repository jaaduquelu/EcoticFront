import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";

import CrearDepartamento from "./CrearDepartamento";
import ConsultaTabular from "../ConsultaTabularAdmin";
import { vistaConsultaTabularAdmin } from "../../../redux/actions/UI";

export const DepartamentosScreen = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(vistaConsultaTabularAdmin());
  }, []);

  const vistaActual = useSelector(
    (state) => state.UI.vistaConsultaTabularAdmin
  );

  //   const { idUsuario } = useSelector(state => state.login);
  //   const proyecto = useSelector(state => state.proyectos.listado.find((pr) => pr.idProyecto == idProyecto));
  //   const reportes = useSelector(state => state.proyectos.reportesCondicion.filter((reporte) => reporte.idProyecto == idProyecto));

  const departamentos = useSelector((state) => state.admin.departamentos);

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
          onClick={() => navigate("/admin/departamentos/" + params.row.id)}
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
      field: "short_name",
      headerName: "Nombre Corto",
      headerClassName: "super-app-theme--header",
      width: 130,
      renderHeader: () => <strong>Nombre Corto</strong>,
    },
    {
      field: "description",
      headerName: "Descripción",
      headerClassName: "super-app-theme--header",
      width: 260,
      renderHeader: () => <strong>Descripción</strong>,
    },
    {
      field: "creation_Date",
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
      field: "creation_User",
      headerName: "Usuario Creación",
      headerClassName: "super-app-theme--header",
      width: 200,
      renderHeader: () => <strong>Usuario Creación</strong>,
    },
    {
      field: "update_Date",
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
      field: "update_User",
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
          name="DEPARTAMENTOS"
          module="departamentos"
          columns={columnas}
          data={departamentos}
        />
      ) : (
        <CrearDepartamento />
      )}
    </>
  );
};

export default DepartamentosScreen;
