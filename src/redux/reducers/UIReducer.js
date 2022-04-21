import { types } from "../types";

const initialState = {
  loading: false,
  vistaDepartamentosAdmin: true,
  vistaConsultaTabularAdmin: true,
};

export const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.startLoading:
      return {
        ...state,
        loading: true,
      };

    case types.finishLoading:
      return {
        ...state,
        loading: false,
      };

    case types.cambiarVistaConsultaTabularAdmin:
      return {
        ...state,
        vistaConsultaTabularAdmin: !state.vistaConsultaTabularAdmin,
      };

    case types.vistaConsultaTabularAdmin:
      return {
        ...state,
        vistaConsultaTabularAdmin: true,
      };

    default:
      return state;
  }
};
