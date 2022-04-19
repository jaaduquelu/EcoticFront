import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import SideBarAdmin from "../SideBarAdmin";
import ConsultaTabularDepartamentos from "./ConsultaTabularDepartamentos";
import CrearDepartamento from "./CrearDepartamento";

import { asyncCargarJerarquia } from "../../../redux/actions/admin";

export const DepartamentosScreen = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(asyncCargarJerarquia());
  // }, []);

  const vistaDepartamentosAdmin = useSelector(
    (state) => state.UI.vistaDepartamentosAdmin
  );

  console.log(vistaDepartamentosAdmin, "estado");

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideBarAdmin />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", py: 1, px: 3 }}
        >
          {!vistaDepartamentosAdmin ? (
            <ConsultaTabularDepartamentos />
          ) : (
            <CrearDepartamento />
          )}
        </Box>
      </Box>
    </>
  );
};

export default DepartamentosScreen;
