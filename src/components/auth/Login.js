import { useIsAuthenticated } from "@azure/msal-react";
import { Grid, Box, Typography, Card } from "@mui/material/";

import styles from "../../styles/Home.module.css";
import Logo from "../../images/ecopetrol.svg";
import ImagenSecurity from "../../images/img_security.svg";
import ButtonLogin from "./ButtonLogin";

import { projectInfo } from "../../helpers/constantes";

const Home = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Grid direction="column" alignItems="center" justify="center" container>
      <img src={Logo} alt="Aro Ecopetrol" width={300} height={200} />
      <Box sx={{ mt: -6 }} />
      <Typography
        fontSize="3.3rem"
        sx={{ fontWeight: "bold" }}
        className={styles.title}
      >
        {" "}
        Bienvenido
      </Typography>
      <Typography
        mt={-1.5}
        color="primary"
        fontSize="1.5rem"
        sx={{ fontWeight: "bold" }}
      >
        Portal de ICP
      </Typography>
      {isAuthenticated ? (
        <img src={ImagenSecurity} alt="Imagen" width={400} height={250} />
      ) : undefined}
      <Box sx={{ mt: 3 }} />
      {isAuthenticated ? undefined : (
        <Grid direction="column" alignItems="center" justify="center" container>
          <Card sx={{ m: 2 }}>
            <Grid
              direction="column"
              alignItems="center"
              justify="center"
              container
            >
              <Box m={5}>
                <Box ml={12}>
                  <Card variant="outlined" sx={{ width: 60 }}>
                    {" "}
                    <ButtonLogin />{" "}
                  </Card>
                </Box>
                <Typography mt={2} color="primary" sx={{ fontWeight: "bold" }}>
                  Dar Click a la huella para Ingresar
                </Typography>
              </Box>
            </Grid>
          </Card>
        </Grid>
      )}

      <span style={{ fontSize: 10 }}>
        <Typography align="center">
          Copyright &copy; {projectInfo.versionYear} - {projectInfo.name}{" "}
          {projectInfo.version}&nbsp; Desarrollado para {projectInfo.developTo}
          <br />
        </Typography>
        <Typography align="center">
          <b>{projectInfo.recommendedBrowsers}</b>
        </Typography>
        <Typography align="justify" sx={{ width: "870px" }}>
          {projectInfo.information}
        </Typography>
      </span>
    </Grid>
  );
};

export default Home;
