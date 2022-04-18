import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SideBarAdmin from "../SideBarAdmin";
import ConsultaTabularDepartamentos from "./ConsultaTabularDepartamentos";
import CrearDepartamento from "./CrearDepartamento";

import { asyncCargarJerarquia } from "../../../redux/actions/admin";

export const DepartamentosScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCargarJerarquia());
  }, []);

  const vistaDepartamentosAdmin = useSelector(
    (state) => state.UI.vistaDepartamentosAdmin
  );

  return (
    <>
      <div className="row">
        <div className="col-2">
          <SideBarAdmin />
        </div>

        <div className="col-10">
          {vistaDepartamentosAdmin ? (
            <ConsultaTabularDepartamentos />
          ) : (
            <CrearDepartamento />
          )}
        </div>
      </div>
    </>
  );
};

export default DepartamentosScreen;
