import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Button,
} from "@mui/material/";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import * as Yup from "yup";

import { asyncCrearDepartamento } from "../../../redux/actions/admin";
import { cambiarVistaDepartamentosAdmin } from "../../../redux/actions/UI";

const CrearDepartamento = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      description: "",
      short_name: "",
      creation_date: new Date().toDateString(),
      creation_user: "",
      update_date: new Date().toDateString(),
      update_user: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      description: Yup.string().required(),
      short_name: Yup.string().required(),
      creation_user: Yup.number().required(),
      update_user: Yup.number().required(),
    }),
    onSubmit: (formDepartamento) => {
      formik.handleReset();
    },
  });

  return (
    <Box>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2 className="col-10 px-5 pt-3">ADMINISTRACIÓN DE DEPARTAMENTOS</h2>
        </Grid>
        <Grid item xs={3} md={2} container justifyContent="right">
          <Button
            variant="contained"
            type="submit"
            onClick={() => dispatch(cambiarVistaDepartamentosAdmin())}
          >
            Volver
          </Button>
        </Grid>
      </Grid>

      <hr></hr>

      <FormControl fullWidth sx={{ py: 2 }}>
        <InputLabel id="select-label">Name</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={formik.values.id}
          onChange={formik.handleChange}
          margin="normal"
        >
          {/* {estados.map((i) => (
            <MenuItem key={i.id} value={i.id}>
              {i.nombre}
            </MenuItem>
          ))} */}
        </Select>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required
              error={formik.errors.name && formik.touched.name}
              id="filled-required"
              label="Nombre"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required
              error={formik.errors.name && formik.touched.name}
              id="filled-required"
              label="Nombre"
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid container justifyContent="center">
              <Button variant="contained" type="submit">
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
