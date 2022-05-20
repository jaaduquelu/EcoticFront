import { types } from "../types";

const initialState = {
  departamentos: [],
  unidades: [],
  lazos: [],
  tiposInspeccion: [],
  materiales: [],
  tiposCML: [],
  accesos: [],
  roles: [],
  usuarios: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.cargarDepartamentos:
      return {
        ...state,
        departamentos: [...action.payload],
      };

    case types.cargarUnidades:
      return {
        ...state,
        unidades: [...action.payload],
      };

    case types.cargarLazos:
      return {
        ...state,
        lazos: [...action.payload],
      };

    case types.cargarTiposInspeccion:
      return {
        ...state,
        tiposInspeccion: [...action.payload],
      };

    case types.cargarMateriales:
      return {
        ...state,
        materiales: [...action.payload],
      };

    case types.cargarTiposCML:
      return {
        ...state,
        tiposCML: [...action.payload],
      };

    case types.cargarRoles:
      return {
        ...state,
        roles: [...action.payload],
      };

    case types.cargarUsuarios:
      return {
        ...state,
        usuarios: [...action.payload],
      };

    default:
      return state;
  }
};
