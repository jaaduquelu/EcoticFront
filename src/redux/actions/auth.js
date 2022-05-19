import Swal from "sweetalert2";

import { types } from "../types";

const url = process.env.REACT_APP_BACKEND_QAS_URL;

const iniciarSesion = (datos) => ({
  type: types.iniciarSesion,
  payload: datos,
});

export const asyncConsultarDatosUsuario = (token) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "12d775a6fc604fe791251ea9be5ca824",
        Authorization: "Bearer " + token,
      },
    };

    try {
      const response = await fetch(`${url}/api/Auth/`, requestOptions);

      const datos = await response.json();
      if (response.ok) {
        console.log(datos);
        dispatch(iniciarSesion(datos));
      } else {
        console.log(response);
        Swal.fire(
          "Se presento un error consultando los datos del usuario",
          "",
          "error"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const renovarToken = (token) => ({
  type: types.renovarToken,
  payload: token,
});

export const asyncRenovarToken = (token) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-Token": token,
      },
    };

    try {
      const body = await fetch(
        `${url}/api/autenticacion/renovarToken`,
        requestOptions
      ).then((response) => response.json());

      if (body.ok) {
        dispatch(renovarToken(body.token));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
