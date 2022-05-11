import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Box,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Button,
} from "@mui/material/";

import AddIcon from "@mui/icons-material/Add";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useFormik } from "formik";
import * as Yup from "yup";

import { asyncCrearDepartamento } from "../../../redux/actions/admin";
import { cambiarVistaConsultaTabularAdmin } from "../../../redux/actions/UI";

const CrearDepartamento = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      short_name: "",
      description: "",
      creation_date: new Date().toDateString(),
      creation_user: "",
      update_date: new Date().toDateString(),
      update_user: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5).required(),
      description: Yup.string().required(),
      short_name: Yup.string().required(),
      // creation_user: Yup.number().required(),
      // update_user: Yup.number().required(),
    }),
    onSubmit: (formDepartamento) => {
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
