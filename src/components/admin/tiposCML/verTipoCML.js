import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { Grid, Box, FormControl, TextField, Button } from "@mui/material/";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Autorenew } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { asyncActualizarRegistroAdmin } from "../../../redux/actions/admin";

export const VerTipoCML = () => {
  const dispatch = useDispatch();
  const { idTipoCML } = useParams();

  let navigate = useNavigate();

  const tipoCML = useSelector((state) =>
    state.admin.tiposCML.find((i) => i.id == idTipoCML)
  );

  const idUsuario = useSelector((state) => state.auth.idUsuario);
  const token = useSelector((state) => state.auth.token);

  const formik = useFormik({
    initialValues: {
      id: tipoCML.id,
      name: tipoCML.name,
      description: tipoCML.description,
      tmlQty: tipoCML.tmlQty,
      start_1: tipoCML.start_1,
      start_2: tipoCML.start_2,
      start_3: tipoCML.start_3,
      start_4: tipoCML.start_3,
      end_1: tipoCML.end_1,
      end_2: tipoCML.end_2,
      end_3: tipoCML.end_3,
      end_4: tipoCML.end_4,
      updateUserId: idUsuario,
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      description: Yup.string().required(),
    }),
    onSubmit: (formCMLType) => {
      dispatch(asyncActualizarRegistroAdmin(formCMLType, token, "CMLType"));
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
