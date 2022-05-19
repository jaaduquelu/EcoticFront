import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  TextField,
  Button,
} from "@mui/material/";

import AddIcon from "@mui/icons-material/Add";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useFormik } from "formik";
import * as Yup from "yup";

import { asyncCrearRegistroAdmin } from "../../../redux/actions/admin";
import { cambiarVistaConsultaTabularAdmin } from "../../../redux/actions/UI";

const CrearUnidad = () => {
  const dispatch = useDispatch();

  const idUsuario = useSelector((state) => state.auth.idUsuario);
  const token = useSelector((state) => state.auth.token);

  const departamentos = useSelector((state) => state.admin.departamentos);

  const formik = useFormik({
    initialValues: {
      name: "",
      department_id: null,
      description: "",
      creation_user: idUsuario,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5).required(),
      department_id: Yup.number().required(),
    }),
    onSubmit: (formUnit) => {
      console.log(formUnit);
      dispatch(asyncCrearRegistroAdmin(formUnit, token, "Unit"));
      formik.handleReset();
    },
  });

  return (
    <Box>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2>NUEVA UNIDAD</h2>
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
          <Grid item xs={6} md={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="select-department">Departamento</InputLabel>
              <Select
                labelId="select-department"
                label="Departamento"
                name="department_id"
                error={
                  formik.errors.department_id && formik.touched.department_id
                }
                value={formik.values.department_id}
                onChange={formik.handleChange}
              >
                {departamentos.map((i) => (
                  <MenuItem value={i.id}>{i.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
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

          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label="Descripción"
              name="description"
              margin="normal"
              error={formik.errors.description && formik.touched.description}
              value={formik.values.description}
              onChange={formik.handleChange}
              helperText={formik.errors.description && "Ingrese la descripción"}
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
