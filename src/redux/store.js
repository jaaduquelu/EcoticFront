import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";

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
  login: authReducer,
  UI: UIReducer,
  admin: adminReducer,
});

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ['navigation'], // navigation sin persistencia
  // whitelist: ['navigation'], // Sólo navigation con persistencia
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
