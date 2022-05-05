import { types } from "../types";

const initialState = {
  departamentos: [],
  unidades: [],
  lazos: [],
  tiposInspeccion: [],
  materiales: [],
  tiposCML: [],
  accesos: [],
  otros: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.cargarDepartamentos:
      return {
        ...state,
        departamentos: [...action.payload],
      };

    default:
      return state;
  }
};
