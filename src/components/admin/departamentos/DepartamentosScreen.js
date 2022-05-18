import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import CrearDepartamento from "./CrearDepartamento";
import ConsultaTabular from "../ConsultaTabularAdmin";
import { vistaConsultaTabularAdmin } from "../../../redux/actions/UI";

export const DepartamentosScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vistaConsultaTabularAdmin());
  }, []);

  const vistaActual = useSelector(
    (state) => state.UI.vistaConsultaTabularAdmin
  );

  // const { idUsuario } = useSelector(state => state.login);
  //   const proyecto = useSelector(state => state.proyectos.listado.find((pr) => pr.idProyecto == idProyecto));
  //   const reportes = useSelector(state => state.proyectos.reportesCondicion.filter((reporte) => reporte.idProyecto == idProyecto));

  const departamentos = useSelector((state) => state.admin.departamentos);

  const columnas = [
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
