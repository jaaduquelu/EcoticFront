import axios from "axios";
import { PublicClientApplication } from "@azure/msal-browser";
import Swal from "sweetalert2";

import { msalConfig } from "../API/authConfig";

import store from "../redux/store";

// Esta debe ser la misma instancia que se pasa a MsalProvider
const createdMsalInstance = new PublicClientApplication(msalConfig);
const loadingStore = "ACTION-LOADING";

const acquireAccessToken = async (msalInstance) => {
  const activeAccount = msalInstance.getActiveAccount(); // Esto sólo devolverá un valor no nulo si tiene una lógica en algún otro lugar que llame a la API setActiveAccount
  const accounts = msalInstance.getAllAccounts();

  if (!activeAccount && accounts.length === 0) {
    return "No auth-token";
  }
  const request = {
    scopes: ["api://" + process.env.REACT_APP_CLIENT_ID + "/access_as_user"],
    extraQueryParameters: {
      domain_hint: "a4305987-cf78-4f93-9d64-bf18af65397b",
    },
    account: activeAccount || accounts[0],
  };

  const authResult = await msalInstance.acquireTokenSilent(request);
  return authResult.accessToken;
};

const axiosAro = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    Accept: "*/*",
    "Ocp-Apim-Subscription-Key": process.env.REACT_APP_KEY,
  },
});

axiosAro.interceptors.request.use(
  async (config) => {
    store.dispatch({ type: loadingStore, payload: true });
    const token = await acquireAccessToken(createdMsalInstance);
    const { headers } = config;
    headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosAro.interceptors.response.use(
  async (response) => {
    store.dispatch({ type: loadingStore, payload: false });
    return response;
  },
  async (error) => {
    let message =
      error.response?.data?.message ??
      "Error en el Servidor.|Por favor contáctese con soporte técnico.";
    // console.log(error.response, message)
    if (error.response?.data?.type === "application/json") {
      message = "El archivo no pudo ser encontrado.";
    }
    Swal.fire(
      message
        ? message
        : "No se pudo realizar la operación.|Inténtalo más tarde.",
      "",
      "error"
    );

    store.dispatch({ type: loadingStore, payload: false });
    Promise.reject(error);
    throw new Error("Ocurrió un error al realizar la operación.");
  }
);

export default axiosAro;
