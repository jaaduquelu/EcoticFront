import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Box,
  Select,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  Button,
} from "@mui/material/";

import AddIcon from "@mui/icons-material/Add";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  asyncCrearRegistroAdmin,
  asyncCrearTipoInspeccion,
} from "../../../redux/actions/admin";
import { cambiarVistaConsultaTabularAdmin } from "../../../redux/actions/UI";

const CrearTipoInspeccion = () => {
  const dispatch = useDispatch();

  const idUsuario = useSelector((state) => state.auth.idUsuario);
  const token = useSelector((state) => state.auth.token);

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      shortName: "",
      description: "",
      forCr: false,
      creation_user: idUsuario,
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      shortName: Yup.string().required(),
    }),
    onSubmit: (formSurveyType) => {
      dispatch(asyncCrearRegistroAdmin(formSurveyType, token, "SurveyType"));
      formik.handleReset();
    },
  });

  return (
    <Box>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2>NUEVO TIPO DE INSPECCIÓN</h2>
        </Grid>
        <Grid item xs={3} md={2} container justifyContent="right">
          <Button
            variant="contained"
            type="submit"
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
              name="shortName"
              error={formik.errors.shortName && formik.touched.shortName}
              value={formik.values.shortName}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <FormControlLabel
              sx={{ py: 3 }}
              control={
                <Checkbox
                  name="forCr"
                  checked={formik.values.forCr}
                  onChange={formik.handleChange}
                  color="success"
                />
              }
              label="For Cr"
            />
          </Grid>

          <Grid item xs={12} md={10}>
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

export default CrearTipoInspeccion;
