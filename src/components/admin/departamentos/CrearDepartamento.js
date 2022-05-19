import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, FormControl, TextField, Button } from "@mui/material/";

import AddIcon from "@mui/icons-material/Add";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useFormik } from "formik";
import * as Yup from "yup";

import { asyncCrearRegistroAdmin } from "../../../redux/actions/admin";
import { cambiarVistaConsultaTabularAdmin } from "../../../redux/actions/UI";

const CrearDepartamento = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  const token2 =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJhcGk6Ly9mNzNhYTdmMy01MmE4LTQyNjAtOGM0NC1lZWEwMjQ1OWJmNjMiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9hNDMwNTk4Ny1jZjc4LTRmOTMtOWQ2NC1iZjE4YWY2NTM5N2IvIiwiaWF0IjoxNjUyODkzNjcxLCJuYmYiOjE2NTI4OTM2NzEsImV4cCI6MTY1Mjg5NzcxMCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQXFLNnV3cGxoZU02dUpoOGJ3b3Y0eGp0OG9CYkR3a1NOVXY0bkFXRXJ6bWFaalcxUXE1d0k1MDcrQnBvTW0ra2o0SXdrMmQva1Bnc0VyTEU5R1E2Nkp6NWZXSVZTcC9VQ0t5ZzU0RVF0U1FjPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiJmNzNhYTdmMy01MmE4LTQyNjAtOGM0NC1lZWEwMjQ1OWJmNjMiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkR1cXVlIEx1Z28iLCJnaXZlbl9uYW1lIjoiSmF2aWVyIiwiaXBhZGRyIjoiMTg2LjE1OS43LjEzMCIsIm5hbWUiOiJKYXZpZXIgRHVxdWUgTHVnbyAoSW5kcmEgQ29sb21iaWEpIiwib2lkIjoiOWUwOTVhMTYtMWJkMS00N2IzLWI1MzktMzgyYmJhMWQzNjQ4Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTEwNzczNjc3MTctMTYyMzI4NTEyNi0xMDkzNjI1MDY5LTQ1NDEwOCIsInJoIjoiMC5BUW9BaDFrd3BIalBrMC1kWkw4WXIyVTVlX09uT3Zlb1VtQkNqRVR1b0NSWnYyTUtBRUkuIiwic2NwIjoiYWNjZXNzX2FzX3VzZXIiLCJzdWIiOiJlMXo5TGc1MVJfbEFPeUlkVEZNN3pvMTFRRy1zTzZ1OU1RZ1pibC1fbGtBIiwidGlkIjoiYTQzMDU5ODctY2Y3OC00ZjkzLTlkNjQtYmYxOGFmNjUzOTdiIiwidW5pcXVlX25hbWUiOiJqYXZpZXIuZHVxdWVsdUBlY29wZXRyb2wuY29tLmNvIiwidXBuIjoiamF2aWVyLmR1cXVlbHVAZWNvcGV0cm9sLmNvbS5jbyIsInV0aSI6IjFwem55SGdYZFVpWlpDdzhhN0FJQUEiLCJ2ZXIiOiIxLjAifQ.ldifYQKl4Bk-F9PwqSNFocQbS7e8mbrV_K1ie4hzZYQBsw3P_zVsAupb02AutoM7WrluRr9iyyvC_m6s2UaF_V5fDtiDcZBsfsGeQ4KxQ5LMzgWBXQrvtBn4thbiJmTe2ZdfAobh4MvIHPbZsLyzkNYHb1j8ZoGDgzZUoZa3LI3mZDqIAN6dcT6JoVTGb14-PE4XGBhFCtAPrtzq6bA-phCDRIT8gX9EALnSq3XcClxWs8jfeL0usFL7EojZyegP_KY6hXH3CH2jPntORQHOsBnD75NS37ct5P80q-_YEQI1naibtmS5xLa20XbxmjSOv4QK72aBtbQVK4ZcrJxm_A";

  const formik = useFormik({
    initialValues: {
      name: "",
      short_name: "",
      description: " ",
      creation_user: 1,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5).required(),
      short_name: Yup.string().max(6).required(),
    }),
    onSubmit: (formDepartment) => {
      console.log(formDepartment);
      dispatch(asyncCrearRegistroAdmin(formDepartment, token, "Department"));
      formik.handleReset();
    },
  });

  return (
    <Box>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2>NUEVO DEPARTAMENTO</h2>
        </Grid>
        <Grid item xs={3} md={2} container justifyContent="right">
          <Button
            variant="contained"
            onClick={() => dispatch(cambiarVistaConsultaTabularAdmin())}
          >
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
                <AddIcon />
                CREAR
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};

export default CrearDepartamento;
