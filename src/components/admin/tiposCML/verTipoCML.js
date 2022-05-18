import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Box,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Button,
} from "@mui/material/";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Autorenew } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";

import { asyncCrearTipoCML } from "../../../redux/actions/admin";
import { cambiarVistaConsultaTabularAdmin } from "../../../redux/actions/UI";

const CrearTipoCML = () => {
  const dispatch = useDispatch();
  const { idTipoCML } = useParams();

  let navigate = useNavigate();

  // const departamento = useSelector((state) =>
  //   state.admin.departamentos.find((i) => i.id == idDepartamento)
  // );

  // const {} = departamento;

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      description: "",
      tml_qty: "",
      creation_date: new Date().toDateString(),
      creation_user_id: "",
      update_date: new Date().toDateString(),
      update_user: "",
      start_1: "",
      start_2: "",
      start_3: "",
      start_4: "",
      end_1: "",
      end_2: "",
      end_3: "",
      end_4: "",
    }, //Le faltan campos
    validationSchema: Yup.object({
      name: Yup.string().required(),
      description: Yup.string().required(),
      // creation_user: Yup.number().required(),
      // update_user: Yup.number().required(),
    }),
    onSubmit: (formTipoCML) => {
      formik.handleReset();
    },
  });

  return (
    <Box>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2 className="col-10 px-5 pt-3">
            INFORMACIÓN TIPO CML # {idTipoCML}
          </h2>
        </Grid>
        <Grid item xs={3} md={2} container justifyContent="right">
          <Button variant="contained" onClick={() => navigate(-1)}>
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

          <Grid item xs={12} md={12}>
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
    </Box>
  );
};

export default CrearTipoCML;
