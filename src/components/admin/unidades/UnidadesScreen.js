import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SideBarAdmin from "../SideBarAdmin";
import ConsultaTabularUnidades from "./ConsultaTabularUnidades";

import { asyncCargarJerarquia } from "../../../redux/actions/admin";
import CrearDepartamento from "../departamentos/CrearDepartamento";

export const UnidadesScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCargarJerarquia());
  }, []);

  const vistaUnidadesAdmin = useSelector(
    (state) => state.UI.vistaUnidadesAdmin
  );

  return (
    <>
      <div className="row">
        <div className="col-2">
          <SideBarAdmin />
        </div>

        <div className="col-10">
          {vistaUnidadesAdmin ? (
            <ConsultaTabularUnidades />
          ) : (
            <CrearDepartamento />
          )}
        </div>
      </div>
    </>
  );
};
