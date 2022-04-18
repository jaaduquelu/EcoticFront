import React from "react";
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from "react-redux";

import { cambiarVistaDepartamentosAdmin } from "../../../redux/actions/UI";

const ConsultaTabularDepartamentos = () => {
  const dispatch = useDispatch();

  const columns = ["Name", "Company", "City", "State"];

  const departamentos = useSelector((state) => state.admin.departamentos);

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    filterType: "checkbox",
  };

  return (
    <>
      <div className="row py-2 bg-admin">
        <h2 className="col-10 px-5 pt-3">ADMINISTRACIÓN DE DEPARTAMENTOS</h2>
        <div className="col-2 d-flex flex-row justify-content-around">
          <img
            alt="C"
            className="btn btn-custom img-fluid my-1"
            src="/iconosAdmin/btn_Agregar.svg"
            onClick={() => dispatch(cambiarVistaDepartamentosAdmin())}
          ></img>
        </div>
      </div>

      <div className="p-4">
        <MUIDataTable
          title={"Consulta Departamentos"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </>
  );
};

export default ConsultaTabularDepartamentos;
