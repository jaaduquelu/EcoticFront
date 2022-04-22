import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  TextField,
  Button,
} from "@mui/material/";

import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import * as Yup from "yup";

import { asyncCrearUnidad } from "../../../redux/actions/admin";
import { cambiarVistaConsultaTabularAdmin } from "../../../redux/actions/UI";

const CrearUnidad = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      department_id: "",
      description: "",
      creation_date: new Date().toDateString(),
      creation_user: "",
      update_date: new Date().toDateString(),
      update_user: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      description: Yup.string().required(),
      department_id: Yup.number().required(),
      // creation_user: Yup.number().required(),
      // update_user: Yup.number().required(),
    }),
    onSubmit: (formUnidad) => {
      console.log(formUnidad);
      formik.handleReset();
    },
  });

  return (
    <Box>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2 className="col-10 px-5 pt-3">ADMINISTRACIÓN DE UNIDADES</h2>
        </Grid>
        <Grid item xs={3} md={2} container justifyContent="right">
          <Button
            variant="contained"
            type="submit"
            onClick={() => dispatch(cambiarVistaConsultaTabularAdmin())}
          >
            Volver
          </Button>
        </Grid>
      </Grid>

      <hr></hr>

      <FormControl fullWidth sx={{ py: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <FormControl
              fullWidth
              margin="normal"
              error={
                formik.errors.department_id && formik.touched.department_id
              }
            >
              <InputLabel id="select-department">Departamento</InputLabel>
              <Select
                labelId="select-department"
                label="Departamento"
                name="department_id"
                value={formik.values.department_id}
                onChange={formik.handleChange}
                // renderValue={(value) => `⚠️  - ${value}`}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required
              error={formik.errors.name && formik.touched.name}
              name="name"
              label="Nombre"
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              required
              error={formik.errors.description && formik.touched.description}
              name="description"
              label="Descripción"
              margin="normal"
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

export default CrearUnidad;
