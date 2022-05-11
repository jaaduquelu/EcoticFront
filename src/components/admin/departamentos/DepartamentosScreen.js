import React, { useEffect } from "react";
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
    "ID",
    "Nombre",
    "Nombre Corto",
    "Descripción",
    "Fecha Creación",
    "Usuario Creación",
    "Fecha Actualización",
    "Usuario Actualización",
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
