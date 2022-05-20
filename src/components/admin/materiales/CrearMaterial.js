import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Grid, Box, FormControl, TextField } from "@mui/material/";

import AddIcon from "@mui/icons-material/Add";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useFormik } from "formik";
import * as Yup from "yup";

import { asyncCrearRegistroAdmin } from "../../../redux/actions/admin";
import { cambiarVistaConsultaTabularAdmin } from "../../../redux/actions/UI";

const CrearMaterial = () => {
  const dispatch = useDispatch();

  const idUsuario = useSelector((state) => state.auth.idUsuario);
  const token = useSelector((state) => state.auth.token);

  const formik = useFormik({
    initialValues: {
      name: "",
      class: "",
      e: 0.0,
      grade: "",
      material: "",
      material_group: "",
      min_temp: "",
      notes: "",
      p_no: "",
      product_form: "",
      applicable_code: "",
      s_100: 0,
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
      size: "",
      smts: 0.0,
      smys: 0.0,
      specification: "",
      uns: "",
      w: 0,
      y_coeff_id: 0,
      creation_user: idUsuario,
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      // description: Yup.string().required(),
      // class: Yup.string().required(),
      // grade: Yup.string().required(),
      material: Yup.string().required(),
      // material_group: Yup.string().required(),
      // min_temp: Yup.string().required(),
      // smts: Yup.number(),
      // smys: Yup.number(),
      // y_coeff_id: Yup.number().integer().required(),
    }),
    onSubmit: (formMaterial) => {
      console.log(formMaterial);
      dispatch(asyncCrearRegistroAdmin(formMaterial, token, "Material"));
      formik.handleReset();
    },
  });

  return (
    <Box>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2>NUEVO MATERIAL</h2>
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
              label="Grupo Material"
              margin="normal"
              name="material_group"
              error={
                formik.errors.material_group && formik.touched.material_group
              }
              value={formik.values.material_group}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Material"
              margin="normal"
              name="material"
              error={formik.errors.material && formik.touched.material}
              value={formik.values.material}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Forma del producto"
              margin="normal"
              name="product_form"
              error={formik.errors.product_form && formik.touched.product_form}
              value={formik.values.product_form}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Nombre"
              margin="normal"
              name="name"
              error={formik.errors.name && formik.touched.name}
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Especificación"
              margin="normal"
              name="specification"
              error={
                formik.errors.specification && formik.touched.specification
              }
              value={formik.values.specification}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Grado"
              margin="normal"
              name="grade"
              error={formik.errors.grade && formik.touched.grade}
              value={formik.values.grade}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Codigo Aplicable"
              margin="normal"
              name="w"
              error={formik.errors.w && formik.touched.w}
              value={formik.values.w}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Uns"
              margin="normal"
              name="uns"
              error={formik.errors.uns && formik.touched.uns}
              value={formik.values.uns}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Clase"
              margin="normal"
              name="class"
              error={formik.errors.class && formik.touched.class}
              value={formik.values.class}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Tamaño"
              margin="normal"
              name="size"
              error={formik.errors.size && formik.touched.size}
              value={formik.values.size}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="P No"
              margin="normal"
              name="p_no"
              error={formik.errors.p_no && formik.touched.p_no}
              value={formik.values.p_no}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Temp Min"
              margin="normal"
              name="min_temp"
              error={formik.errors.min_temp && formik.touched.min_temp}
              value={formik.values.min_temp}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Notas"
              margin="normal"
              name="notes"
              error={formik.errors.notes && formik.touched.notes}
              value={formik.values.notes}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="Smts"
              margin="normal"
              name="smts"
              error={formik.errors.smts && formik.touched.smts}
              value={formik.values.smts}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="Smys"
              margin="normal"
              name="smys"
              error={formik.errors.smys && formik.touched.smys}
              value={formik.values.smys}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="S 100"
              margin="normal"
              name="s_100"
              error={formik.errors.s_100 && formik.touched.s_100}
              value={formik.values.s_100}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="S 200"
              margin="normal"
              name="s_200"
              error={formik.errors.s_200 && formik.touched.s_200}
              value={formik.values.s_200}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="S 300"
              margin="normal"
              name="s_300"
              error={formik.errors.s_300 && formik.touched.s_300}
              value={formik.values.s_300}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="S 400"
              margin="normal"
              name="s_400"
              error={formik.errors.s_400 && formik.touched.s_400}
              value={formik.values.s_400}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="S 500"
              margin="normal"
              name="s_500"
              error={formik.errors.s_500 && formik.touched.s_500}
              value={formik.values.s_500}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="S 600"
              margin="normal"
              name="s_600"
              error={formik.errors.s_600 && formik.touched.s_600}
              value={formik.values.s_600}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="S 650"
              margin="normal"
              name="s_650"
              error={formik.errors.s_650 && formik.touched.s_650}
              value={formik.values.s_650}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="S 700"
              margin="normal"
              name="s_700"
              error={formik.errors.s_700 && formik.touched.s_700}
              value={formik.values.s_700}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="S 750"
              margin="normal"
              name="s_750"
              error={formik.errors.s_750 && formik.touched.s_750}
              value={formik.values.s_750}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="S 800"
              margin="normal"
              name="s_800"
              error={formik.errors.s_800 && formik.touched.s_800}
              value={formik.values.s_800}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="S 850"
              margin="normal"
              name="s_850"
              error={formik.errors.s_850 && formik.touched.s_850}
              value={formik.values.s_850}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="S 900"
              margin="normal"
              name="s_900"
              error={formik.errors.s_900 && formik.touched.s_900}
              value={formik.values.s_900}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="S 950"
              margin="normal"
              name="s_950"
              error={formik.errors.s_950 && formik.touched.s_950}
              value={formik.values.s_950}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="S 1000"
              margin="normal"
              name="s_1000"
              error={formik.errors.s_1000 && formik.touched.s_1000}
              value={formik.values.s_1000}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="S 1050"
              margin="normal"
              name="s_1050"
              error={formik.errors.s_1050 && formik.touched.s_1050}
              value={formik.values.s_1050}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="S 1100"
              margin="normal"
              name="s_1100"
              error={formik.errors.s_1100 && formik.touched.s_1100}
              value={formik.values.s_1100}
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

export default CrearMaterial;
