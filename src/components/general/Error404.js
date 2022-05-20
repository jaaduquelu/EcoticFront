import { Grid, Box } from "@material-ui/core";
import BotonRegresar from "./BotonRegresar";

// Azure
import { useIsAuthenticated } from "@azure/msal-react";

const Error404 = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <>
      {isAuthenticated ? (
        <Grid>
          <br />
          <BotonRegresar
            titulo="Upss un error"
            subtitulo="Presione aquí para regresar a Inicio"
            ruta="/"
          />
          <Box m={4}>
            <h1 style={{ color: "#ff5252" }}>Error 404</h1>
            <h5>Página no encontrada</h5>
          </Box>
        </Grid>
      ) : undefined}
    </>
  );
};

export default Error404;
