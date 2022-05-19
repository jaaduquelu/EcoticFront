import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

// LAYOUT
import SideBarAdmin from "../components/admin/SideBarAdmin";
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
import { TiposCMLScreen } from "../components/admin/tiposCML/TiposCMLScreen";
import { VerTipoInspeccion } from "../components/admin/tiposInspeccion/VerTipoInspeccion";
import { VerMaterial } from "../components/admin/materiales/VerMaterial";
import { AccesosScreen } from "../components/admin/accesos/AccesosScreen";

//Consumo de las APIs de Admin
import { asyncCargarDatosAdmin } from "../redux/actions/admin";
import { VerTipoCML } from "../components/admin/tiposCML/verTipoCML";

export const AdminRoutes = () => {
  const drawerWidth = 300;

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  console.log("redux:", token);
  const token2 =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJhcGk6Ly9mNzNhYTdmMy01MmE4LTQyNjAtOGM0NC1lZWEwMjQ1OWJmNjMiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9hNDMwNTk4Ny1jZjc4LTRmOTMtOWQ2NC1iZjE4YWY2NTM5N2IvIiwiaWF0IjoxNjUyOTAzNDIwLCJuYmYiOjE2NTI5MDM0MjAsImV4cCI6MTY1MjkwODkxOCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQUhMWkV1cVRBK1hSa0lmM2Y2UUpQSFRKc1pCdlhXWkMzTUE1NkNpelptSWc1Z3V6Q0JwQmw1UWdBTjZVK2gyT25ZNjBPY3E4R3Z3NHdhT0Q4Slh6NC9PVkRyVlk1Y0FoazVtZUtOTlFYTWFvPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiJmNzNhYTdmMy01MmE4LTQyNjAtOGM0NC1lZWEwMjQ1OWJmNjMiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkR1cXVlIEx1Z28iLCJnaXZlbl9uYW1lIjoiSmF2aWVyIiwiaXBhZGRyIjoiMTg2LjE1OS43LjEzMCIsIm5hbWUiOiJKYXZpZXIgRHVxdWUgTHVnbyAoSW5kcmEgQ29sb21iaWEpIiwib2lkIjoiOWUwOTVhMTYtMWJkMS00N2IzLWI1MzktMzgyYmJhMWQzNjQ4Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTEwNzczNjc3MTctMTYyMzI4NTEyNi0xMDkzNjI1MDY5LTQ1NDEwOCIsInJoIjoiMC5BUW9BaDFrd3BIalBrMC1kWkw4WXIyVTVlX09uT3Zlb1VtQkNqRVR1b0NSWnYyTUtBRUkuIiwic2NwIjoiYWNjZXNzX2FzX3VzZXIiLCJzdWIiOiJlMXo5TGc1MVJfbEFPeUlkVEZNN3pvMTFRRy1zTzZ1OU1RZ1pibC1fbGtBIiwidGlkIjoiYTQzMDU5ODctY2Y3OC00ZjkzLTlkNjQtYmYxOGFmNjUzOTdiIiwidW5pcXVlX25hbWUiOiJqYXZpZXIuZHVxdWVsdUBlY29wZXRyb2wuY29tLmNvIiwidXBuIjoiamF2aWVyLmR1cXVlbHVAZWNvcGV0cm9sLmNvbS5jbyIsInV0aSI6ImhhMHBlMzdJMkVtOTdISzJFVWtOQUEiLCJ2ZXIiOiIxLjAifQ.qklc_Q2TzFbCTtmwr2aai7DdZSO47Y4X44jqp4cJfz75iscBCn4hpaQ4T9GPOSJf7fXdmepGnVZktifg3aC2W3_g19Oo_hCmqjFLzuy30JzOcvYqV1oLIWfJd8n-JO0pksKbHGdNhDg3EvtlBfveUvGIipVvnR5SlRvIdg893bG8XSNfLAmHunDzuYCPFkFVhWcs7cYitIpn9NHKyOlFYu7ZJCzf9nIwOgDiArlHfdjxezGogCCIK_2584uLtYE8M2FXk0nGNx8D5uYmEUqGELsigAWL29KphHJNQJlsko2BV4pLJn62RgqlJ3kfSp4xfDseFBnEcS0THxBlhWoXbA";

  useEffect(() => {
    dispatch(asyncCargarDatosAdmin(token));
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

            <Route path="accesos" element={<AccesosScreen />} />

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

            <Route path="tiposCML" element={<TiposCMLScreen />} />
            <Route path="tiposCML/:idTipoCML" element={<VerTipoCML />} />

            <Route path="*" element={<div>Error 404</div>} />
          </Routes>
        </Box>
      </Box>
    </>
  );
};
