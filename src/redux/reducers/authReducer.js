import { types } from "../types";

const initialState = {
  idUsuario: "",
  nombre: "",
  email: "",
  rol: "",
  token: "",
  filtroDepartamento: "",
  filtroUnidad: "",
  filtroLazo: "",
  autenticado: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.renovarToken:
      return {
        ...state,
        token: action.payload,
        autenticado: true,
      };

    case types.cerrarSesion:
      return {
        ...initialState,
      };

    case types.iniciarSesion:
      return {
        ...state,
        idUsuario: action.payload.id,
        nombre: action.payload.name,
        email: action.payload.email,
        rol: action.payload.roleName,
        autenticado: true,
      };

    case types.iniciarSesion:
      return {
        ...state,
        idUsuario: action.payload.usuario.idUsuario,
        nombres: action.payload.usuario.nombres,
        apellidos: action.payload.usuario.apellidos,
        idJefe: action.payload.usuario.idJefe,
        cargo: action.payload.usuario.cargo,
        perfil: action.payload.usuario.perfil,
        token: action.payload.nuevoToken,
        autenticado: true,
        validando: false,
      };

    default:
      return state;
  }
};
