import React, { useState } from "react";
import { AbacProvider, AllowedTo } from "react-abac";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Modal from "react-modal";

import {
  asyncRenovarToken,
  cerrarSesion,
} from "../../redux/actions/autenticacion";
import StylesModal from "../../helpers/StylesReactModal";

Modal.setAppElement("#root");

const NavBar = () => {
  const dispatch = useDispatch();

  const { idUsuario, nombres, apellidos, perfil, autenticado } = useSelector(
    (state) => state.login
  );

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const user = {
    id: idUsuario,
    roles: [perfil],
  };

  const roles = {
    basico: "Básico",
    estandar: "Estándar",
    avanzado: "Avanzado",
    admin: "Administrador",
  };

  const permissions = {
    PRODUCTIVIDAD: "PRODUCTIVIDAD",
    MISPROYECTOS: "MISPROYECTOS",
    EXPORTES: "EXPORTES",
    FAQS: "FAQS",
    ADMIN: "ADMIN",
  };

  const rules = {
    [roles.basico]: {
      [permissions.PRODUCTIVIDAD]: true,
      [permissions.FAQS]: true,
    },
    [roles.estandar]: {
      [permissions.PRODUCTIVIDAD]: true,
      [permissions.MISPROYECTOS]: true,
      [permissions.FAQS]: true,
    },
    [roles.avanzado]: {
      [permissions.PRODUCTIVIDAD]: true,
      [permissions.MISPROYECTOS]: true,
      [permissions.EXPORTES]: true,
      [permissions.FAQS]: true,
    },
    [roles.admin]: {
      [permissions.PRODUCTIVIDAD]: true,
      [permissions.MISPROYECTOS]: true,
      [permissions.EXPORTES]: true,
      [permissions.ADMIN]: true,
      [permissions.FAQS]: true,
    },
  };

  const finalizaSesion = () => {
    setModalIsOpen(false);
    dispatch(cerrarSesion());
  };

  return (
    <nav className="position-sticky nav-fondo navbar navbar-expand-lg navbar-light w-100 py-0 font-weight-bold">
      <Link className="navbar-brand px-3 col-2" to="/productividad">
        <img
          alt="Logo"
          src="/icons/ComProject.svg"
          className="img-fluid px-1"
          style={{ height: "4rem", width: "15rem" }}
        ></img>
      </Link>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav d-flex justify-content-between w-100 ml-5 px-5">
          <AbacProvider rules={rules} user={user} roles={user.roles}>
            <AllowedTo perform={permissions.PRODUCTIVIDAD}>
              <div>
                <NavLink
                  className="nav-item nav-link"
                  exacts
                  to="/productividad"
                >
                  <img
                    alt="Productividad"
                    src="/iconosNavbar/Modulo_Productividad.svg"
                    className="img-fluid mx-1"
                    style={{ height: "3rem", width: "14rem" }}
                  ></img>
                </NavLink>
              </div>
            </AllowedTo>
          </AbacProvider>

          <AbacProvider rules={rules} user={user} roles={user.roles}>
            <AllowedTo perform={permissions.MISPROYECTOS}>
              <div>
                <NavLink className="nav-item nav-link" exact to="/proyectos">
                  {asyncRenovarToken}
                  <img
                    alt="Proyectos"
                    src="/iconosNavbar/Modulo_MisProyectos.svg"
                    className="img-fluid mx-3"
                    style={{ height: "3rem", width: "15rem" }}
                  ></img>
                </NavLink>
              </div>
            </AllowedTo>
          </AbacProvider>

          <AbacProvider rules={rules} user={user} roles={user.roles}>
            <AllowedTo perform={permissions.EXPORTES}>
              <div>
                <NavLink className="nav-item nav-link" exact to="/exportes">
                  <img
                    alt="Exportes"
                    src="/iconosNavbar/Modulo_Exportes.svg"
                    className="img-fluid mx-2"
                    style={{ height: "3rem", width: "14rem" }}
                  ></img>
                </NavLink>
              </div>
            </AllowedTo>
          </AbacProvider>

          <AbacProvider rules={rules} user={user} roles={user.roles}>
            <AllowedTo perform={permissions.ADMIN}>
              <div>
                <NavLink className="nav-item nav-link" exact to="/admin">
                  <img
                    alt="Administracion"
                    src="/iconosNavbar/Modulo_Admin.svg"
                    className="img-fluid"
                    style={{ height: "3rem", width: "14rem" }}
                  ></img>
                </NavLink>
              </div>
            </AllowedTo>
          </AbacProvider>

          <AbacProvider rules={rules} user={user} roles={user.roles}>
            <AllowedTo perform={permissions.FAQS}>
              <div>
                <NavLink className="nav-item nav-link" exact to="/FAQs">
                  <img
                    alt="FAQs"
                    src="/iconosNavbar/Modulo_FAQs.svg"
                    className="img-fluid lx-2"
                    style={{ height: "3rem", width: "14rem" }}
                  ></img>
                </NavLink>
              </div>
            </AllowedTo>
          </AbacProvider>
        </div>
      </div>

      {autenticado && (
        <div className="d-flex flex-row col-2">
          <NavLink className="col-9 nav-item nav-link mt-1" exact to="/perfil">
            <div className="row">
              <strong className="text-center texto-nombre">
                {nombres} {apellidos}
              </strong>
              <strong className="text-center texto-perfil">{perfil}</strong>
            </div>
          </NavLink>
          <div className="col-3 pt-2 mr-1">
            <img
              alt="C"
              className="btn p-1"
              style={{ height: "3rem", width: "3rem" }}
              src="/iconosComProject/btn_CerrarSesion.svg"
              onClick={() => setModalIsOpen(true)}
            ></img>
          </div>
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={StylesModal}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title texto-comproject">CERRAR SESIÓN</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setModalIsOpen(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body container">
              <div className="row my-2 text-center">
                <label>¿Esta seguro de cerrar sesión?</label>
              </div>

              <div className="d-flex">
                <div className="btn">
                  <img
                    alt="C"
                    className="btn"
                    style={{ height: "3rem", width: "13rem" }}
                    src="/iconosComProject/btn_Cancelar.svg"
                    onClick={() => setModalIsOpen(false)}
                  ></img>
                </div>

                <NavLink className="btn" exact to="/sesionfinalizada">
                  <img
                    alt="C"
                    className="btn"
                    style={{ height: "3rem", width: "13rem" }}
                    src="/iconosComProject/btn_Aceptar.svg"
                    onClick={finalizaSesion}
                  ></img>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </nav>
  );
};

export default NavBar;
