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

import { cambiarVistaConsultaTabularAdmin } from "../../../redux/actions/UI";
import { asyncCrearRegistroAdmin } from "../../../redux/actions/admin";

export const CrearLazo = () => {
  const dispatch = useDispatch();

  const idUsuario = useSelector((state) => state.auth.idUsuario);
  const token = useSelector((state) => state.auth.token);

  const unidades = useSelector((state) => state.admin.unidades);

  const formik = useFormik({
    initialValues: {
      name: "",
      unitId: null,
      description: "",
      comments: "",
      creationUser: idUsuario,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5).required(),
      description: Yup.string(),
      unitId: Yup.number().required(),
    }),
    onSubmit: (formLoop) => {
      console.log(formLoop);
      dispatch(asyncCrearRegistroAdmin(formLoop, token, "CorrosionLoop"));
    },
  });

  return (
    <Box>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2>NUEVO LAZO DE CORROSIÓN</h2>
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
            <FormControl
              fullWidth
              margin="normal"
              error={formik.errors.unitId && formik.touched.unitId}
            >
              <InputLabel id="select-unit">Unidad</InputLabel>
              <Select
                labelId="select-unit"
                label="Unidad"
                name="unitId"
                value={formik.values.unitId}
                onChange={formik.handleChange}
              >
                {unidades.map((i) => (
                  <MenuItem value={i.id}>
                    {i.id} - {i.name}
                  </MenuItem>
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
              margin="normal"
              name="description"
              error={formik.errors.description && formik.touched.description}
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              aria-required
              label="Comentarios"
              margin="normal"
              name="comments"
              error={formik.errors.comments && formik.touched.comments}
              value={formik.values.comments}
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
