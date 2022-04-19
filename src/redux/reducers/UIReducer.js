import { types } from "../types";

const initialState = {
  loading: false,
  vistaDepartamentosAdmin: true,
  vistaUnidadesAdmin: true,
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

    default:
      return state;
  }
};
