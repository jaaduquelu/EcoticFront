import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import {
  Grid,
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material/";

import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import * as Yup from "yup";

import { asyncCrearMaterial } from "../../../redux/actions/admin";
import { cambiarVistaConsultaTabularAdmin } from "../../../redux/actions/UI";

const CrearMaterial = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      class: "",
      e: 0,
      grade: "",
      material: "",
      material_group: "",
      min_temp: "",
      notes: "",
      p_no: "",
      product_form: "",
      s_100: 0,
      s_1000: 0,
      s_1050: 0,
      s_1100: 0,
      s_1150: 0,
      s_1200: 0,
      s_1250: 0,
      s_1300: 0,
      s_1350: 0,
      s_1400: 0,
      s_1450: 0,
      s_1500: 0,
      s_200: 0,
      s_300: 0,
      s_400: 0,
      s_500: 0,
      s_600: 0,
      s_650: 0,
      s_700: 0,
      s_750: 0,
      s_800: 0,
      s_850: 0,
      s_900: 0,
      s_950: 0,
      size: "",
      smts: 0,
      smys: 0,
      specification: "",
      uns: "",
      w: 0,
      y_coeff_id: 0,
      creation_date: new Date().toDateString(),
      creation_user: "",
      update_date: new Date().toDateString(),
      update_user: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      description: Yup.string().required(),
      class: Yup.string().required(),
      grade: Yup.string().required(),
      material: Yup.string().required(),
      material_group: Yup.string().required(),
      min_temp: Yup.string().required(),
      smts: Yup.number(),
      smys: Yup.number(),
      y_coeff_id: Yup.number().integer().required(),
    }),
    onSubmit: (formMaterial) => {
      console.log(formMaterial);
      formik.handleReset();
    },
  });

  return (
    <Box>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2>ADMINISTRACIÓN MATERIALES</h2>
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
              error={formik.errors.class && formik.touched.class}
            >
              <InputLabel id="select-department">Departamento</InputLabel>
              <Select
                labelId="select-department"
                label="Departamento"
                name="class"
                value={formik.values.class}
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

export default CrearMaterial;
