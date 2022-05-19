import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
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

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Autorenew } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { asyncActualizarRegistroAdmin } from "../../../redux/actions/admin";

export const VerUnidad = () => {
  const dispatch = useDispatch();
  const { idUnidad } = useParams();

  let navigate = useNavigate();

  const unidad = useSelector((state) =>
    state.admin.unidades.find((i) => i.id == idUnidad)
  );

  const idUsuario = useSelector((state) => state.auth.idUsuario);
  const token = useSelector((state) => state.auth.token);

  const formik = useFormik({
    initialValues: {
      name: unidad.name,
      department_id: unidad.department_id,
      description: unidad.description,
      update_user: idUsuario,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5).required(),
      department_id: Yup.number().required(),
    }),
    onSubmit: (formUnit) => {
      console.log(formUnit);
      dispatch(asyncActualizarRegistroAdmin(formUnit, token, "Unit"));
    },
  });

  return (
    <>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2>INFORMACIÓN UNIDAD # {idUnidad}</h2>
        </Grid>
        <Grid item xs={3} md={2} container justifyContent="right">
          <Button
            variant="contained"
            type="submit"
            onClick={() => navigate(-1)}
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
      <hr></hr>
      {/* Pendiente consulta tabular de circuitos relacionados */}
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={12} md={12}>
          <h2>Lazos de corrosión relacionados</h2>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box sx={{ my: 3 }}>
            {/* <MUIDataTable
              title={"Circuitos Relacionados"}
              data={data}
              columns={columns}
              options={options}
            ></MUIDataTable> */}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
