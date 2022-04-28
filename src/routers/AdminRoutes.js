import { Routes, Route } from "react-router-dom";

import NavBar from "../components/layout/NavBar";
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

// import { AccesosScreen } from "../components/admin/accesos/AccesosScreen";

export const AdminRoutes = () => {
  return (
    <>
      {/* <NavBar /> */}
      {/* Pendiente Material */}
      <div className="container">
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
          {/* <Route path="accesos" element={<AccesosScreen />} /> */}

          <Route path="*" element={<div>Error 404</div>} />
        </Routes>
      </div>
    </>
  );
};
