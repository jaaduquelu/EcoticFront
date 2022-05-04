import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
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
import CssBaseline from "@mui/material/CssBaseline";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Autorenew } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";

import SideBarAdmin from "../SideBarAdmin";
import { asyncCrearDepartamento } from "../../../redux/actions/admin";

export const VerDepartamento = () => {
  const dispatch = useDispatch();
  const { idDepartamento } = useParams();

  let navigate = useNavigate();

  // const departamento = useSelector((state) =>
  //   state.admin.departamentos.find((i) => i.id == idDepartamento)
  // );

  // const {} = departamento;

  const formik = useFormik({
    initialValues: {
      id: idDepartamento,
      name: "",
      short_name: "",
      description: "",
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
    onSubmit: (formDepartamento) => {
      formik.handleReset();
    },
  });

  return (
    <>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2 className="col-10 px-5 pt-3">
            INFORMACIÓN DEPARTAMENTO # {idDepartamento}
          </h2>
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
              error={formik.errors.short_name && formik.touched.short_name}
              id="filled-required"
              label="Nombre Corto"
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              required
              error={formik.errors.description && formik.touched.description}
              id="filled-required"
              label="Descripción"
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid container justifyContent="center">
              <Button variant="contained" type="submit" sx={{ my: 3 }}>
                <Autorenew />
                ACTUALIZAR
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </FormControl>
      <hr></hr>
      {/* Pendiente consulta tabular de unidades relacionadas */}
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={12} md={12}>
          <h2>Unidades Relacionadas</h2>
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
