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

// *************** DEPARTAMENTOS ******************* //

const cargarDepartamentos = (datos) => ({
  type: types.cargarDepartamentos,
  payload: datos,
});

export const asyncCargarDepartamentos = (token) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "12d775a6fc604fe791251ea9be5ca824",
        Authorization:
          "Bearer " +
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJhcGk6Ly9mNzNhYTdmMy01MmE4LTQyNjAtOGM0NC1lZWEwMjQ1OWJmNjMiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9hNDMwNTk4Ny1jZjc4LTRmOTMtOWQ2NC1iZjE4YWY2NTM5N2IvIiwiaWF0IjoxNjUyNzU0ODI1LCJuYmYiOjE2NTI3NTQ4MjUsImV4cCI6MTY1Mjc1OTg2NSwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQXVydjJDaGlmK2ZwK3BiQnprSEt1Z3ZmZDNKS0FzUnhYNGZQdDFSNEtuWnV5MXF4NW0xUy9NRUVQU0owdzVvU3oraDhrY0xHeEFLTGd0MHd5RE8xZHFOaUQyLzF2cFZVenJzYnJzcTFxcHRzPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiJmNzNhYTdmMy01MmE4LTQyNjAtOGM0NC1lZWEwMjQ1OWJmNjMiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkR1cXVlIEx1Z28iLCJnaXZlbl9uYW1lIjoiSmF2aWVyIiwiaXBhZGRyIjoiMTg2LjE1OS43LjEzMCIsIm5hbWUiOiJKYXZpZXIgRHVxdWUgTHVnbyAoSW5kcmEgQ29sb21iaWEpIiwib2lkIjoiOWUwOTVhMTYtMWJkMS00N2IzLWI1MzktMzgyYmJhMWQzNjQ4Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTEwNzczNjc3MTctMTYyMzI4NTEyNi0xMDkzNjI1MDY5LTQ1NDEwOCIsInJoIjoiMC5BUW9BaDFrd3BIalBrMC1kWkw4WXIyVTVlX09uT3Zlb1VtQkNqRVR1b0NSWnYyTUtBRUkuIiwic2NwIjoiYWNjZXNzX2FzX3VzZXIiLCJzdWIiOiJlMXo5TGc1MVJfbEFPeUlkVEZNN3pvMTFRRy1zTzZ1OU1RZ1pibC1fbGtBIiwidGlkIjoiYTQzMDU5ODctY2Y3OC00ZjkzLTlkNjQtYmYxOGFmNjUzOTdiIiwidW5pcXVlX25hbWUiOiJqYXZpZXIuZHVxdWVsdUBlY29wZXRyb2wuY29tLmNvIiwidXBuIjoiamF2aWVyLmR1cXVlbHVAZWNvcGV0cm9sLmNvbS5jbyIsInV0aSI6IjZsM3BQLVA3WGthVE1mVS1qYzJKQUEiLCJ2ZXIiOiIxLjAifQ.Ru7PvYiFB0bTWEbbOo9S8lFMUWgAA6wHdb_r2LTHedd3kE126qaUxggOlJ3Q2tWKCkhKoVg2G-GRMJPjsUFrLc2lFWpao04ZOs7Du0PsyvTYcleIKhE6pwYbyvq4S1ofr0bEX8Exo6I5_KFVmpTNOkOEVbuIxs2Y0suGcmorFOfn__gHQX99Ah1OCheRk9cQu65VpuMl-1MP3dVSjxOGqSIxs7pam7MNe35TwaYEaiSDKIq0BxAIDzPoJ-jglgk_kwyQD3e7euHhaBtx216dkhj7xDH_4g3IXtjWXRNGgNAB80EXS28bZN1aml2vV5KOmcSoeCNOXonoTX2xHMspGA",
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
