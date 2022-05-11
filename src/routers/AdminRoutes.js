import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Button } from "@mui/material/";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

// LAYOUT
import SideBarAdmin from "../components/admin/SideBarAdmin";
import { FiltroJerarquia } from "../components/layout/FiltroJerarquia";
import ResponsiveAppBar from "../components/layout/NavBar2";

// Paginas
import { DepartamentosScreen } from "../components/admin/departamentos/DepartamentosScreen";
import { VerDepartamento } from "../components/admin/departamentos/VerDepartamento";
import { UnidadesScreen } from "../components/admin/unidades/UnidadesScreen";
import { VerUnidad } from "../components/admin/unidades/VerUnidad";
import { LazosScreen } from "../components/admin/lazos/LazosScreen";
import { VerLazo } from "../components/admin/lazos/VerLazo";
import { TiposInspeccionScreen } from "../components/admin/tiposInspeccion/TiposInspeccionScreen";
import { MaterialesScreen } from "../components/admin/materiales/MaterialesScreen";
import { TiposCMLSScreen } from "../components/admin/tiposCMLS/TiposCMLSScreen";
import { VerTipoInspeccion } from "../components/admin/tiposInspeccion/VerTipoInspeccion";
import { VerMaterial } from "../components/admin/materiales/VerMaterial";
import { AccesosScreen } from "../components/admin/accesos/AccesosScreen";

//Consumo de las APIs de Admin
import {
  asyncCargarDepartamentos,
  asyncCargarUnidades,
  asyncCargarLazos,
  asyncCargarTiposInspeccion,
  asyncCargarMateriales,
} from "../redux/actions/admin";

export const AdminRoutes = () => {
  const drawerWidth = 300;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCargarDepartamentos());
    dispatch(asyncCargarUnidades());
    dispatch(asyncCargarLazos());
    dispatch(asyncCargarTiposInspeccion());
    dispatch(asyncCargarMateriales());
  }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <ResponsiveAppBar />
        {/* <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Ecopetrol
            </Typography>
          </Toolbar>
        </AppBar> */}
        <SideBarAdmin drawerWidth={drawerWidth} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 2,
            px: 3,
            height: "100vh",
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="" element={<DepartamentosScreen />} />

            <Route path="departamentos" element={<DepartamentosScreen />} />
            <Route
              path="departamentos/:idDepartamento"
              element={<VerDepartamento />}
            />
            <Route path="unidades" element={<UnidadesScreen />} />
            <Route path="unidades/:idUnidad" element={<VerUnidad />} />

            <Route path="lazos" element={<LazosScreen />} />
            <Route path="lazos/:idLazo" element={<VerLazo />} />

            <Route path="tiposInspeccion" element={<TiposInspeccionScreen />} />
            <Route
              path="tiposInspeccion/:idTipoInspeccion"
              element={<VerTipoInspeccion />}
            />

            <Route path="materiales" element={<MaterialesScreen />} />
            <Route path="materiales/:idMaterial" element={<VerMaterial />} />

            <Route path="tiposCMLS" element={<TiposCMLSScreen />} />

            <Route path="accesos" element={<AccesosScreen />} />

            <Route path="*" element={<div>Error 404</div>} />
          </Routes>
        </Box>
      </Box>
    </>
  );
};
