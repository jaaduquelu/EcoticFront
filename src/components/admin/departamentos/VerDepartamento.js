import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { Grid, Box, FormControl, TextField, Button } from "@mui/material/";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Autorenew } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";

import { asyncActualizarRegistroAdmin } from "../../../redux/actions/admin";

export const VerDepartamento = () => {
  const dispatch = useDispatch();
  const { idDepartamento } = useParams();

  let navigate = useNavigate();

  const departamento = useSelector((state) =>
    state.admin.departamentos.find((i) => i.id == idDepartamento)
  );

  const idUsuario = useSelector((state) => state.auth.idUsuario);
  const token = useSelector((state) => state.auth.token);

  const token2 =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJhcGk6Ly9mNzNhYTdmMy01MmE4LTQyNjAtOGM0NC1lZWEwMjQ1OWJmNjMiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9hNDMwNTk4Ny1jZjc4LTRmOTMtOWQ2NC1iZjE4YWY2NTM5N2IvIiwiaWF0IjoxNjUyOTA5MjA5LCJuYmYiOjE2NTI5MDkyMDksImV4cCI6MTY1MjkxNDg3NiwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQTVKOVZIM0xSM0xLUStBNkZ6OTBRcnVpRkhnaGxKRnFhMHQwSzROQ2Y2K2FTTHBQU2J4WFh4WUJsTGdYZVpZNWpnd3N6ajd1OC94akJzdkhpTFc3MDFZY0Jsb2FpU3BFbUNrU3lGZFJ6RmdnPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiJmNzNhYTdmMy01MmE4LTQyNjAtOGM0NC1lZWEwMjQ1OWJmNjMiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkR1cXVlIEx1Z28iLCJnaXZlbl9uYW1lIjoiSmF2aWVyIiwiaXBhZGRyIjoiMTg2LjE1OS43LjEzMCIsIm5hbWUiOiJKYXZpZXIgRHVxdWUgTHVnbyAoSW5kcmEgQ29sb21iaWEpIiwib2lkIjoiOWUwOTVhMTYtMWJkMS00N2IzLWI1MzktMzgyYmJhMWQzNjQ4Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTEwNzczNjc3MTctMTYyMzI4NTEyNi0xMDkzNjI1MDY5LTQ1NDEwOCIsInJoIjoiMC5BUW9BaDFrd3BIalBrMC1kWkw4WXIyVTVlX09uT3Zlb1VtQkNqRVR1b0NSWnYyTUtBRUkuIiwic2NwIjoiYWNjZXNzX2FzX3VzZXIiLCJzdWIiOiJlMXo5TGc1MVJfbEFPeUlkVEZNN3pvMTFRRy1zTzZ1OU1RZ1pibC1fbGtBIiwidGlkIjoiYTQzMDU5ODctY2Y3OC00ZjkzLTlkNjQtYmYxOGFmNjUzOTdiIiwidW5pcXVlX25hbWUiOiJqYXZpZXIuZHVxdWVsdUBlY29wZXRyb2wuY29tLmNvIiwidXBuIjoiamF2aWVyLmR1cXVlbHVAZWNvcGV0cm9sLmNvbS5jbyIsInV0aSI6InZUS0x3X2EzODBLdkNJWTdzazBlQUEiLCJ2ZXIiOiIxLjAifQ.ces8kpYHJyXSwghTcswLUXzgMM9ZpBJ__PdZoUQ0cJUR-cwiEcKre739KotLSs3d1oTSjaKmUIK_HRa3VaOYt1Logn1cJxSHtP-p9xZoYh7ZwQLDBa602Vj1_PoFsp7oTbhSmyfnotxg8JMb9yZevh3cIXSaR-Gzs83e0U8eYTSvGkVPHiMhqjUGny8-x4oMdk5z_ZNlOLNTYYmZTbvLjhpSh0yT8to-R_N3NggLLgCHLro1t4ALqjVTGYIrir0dO8587C7_hAnDPWIGGh_ilNc0XhCdHNeoWpDkm-Tj8mX4eS7-U6lVlx4PUIyX5qsLE0WZb7LKiBc9QurYO2Q7PQ";

  const formik = useFormik({
    initialValues: {
      id: departamento.id,
      name: departamento.name,
      short_name: departamento.short_name,
      description: departamento.description,
      update_user: idUsuario,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5).required(),
      description: Yup.string().required(),
      short_name: Yup.string().max(6).required(),
    }),
    onSubmit: (formDepartamento) => {
      console.log(formDepartamento);
      dispatch(
        asyncActualizarRegistroAdmin(formDepartamento, token, "Department")
      );
    },
  });

  return (
    <>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2 className="col-10 px-5 pt-3">
            INFORMACIÓN DEPARTAMENTO # {idDepartamento}
          </h2>
        </Grid>
        <Grid item xs={3} md={2} container justifyContent="right">
          <Button variant="contained" onClick={() => navigate(-1)}>
            <KeyboardReturnIcon />
            Volver
          </Button>
        </Grid>
      </Grid>

      <hr></hr>

      <FormControl fullWidth sx={{ py: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required
              label="Nombre"
              margin="normal"
              name="name"
              error={formik.errors.name && formik.touched.name}
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required
              label="Nombre Corto"
              margin="normal"
              name="short_name"
              error={formik.errors.short_name && formik.touched.short_name}
              value={formik.values.short_name}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              required
              label="Descripción"
              margin="normal"
              name="description"
              error={formik.errors.description && formik.touched.description}
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid container justifyContent="center">
              <Button
                variant="contained"
                type="submit"
                sx={{ my: 3 }}
                onClick={formik.handleSubmit}
              >
                <Autorenew />
                ACTUALIZAR
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </FormControl>
      <hr></hr>
      {/* Pendiente consulta tabular de unidades relacionadas */}
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={12} md={12}>
          <h2>Unidades Relacionadas</h2>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box sx={{ my: 3 }}>
            {/* <MUIDataTable
              title={"Circuitos Relacionados"}
              data={data}
              columns={columns}
              options={options}
            ></MUIDataTable> */}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
