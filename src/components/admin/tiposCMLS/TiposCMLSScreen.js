import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SideBarAdmin from "../SideBarAdmin";
import ConsultaTabularTiposCMLS from "./ConsultaTabularTiposCMLS";
import CrearTipoCML from "./CrearTipoCML";

import { asyncCargarJerarquia } from "../../../redux/actions/admin";

export const TiposCMLSScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCargarJerarquia());
  }, []);

  const vistaTiposCMLSAdmin = useSelector(
    (state) => state.UI.vistaTiposCMLSAdmin
  );

  return (
    <>
      <div className="row">
        <div className="col-2">
          <SideBarAdmin />
        </div>

        <div className="col-10">
          {vistaTiposCMLSAdmin ? (
            <ConsultaTabularTiposCMLS />
          ) : (
            <CrearTipoCML />
          )}
        </div>
      </div>
    </>
  );
};
