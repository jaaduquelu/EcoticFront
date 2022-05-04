import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
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

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Autorenew } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";

import { asyncCrearUnidad } from "../../../redux/actions/admin";

export const VerTipoInspeccion = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { idTipoInspeccion } = useParams();

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      short_name: "",
      description: "",
      for_cr: false,
      creation_date: new Date().toDateString(),
      creation_user: "",
      update_date: new Date().toDateString(),
      update_user: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      description: Yup.string().required(),
      short_name: Yup.string().required(),
      // creation_user: Yup.number().required(),
      // update_user: Yup.number().required(),
    }),
    onSubmit: (formTipoInspeccion) => {
      console.log(formTipoInspeccion);
      // formik.handleReset();
    },
  });

  return (
    <>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2>INFORMACIÓN TIPO INSPECCIÓN # {idTipoInspeccion}</h2>
        </Grid>
        <Grid item xs={3} md={2} container justifyContent="right">
          <Button
            variant="contained"
            type="submit"
            onClick={() => navigate(-1)} //USAR HISTORY
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

          <Grid item xs={12} md={2}>
            <FormControlLabel
              sx={{ py: 3 }}
              control={
                <Checkbox
                  name="for_cr"
                  checked={formik.values.for_cr}
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
    </>
  );
};
