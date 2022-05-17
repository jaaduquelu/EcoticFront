import { useIsAuthenticated } from "@azure/msal-react";
import { Grid, Box, Typography, Card, Button } from "@mui/material/";
import { Link } from "react-router-dom";

import styles from "../../styles/Home.module.css";
import Logo from "../../images/ecopetrol.svg";
import ImagenSecurity from "../../images/img_security.svg";
import ButtonLogin from "./ButtonLogin";

import { projectInfo } from "../../helpers/constantes";

const Home = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Grid
      direction="column"
      alignItems="center"
      justify="center"
      container
      mt={5}
    >
      <img src={Logo} alt="Aro Ecopetrol" width={400} height={200} />
      <Box sx={{ mt: 4 }} />

      <Typography
        mt={6}
        color="primary"
        fontSize="1.5rem"
        sx={{ fontWeight: "bold" }}
      >
        ECOTIC
      </Typography>
      {isAuthenticated ? (
        <img src={ImagenSecurity} alt="Imagen" width={400} height={250} />
      ) : undefined}
      <Box />
      {isAuthenticated ? undefined : (
        <Grid direction="column" alignItems="center" justify="center" container>
          <Card sx={{ m: 2, mt: 5 }}>
            <Grid
              direction="column"
              alignItems="center"
              justify="center"
              container
            >
              <Box m={5}>
                <Box ml={10}>
                  <Card variant="outlined" sx={{ width: 60 }}>
                    <ButtonLogin />
                  </Card>
                </Box>
                <Typography mt={2} color="primary" sx={{ fontWeight: "bold" }}>
                  Click a la huella para Ingresar
                </Typography>
              </Box>
            </Grid>
          </Card>
        </Grid>
      )}

      <span style={{ fontSize: 10 }}>
        <Typography align="center">
          <b>{projectInfo.recommendedBrowsers}</b>
        </Typography>
        <Typography align="center">
          Copyright &copy; {projectInfo.versionYear} - {projectInfo.name}{" "}
          {projectInfo.version}&nbsp; Desarrollado para {projectInfo.developTo}
          <br />
        </Typography>
        <Typography align="center" sx={{ mx: 7, mt: 2 }}>
          {projectInfo.information}
        </Typography>
      </span>
    </Grid>
  );
};

export default Home;
