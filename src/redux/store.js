import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//Reducers
import { authReducer } from "./reducers/authReducer";
import { UIReducer } from "./reducers/UIReducer";
import { adminReducer } from "./reducers/adminReducer";

// Permite usar el Redux_DevTools
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  UI: UIReducer,
  admin: adminReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
