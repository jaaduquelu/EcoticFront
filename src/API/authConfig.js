import { LogLevel } from "@azure/msal-browser";

// Configuración de los objetos al crearse la instancia MSAL
export const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID,
    authority: process.env.REACT_APP_AUTHORITY,
    redirectUri: process.env.REACT_APP_REDIRECT_TO,
    postLogoutRedirectUri: process.env.REACT_APP_REDIRECT_TO,
  },
  cache: {
    cacheLocation: "sessionStorage", // Donde se almacenará el cache
    storeAuthStateInCookie: false, // Se puede en "true" si tienes problemas con IE11 o Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        // eslint-disable-next-line
        switch (level) {
          case LogLevel.Error:
            // console.error('Error: '+message);
            return;
          case LogLevel.Info:
            // console.info('Info: '+message);
            return;
          case LogLevel.Verbose:
            // console.debug('Verbose: '+message);
            return;
          case LogLevel.Warning:
            // console.warn('Mensaje: '+message);
            return;
        }
      },
    },
  },
};

//  Son lo ambitos por los cuales puede conectarse el usuario.
//  Por defecto, MSAL.js agrega ambitos OIDC (openid, profile, email) a cualquier solicitud de inicio de sesión
export const loginRequest = {
  scopes: ["api://" + process.env.REACT_APP_CLIENT_ID + "/access_as_user"],
  extraQueryParameters: { domain_hint: "a4305987-cf78-4f93-9d64-bf18af65397b" },
};

export const graphConfig = {
  graphMeEndpoint: process.env.REACT_APP_GRAPH_ENDPOINT,
};
