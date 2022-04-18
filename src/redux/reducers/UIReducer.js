import { types } from "../types";

const initialState = {
  loading: false,
  vistaDepartamentosAdmin: true,
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

    case types.cambiarVistaDepartamentosAdmin:
      return {
        ...state,
        vistaDepartamentosAdmin: !state.vistaDepartamentosAdmin,
      };

    case types.cambiarVistaUsuariosAdmin:
      return {
        ...state,
        vistaUsuariosAdmin: !state.vistaUsuariosAdmin,
      };

    case types.cambiarVistaClientesAdmin:
      return {
        ...state,
        vistaClientesAdmin: !state.vistaClientesAdmin,
      };

    case types.cambiarVistaAgendamientoAdmin:
      return {
        ...state,
        vistaAgendamientoAdmin: !state.vistaAgendamientoAdmin,
      };

    default:
      return state;
  }
};
