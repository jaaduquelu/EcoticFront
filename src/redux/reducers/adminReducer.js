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
    case types.cargarAdmin:
      return {
        ...state,
        sectores: [...action.payload.sectores],
        lineas_negocio: [...action.payload.lineas_negocio],
        industrias: [...action.payload.industrias],
        uniones_temporales: [...action.payload.uniones_temporales],
        tipos_pmo: [...action.payload.tipos_pmo],
        ciclos_vida: [...action.payload.ciclos_vida],
        tipos_negocio: [...action.payload.tipos_negocio],
        tipos_venta: [...action.payload.tipos_venta],
        estados_proyecto: [...action.payload.estados_proyecto],
      };

    case types.cargarFases:
      return {
        ...state,
        fases: action.payload,
      };

    case types.cargarCiclosVida:
      return {
        ...state,
        ciclos_vida: action.payload,
      };

    default:
      return state;
  }
};
