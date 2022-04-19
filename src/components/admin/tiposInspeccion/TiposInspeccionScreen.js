import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SideBarAdmin from "../SideBarAdmin";
import ConsultaTabularTiposInspeciones from "./ConsultaTabularTiposInspeciones";
import CrearTipoInspecion from "./CrearTipoInspecion";

import { asyncCargarJerarquia } from "../../../redux/actions/admin";

export const TiposInspeccionScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCargarJerarquia());
  }, []);

  const vistaTiposInspecionesAdmin = useSelector(
    (state) => state.UI.vistaTiposInspecionesAdmin
  );

  return (
    <>
      <div className="row">
        <div className="col-2">
          <SideBarAdmin />
        </div>

        <div className="col-10">
          {vistaTiposInspecionesAdmin ? (
            <ConsultaTabularTiposInspeciones />
          ) : (
            <CrearTipoInspecion />
          )}
        </div>
      </div>
    </>
  );
};
