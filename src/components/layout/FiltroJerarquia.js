import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Button,
} from "@mui/material/";

import { useFormik } from "formik";
import * as Yup from "yup";

export const FiltroJerarquia = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      departament_id: "",
      unit_id: "",
      loop_corropsion_id: "",
    }, //Le faltan campos
    validationSchema: Yup.object({
      departament_id: Yup.number(),
      unit_id: Yup.number(),
      loop_corropsion_id: Yup.number(),
    }),
    onSubmit: (formTipoCML) => {
      formik.handleReset();
    },
  });

  return (
    <>
      <FormControl
        position="fixed"
        fullWidth
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="departament-label">Departamento</InputLabel>
              <Select
                labelId="departament-label"
                name="departament_id"
                value={formik.values.departament_id}
                onChange={formik.handleChange}
                label="Departamento"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} md={4}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="unit-label">Unidad</InputLabel>
              <Select
                labelId="unit-label"
                name="unit_id"
                value={formik.values.unit_id}
                onChange={formik.handleChange}
                label="Unidad"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} md={4}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="loop-label">Lazo de Corrosión</InputLabel>
              <Select
                labelId="loop-label"
                name="loop_corropsion_id"
                value={formik.values.loop_corropsion_id}
                onChange={formik.handleChange}
                label="Lazo de Corrosión"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </FormControl>
    </>
  );
};
