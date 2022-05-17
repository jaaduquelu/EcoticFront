import { types } from "../types";

const initialState = {
  idUsuario: "",
  nombres: "",
  apellidos: "",
  idJefe: "",
  cargo: "",
  rol: "",
  token: "",
  autenticado: false,
  validando: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.renovarToken:
      return {
        ...state,
        token: action.payload,
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

    case types.cerrarSesion:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
