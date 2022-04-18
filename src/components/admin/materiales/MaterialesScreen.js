import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SideBarAdmin from "../SideBarAdmin";
import ConsultaTabularMateriales from "./ConsultaTabularMateriales";
import CrearMaterial from "./CrearMaterial";

import { asyncCargarJerarquia } from "../../../redux/actions/admin";

export const MaterialesScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCargarJerarquia());
  }, []);

  const vistaMaterialesAdmin = useSelector(
    (state) => state.UI.vistaMaterialesAdmin
  );

  return (
    <>
      <div className="row">
        <div className="col-2">
          <SideBarAdmin />
        </div>

        <div className="col-10">
          {vistaMaterialesAdmin ? (
            <ConsultaTabularMateriales />
          ) : (
            <CrearMaterial />
          )}
        </div>
      </div>
    </>
  );
};
