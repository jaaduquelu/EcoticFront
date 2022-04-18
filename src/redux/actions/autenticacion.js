import { types } from "../types";

const url = process.env.REACT_APP_URL;

export const cerrarSesion = () => ({
    type: types.cerrarSesion,
    payload: ''
})


export const iniciaValidacion = () => ({
    type: types.iniciaValidacion,
    payload: ''
})


const finalizaValidacion = () => ({
    type: types.finalizaValidacion,
    payload: ''
})

const iniciarSesion = (datos) => ({
    type: types.iniciarSesion,
    payload: datos
})

export const asyncIniciarSesion = (token) => {
    return async (dispatch) => {

        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + token,
                Accept: "application/json;odata=verbose",
                'Content-Type': 'application/json',
            },
        };

        try {
            const body = await fetch(`${url}/api/autenticacion/iniciarsesion`, requestOptions)
                .then(response => response.json());

            if (body.ok) {
                dispatch(iniciarSesion(body.datos));
                dispatch(finalizaValidacion());
            }

        } catch (error) {
            console.log(error);
        }
    }
}

const renovarToken = (token) => ({
    type: types.renovarToken,
    payload: token
})

export const asyncRenovarToken = (token) => {
    return async (dispatch) => {

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-Token': token
            },
        };

        try {
            const body = await fetch(`${url}/api/autenticacion/renovarToken`, requestOptions)
                .then(response => response.json());

            if (body.ok) {
                dispatch(renovarToken(body.token));
            }

        } catch (error) {
            console.log(error);
        }
    }
}



