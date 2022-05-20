import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, FormControl, TextField, Button } from "@mui/material/";

import AddIcon from "@mui/icons-material/Add";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useFormik } from "formik";
import * as Yup from "yup";

import { asyncCrearRegistroAdmin } from "../../../redux/actions/admin";
import { cambiarVistaConsultaTabularAdmin } from "../../../redux/actions/UI";

const CrearTipoCML = () => {
  const dispatch = useDispatch();

  const idUsuario = useSelector((state) => state.auth.idUsuario);
  const token = useSelector((state) => state.auth.token);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      tmlQty: 0,
      start_1: 0,
      start_2: 0,
      start_3: 0,
      start_4: 0,
      end_1: 0,
      end_2: 0,
      end_3: 0,
      end_4: 0,
      creationUserId: idUsuario,
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      description: Yup.string(),
    }),
    onSubmit: (formCMLtype) => {
      console.log(formCMLtype);
      dispatch(asyncCrearRegistroAdmin(formCMLtype, token, "CMLType"));
      formik.handleReset();
    },
  });

  return (
    <Box>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2>NUEVO TIPO DE CML</h2>
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
              type="number"
              label="TML Qty"
              margin="normal"
              name="tmlQty"
              error={formik.errors.tmlQty && formik.touched.tmlQty}
              value={formik.values.tmlQty}
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
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="Inicio 1"
              margin="normal"
              name="start_1"
              error={formik.errors.start_1 && formik.touched.start_1}
              value={formik.values.start_1}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="Fin 1"
              margin="normal"
              name="end_1"
              error={formik.errors.end_1 && formik.touched.end_1}
              value={formik.values.end_1}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="Inicio 2"
              margin="normal"
              name="start_2"
              error={formik.errors.start_2 && formik.touched.start_2}
              value={formik.values.start_2}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="Fin 2"
              margin="normal"
              name="end_2"
              error={formik.errors.end_2 && formik.touched.end_2}
              value={formik.values.end_2}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="Inicio 3"
              margin="normal"
              name="start_3"
              error={formik.errors.start_3 && formik.touched.start_3}
              value={formik.values.start_3}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="Fin 3"
              margin="normal"
              name="end_3"
              error={formik.errors.end_3 && formik.touched.end_3}
              value={formik.values.end_3}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="Inicio 4"
              margin="normal"
              name="start_4"
              error={formik.errors.start_4 && formik.touched.start_4}
              value={formik.values.start_4}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="Fin 4"
              margin="normal"
              name="end_4"
              error={formik.errors.end_4 && formik.touched.end_4}
              value={formik.values.end_4}
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

export default CrearTipoCML;
