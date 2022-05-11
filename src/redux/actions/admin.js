import Swal from "sweetalert2";

import { types } from "../types";

const url = process.env.REACT_APP_BACKEND_URL;
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

const cargarDepartamentos = (datos) => ({
  type: types.cargarDepartamentos,
  payload: datos,
});

export const asyncCargarDepartamentos = () => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apiKeyToken: "",
      },
    };

    try {
      const body = await fetch(`${url}/api/Department`, requestOptions).then(
        (response) => response.json()
      );
      dispatch(cargarDepartamentos(body));
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

// *************** UNIDADES ******************* //

const cargarUnidades = (datos) => ({
  type: types.cargarUnidades,
  payload: datos,
});

export const asyncCargarUnidades = () => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apiKeyToken: "",
      },
    };

    try {
      const body = await fetch(`${url}/api/Unit`, requestOptions).then(
        (response) => response.json()
      );
      dispatch(cargarUnidades(body));
    } catch (error) {
      console.log(error);
    }
  };
};

// *************** UNIDADES ******************* //

const cargarLazos = (datos) => ({
  type: types.cargarLazos,
  payload: datos,
});

export const asyncCargarLazos = () => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apiKeyToken: "",
      },
    };

    try {
      const body = await fetch(`${url}/api/CorrosionLoop`, requestOptions).then(
        (response) => response.json()
      );
      dispatch(cargarLazos(body));
    } catch (error) {
      console.log(error);
    }
  };
};

// *************** TIPOS DE INSPECCIÓN ******************* //

const cargarTiposInspeccion = (datos) => ({
  type: types.cargarTiposInspeccion,
  payload: datos,
});

export const asyncCargarTiposInspeccion = () => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apiKeyToken: "",
      },
    };

    try {
      const body = await fetch(`${url}/api/CorrosionLoop`, requestOptions).then(
        (response) => response.json()
      );
      dispatch(cargarTiposInspeccion(body));
    } catch (error) {
      console.log(error);
    }
  };
};

// *************** TIPOS DE INSPECCIÓN ******************* //

const cargarMateriales = (datos) => ({
  type: types.cargarMateriales,
  payload: datos,
});

export const asyncCargarMateriales = () => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apiKeyToken: "",
      },
    };

    try {
      const body = await fetch(`${url}/api/Material`, requestOptions).then(
        (response) => response.json()
      );
      dispatch(cargarMateriales(body));
    } catch (error) {
      console.log(error);
    }
  };
};
