import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SideBarAdmin from "../SideBarAdmin";
import ConsultaTabularLazos from "./ConsultaTabularLazos";
import CrearLazo from "./CrearLazo";

import { asyncCargarJerarquia } from "../../../redux/actions/admin";

export const LazosScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCargarJerarquia());
  }, []);

  const vistaLazosAdmin = useSelector((state) => state.UI.vistaLazosAdmin);

  return (
    <>
      <div className="row">
        <div className="col-2">
          <SideBarAdmin />
        </div>

        <div className="col-10">
          {vistaLazosAdmin ? <ConsultaTabularLazos /> : <CrearLazo />}
        </div>
      </div>
    </>
  );
};
