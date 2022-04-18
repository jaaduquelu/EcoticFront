import Swal from "sweetalert2";

import { types } from "../types";

const url = "http://10.10.54.220:4000";
// const url = 'http://localhost:4000';

const cargarJerarquia = (jerarquia) => ({
  type: types.cargarJerarquia,
  payload: jerarquia,
});

export const asyncCargarJerarquia = () => {
  return async (dispatch) => {
    const token = "uiij";

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apiKeyToken: token,
      },
    };

    try {
      const respuesta = await fetch(`${url}/api/jerarquia/`, requestOptions);
      const body = await respuesta.json();
      dispatch(cargarJerarquia(body.jerarquia));
    } catch (error) {
      console.log(error);
    }
  };
};

// *************** DEPARTAMENTOS ******************* //

const cargarDepartamentos = (ciclos) => ({
  type: types.cargarCiclosVida,
  payload: ciclos,
});

export const asyncCargarDepartamentos = (token) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apiKeyToken: token,
      },
    };

    try {
      const respuesta = await fetch(
        `${url}/api/jerarquia/ciclosvida`,
        requestOptions
      );
      const body = await respuesta.json();

      dispatch(cargarDepartamentos(body.ciclos));
    } catch (error) {
      console.log(error);
    }
  };
};

export const asyncCrearDepartamento = (cliente, token) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(cliente),
    };

    try {
      const body = await fetch(`${url}/api/clientes/`, requestOptions).then(
        (response) => response.json()
      );

      if (body.ok) {
        Swal.fire("Cliente creado exitosamente", "", "success");
        dispatch(cargarDepartamentos(token));
      } else {
        Swal.fire("Se presento un error creando el Cliente", "", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
