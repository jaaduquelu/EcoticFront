import React from "react";
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, InputLabel, TextField, Button } from "@mui/material/";

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
    <Box>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2 className="col-10 px-5 pt-3">ADMINISTRACIÓN DE DEPARTAMENTOS</h2>
        </Grid>
        <Grid item xs={3} md={2} container justifyContent="right">
          <Button
            variant="contained"
            type="submit"
            onClick={() => dispatch(cambiarVistaDepartamentosAdmin())}
          >
            NUEVO
          </Button>
        </Grid>
      </Grid>

      <hr></hr>

      <Box sx={{ my: 3 }}>
        <MUIDataTable
          title={"Consulta tabular Departamentos"}
          data={data}
          columns={columns}
          options={options}
        />
      </Box>
    </Box>
  );
};

export default ConsultaTabularDepartamentos;
