import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SideBarAdmin from "../SideBarAdmin";
import ConsultaTabularAccesos from "./ConsultaTabularAccesos";
import CrearAcceso from "./CrearAcceso";

import { asyncCargarJerarquia } from "../../../redux/actions/admin";

export const AccesosScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCargarJerarquia());
  }, []);

  const vistaAccesosAdmin = useSelector((state) => state.UI.vistaAccesosAdmin);

  return (
    <>
      <div className="row">
        <div className="col-2">
          <SideBarAdmin />
        </div>

        <div className="col-10">
          {vistaAccesosAdmin ? <ConsultaTabularAccesos /> : <CrearAcceso />}
        </div>
      </div>
    </>
  );
};
