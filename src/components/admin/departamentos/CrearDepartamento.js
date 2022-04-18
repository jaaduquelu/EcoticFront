import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { asyncCrearDepartamento } from "../../../redux/actions/admin";
import { cambiarVistaDepartamentosAdmin } from "../../../redux/actions/UI";

const CrearDepartamento = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      description: "",
      short_name: "",
      creation_date: new Date().toDateString(),
      creation_user: "",
      update_date: new Date().toDateString(),
      update_user: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      description: Yup.string().required(),
      short_name: Yup.string().required(),
      creation_user: Yup.number().required(),
      update_user: Yup.number().required(),
    }),
    onSubmit: (formDepartamento) => {
      dispatch(asyncCrearDepartamento(formDepartamento));
      formik.handleReset();
    },
  });

  //variable tipo diccionario
  const estados = useSelector((state) => state.diccionarios.estados);

  return (
    <div className="bg-configuracion py-3">
      <div className="row">
        <h2 className="col-10 px-5 pt-3">ADMINISTRACIÓN DE DEPARTAMENTOS</h2>
        <div className="col-2 d-flex flex-row justify-content-around">
          <img
            alt="C"
            className="btn btn-custom img-fluid"
            src="/iconosAdmin/btn_Volver.svg"
            onClick={() => dispatch(cambiarVistaDepartamentosAdmin())}
          ></img>
        </div>
      </div>
      <hr></hr>

      <form className="mx-5" onSubmit={formik.handleSubmit}>
        <div className="border rounded bg-light mx-4 my-5 px-5 py-3">
          <div className="row my-4">
            <div className="form-group col-12">
              <label className="font-weight-bold">NIT *</label>
              <input
                className={`form-control ${
                  formik.errors.documento &&
                  formik.touched.documento &&
                  "is-invalid"
                }`}
                name="documento"
                value={formik.values.documento}
                onChange={formik.handleChange}
              ></input>
            </div>
          </div>
          <div className="row my-4">
            <div className="form-group col-12">
              <label className="font-weight-bold">Nombre *</label>
              <input
                type="text"
                className={`form-control ${
                  formik.errors.nombre && formik.touched.nombre && "is-invalid"
                }`}
                name="nombre"
                value={formik.values.nombre}
                onChange={formik.handleChange}
              ></input>
            </div>
          </div>
          <div className="row my-4">
            <div className="form-group col-12">
              <label className="font-weight-bold">Sitio Web *</label>
              <input
                className={`form-control ${
                  formik.errors.sitioWeb &&
                  formik.touched.sitioWeb &&
                  "is-invalid"
                }`}
                name="sitioWeb"
                value={formik.values.sitioWeb}
                onChange={formik.handleChange}
              ></input>
            </div>
          </div>
          <div className="row my-4">
            <div className="form-group col-12">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text font-weight-bold">
                    Estado *
                  </div>
                </div>
                <select
                  className={`form-control ${
                    formik.errors.idEstado &&
                    formik.touched.idEstado &&
                    "is-invalid"
                  }`}
                  name="idEstado"
                  value={formik.values.idEstado}
                  onChange={formik.handleChange}
                >
                  <option>Seleccione...</option>
                  {estados.map((i) => (
                    <option key={i.id} value={i.id}>
                      {i.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3 d-flex justify-content-center">
          <button type="submit" className="btn">
            <img
              alt="C"
              className="btn btn-custom img-fluid"
              src="/iconosAdmin/btn_Guardar.svg"
            ></img>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearDepartamento;
