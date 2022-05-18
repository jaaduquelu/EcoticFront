import Swal from "sweetalert2";

import { types } from "../types";

const url = process.env.REACT_APP_BACKEND_QAS_URL;

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

const cargarDepartamentos = (datos) => ({
  type: types.cargarDepartamentos,
  payload: datos,
});

const cargarUnidades = (datos) => ({
  type: types.cargarUnidades,
  payload: datos,
});

const cargarMateriales = (datos) => ({
  type: types.cargarMateriales,
  payload: datos,
});

const cargarLazos = (datos) => ({
  type: types.cargarLazos,
  payload: datos,
});

const cargarTiposInspeccion = (datos) => ({
  type: types.cargarTiposInspeccion,
  payload: datos,
});

const cargarTiposCML = (datos) => ({
  type: types.cargarTiposCML,
  payload: datos,
});

const token2 =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJhcGk6Ly9mNzNhYTdmMy01MmE4LTQyNjAtOGM0NC1lZWEwMjQ1OWJmNjMiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9hNDMwNTk4Ny1jZjc4LTRmOTMtOWQ2NC1iZjE4YWY2NTM5N2IvIiwiaWF0IjoxNjUyODgzNjEzLCJuYmYiOjE2NTI4ODM2MTMsImV4cCI6MTY1Mjg4OTIwNiwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQUxtQndjek1XZ0xielBrbnFCUjBFbERqbFY0VHFqcEJjem8yTDYwMUR1Um9tY3lmNWJBMVROZ09mM1c1cFJhUEl5WXpDRDlGNUNqNUk3SnBNOGZhNWw4L0FjblJzdzZwUzVhVjdGVFFBRG9vPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiJmNzNhYTdmMy01MmE4LTQyNjAtOGM0NC1lZWEwMjQ1OWJmNjMiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkR1cXVlIEx1Z28iLCJnaXZlbl9uYW1lIjoiSmF2aWVyIiwiaXBhZGRyIjoiMTg2LjE1OS43LjEzMCIsIm5hbWUiOiJKYXZpZXIgRHVxdWUgTHVnbyAoSW5kcmEgQ29sb21iaWEpIiwib2lkIjoiOWUwOTVhMTYtMWJkMS00N2IzLWI1MzktMzgyYmJhMWQzNjQ4Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTEwNzczNjc3MTctMTYyMzI4NTEyNi0xMDkzNjI1MDY5LTQ1NDEwOCIsInJoIjoiMC5BUW9BaDFrd3BIalBrMC1kWkw4WXIyVTVlX09uT3Zlb1VtQkNqRVR1b0NSWnYyTUtBRUkuIiwic2NwIjoiYWNjZXNzX2FzX3VzZXIiLCJzdWIiOiJlMXo5TGc1MVJfbEFPeUlkVEZNN3pvMTFRRy1zTzZ1OU1RZ1pibC1fbGtBIiwidGlkIjoiYTQzMDU5ODctY2Y3OC00ZjkzLTlkNjQtYmYxOGFmNjUzOTdiIiwidW5pcXVlX25hbWUiOiJqYXZpZXIuZHVxdWVsdUBlY29wZXRyb2wuY29tLmNvIiwidXBuIjoiamF2aWVyLmR1cXVlbHVAZWNvcGV0cm9sLmNvbS5jbyIsInV0aSI6Il9pa2NFam5oNzAtQlBBcXdUbHNpQUEiLCJ2ZXIiOiIxLjAifQ.QLaPiVnqBttwTgOgL_r-sJihRH0dih1P20IkDP2Cu8sIoiII1WfeyhVjknA6rYPHlrCywQcXKWlU0HPKHrX4RzO4H3xufTvfq8ueUkZNERYTh17mz0bnwQzZOiZPPpPbmt8eKBBIXuSMA_g128gFu9qDo2bY00ooWs_8NGOcZ_f3ZV_09xdUArT8YZeYN5diKmUaiaBDo7kSqzt--vIO07Cn3G704bXIs_ZASi_dZRaD6Rycz-BfkBaDh61yUo_4cVZ-YGEEPIfLq8v1-QF0gab0jR5mbiYFEZ559OOwJBx34tPNS7BD7pLf1mkUAk7dyxmTD1Rr0DoxK4GOTJbMEw";
export const asyncCargarDatosAdmin = (token) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "12d775a6fc604fe791251ea9be5ca824",
        Authorization: "Bearer " + token2,
      },
    };
    try {
      const responseDepartment = await fetch(
        `${url}/api/Department`,
        requestOptions
      );
      const departamentos = await responseDepartment.json();
      if (responseDepartment.ok) {
        console.log("Departamentos OK");
        dispatch(cargarDepartamentos(departamentos));
      } else {
        Swal.fire(
          "Se presento un error cargando los Departamentos",
          "",
          "error"
        );
      }

      // const responseUnit = await fetch(`${url}/api/Unit`, requestOptions);
      // const unidades = await responseUnit.json();
      // if (responseUnit.ok) {
      //   dispatch(cargarUnidades(unidades));
      //   console.log("Unidades OK");
      //   console.log(unidades);
      // } else {
      //   console.log(responseUnit);
      //   console.log(unidades);
      //   Swal.fire("Se presento un error cargando las Unidades", "", "error");
      // }

      const responseLoop = await fetch(
        `${url}/api/CorrosionLoop`,
        requestOptions
      );
      const lazos = await responseLoop.json();
      if (responseLoop.ok) {
        console.log("Lazos OK");
        dispatch(cargarLazos(lazos));
      } else {
        console.log(responseLoop);
        Swal.fire(
          "Se presento un error cargando los Lazos de Corrosión",
          "",
          "error"
        );
      }

      const responseMaterial = await fetch(
        `${url}/api/Material`,
        requestOptions
      );
      const materiales = await responseMaterial.json();
      if (responseMaterial.ok) {
        console.log("Materiales OK");
        dispatch(cargarMateriales(materiales));
      } else {
        console.log(responseMaterial);
        console.log(materiales);
        Swal.fire("Se presento un error cargando los Materiales", "", "error");
      }

      const responseSurvey = await fetch(
        `${url}/api/SurveyType`,
        requestOptions
      );
      const tiposInspeccion = await responseSurvey.json();
      if (responseSurvey.ok) {
        dispatch(cargarTiposInspeccion(tiposInspeccion));
        console.log("Tipos Inspección OK");
      } else {
        console.log(responseSurvey);
        console.log(tiposInspeccion);
        Swal.fire(
          "Se presento un error cargando los Tipos de Inspección",
          "",
          "error"
        );
      }

      const responseCML = await fetch(`${url}/api/CMLType`, requestOptions);
      const tiposCML = await responseCML.json();
      if (responseCML.ok) {
        dispatch(cargarTiposCML(tiposCML));
        console.log("Tipos CML OK");
      } else {
        console.log(responseCML);
        console.log(tiposCML);
        Swal.fire(
          "Se presento un error cargando los Tipos de CMLS",
          "",
          "error"
        );
      }
    } catch (error) {
      console.log(error.json());
      Swal.fire(
        "Se presento un error cargando los datos de Administración ",
        "",
        "error"
      );
    }
  };
};

export const asyncCrearRegistroAdmin = (datos, token, module) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "12d775a6fc604fe791251ea9be5ca824",
        Authorization: "Bearer " + token,
      },
      requestBody: JSON.stringify(datos),
    };
    try {
      const response = await fetch(
        `${url}/api/` + module + `/`,
        requestOptions
      );

      if (response.ok && response.status == 201) {
        // dispatch(asyncCargarDatosAdmin(token));
        Swal.fire("Se creo exitosamente el registro", "", "success");
      } else {
        Swal.fire("Se presento un error creando el registro 2 ", "", "error");
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Se presento un error creando el registro", "", "error");
    }
  };
};
