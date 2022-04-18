import React from "react";
import { NavLink } from "react-router-dom";

const SideBarAdmin = () => {
  return (
    <aside className="bg-light siderbar-izq position-fixed h-100 d-flex flex-column align-items-stretch col-2 ">
      <ul className="navbar-nav px-2">
        <li className="nav-item my-1">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link my-2 p-3"
            exact
            to="/admin/departamentos"
          >
            Departamentos
          </NavLink>
        </li>
        <li className="nav-item my-1">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link my-2  p-3"
            exact
            to="/admin/unidades"
          >
            Unidades
          </NavLink>
        </li>
        <li className="nav-item my-1">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link my-2  p-3"
            exact
            to="/admin/lazos"
          >
            Lazos
          </NavLink>
        </li>
        <li className="nav-item my-1">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link my-2  p-3"
            exact
            to="/admin/tiposInspeccion"
          >
            Tipos de Inspección
          </NavLink>
        </li>
        <li className="nav-item my-1">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link my-2  p-3"
            exact
            to="/admin/materiales"
          >
            Materiales
          </NavLink>
        </li>
        <li className="nav-item my-1">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link my-2  p-3"
            exact
            to="/admin/materiales"
          >
            Tipos de CML
          </NavLink>
        </li>
        <li className="nav-item my-1">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link my-2  p-3"
            exact
            to="/admin/accesos"
          >
            Accesos
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBarAdmin;
