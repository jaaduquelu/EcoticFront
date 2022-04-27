import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
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
import { useFormik } from "formik";
import * as Yup from "yup";

import SideBarAdmin from "../SideBarAdmin";
import { asyncCrearUnidad } from "../../../redux/actions/admin";

export const VerLazo = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { idLazo } = useParams();

  const formik = useFormik({
    initialValues: {
      id: 15,
      name: "",
      unit_id: null,
      description: "",
      comments: "",
      creation_date: new Date().toDateString(),
      creation_user: "",
      update_date: new Date().toDateString(),
      update_user: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5).required(),
      description: Yup.string().required(),
      unit_id: Yup.number().required(),
      // creation_user: Yup.number().required(),
      // update_user: Yup.number().required(),
    }),
    onSubmit: (formUnidad) => {
      console.log(formUnidad);
      formik.handleReset();
    },
  });

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideBarAdmin />

        <Box component="main" sx={{ flexGrow: 1, py: 1, px: 3 }}>
          <Grid container spacing={2} sx={{ py: 1 }}>
            <Grid item xs={9} md={10}>
              <h2>INFORMACIÓN LAZO DE CORROSIÓN # {idLazo}</h2>
            </Grid>
            <Grid item xs={3} md={2} container justifyContent="right">
              <Button
                variant="contained"
                type="submit"
                onClick={() => navigate(-1)} //USAR HISTORY
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
                  error={formik.errors.unit_id && formik.touched.unit_id}
                >
                  <InputLabel id="select-unit">Unidad</InputLabel>
                  <Select
                    labelId="select-unit"
                    label="Unidad"
                    name="unit_id"
                    value={formik.values.unit_id}
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
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  aria-required
                  label="Descripción"
                  margin="normal"
                  name="description"
                  error={
                    formik.errors.description && formik.touched.description
                  }
                  onChange={formik.handleChange}
                  value={formik.values.description}
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
                  onChange={formik.handleChange}
                  value={formik.values.comments}
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
              <h2>Circuitos Relacionados</h2>
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
        </Box>
      </Box>
    </>
  );
};
