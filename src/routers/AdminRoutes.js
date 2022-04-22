import { Routes, Route } from "react-router-dom";

import NavBar from "../components/layout/NavBar";
import { DepartamentosScreen } from "../components/admin/departamentos/DepartamentosScreen";
import { UnidadesScreen } from "../components/admin/unidades/UnidadesScreen";
// import { LazosScreen } from "../components/admin/lazos/LazosScreen";
import { TiposInspeccionScreen } from "../components/admin/tiposInspeccion/TiposInspeccionScreen";
// import { MaterialesScreen } from "../components/admin/materiales/MaterialesScreen";
import { TiposCMLSScreen } from "../components/admin/tiposCMLS/TiposCMLSScreen";
// import { AccesosScreen } from "../components/admin/accesos/AccesosScreen";

export const AdminRoutes = () => {
  return (
    <>
      <NavBar />
      {/* Pendiente Material */}
      <div className="container">
        <Routes>
          <Route path="" element={<DepartamentosScreen />} />
          <Route path="departamentos" element={<DepartamentosScreen />} />
          <Route path="unidades" element={<UnidadesScreen />} />
          {/* <Route path="lazos" element={<LazosScreen />} /> */}
          <Route path="tiposInspeccion" element={<TiposInspeccionScreen />} />
          {/* <Route path="materiales" element={<MaterialesScreen />} /> */}
          <Route path="tiposCMLS" element={<TiposCMLSScreen />} />
          {/* <Route path="accesos" element={<AccesosScreen />} /> */}

          <Route path="*" element={<div>Error 404</div>} />
        </Routes>
      </div>
    </>
  );
};
