import React from "react";
import MUIDataTable from "mui-datatables";
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

import { cambiarVistaConsultaTabularAdmin } from "../../redux/actions/UI";

const ConsultaTabular = ({ module, columns }) => {
  const dispatch = useDispatch();

  // const listado = useSelector((state) => state.admin.modulo.toString());

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    filterType: "dropdown",
    rowsPerPage: 15,
    responsive: "standard",
  };

  return (
    <Box>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2 className="col-10 px-5 pt-3">ADMINISTRACIÓN {module}</h2>
        </Grid>
        <Grid item xs={3} md={2} container justifyContent="right">
          <Button
            variant="contained"
            type="submit"
            onClick={() => dispatch(cambiarVistaConsultaTabularAdmin())}
          >
            NUEVO
          </Button>
        </Grid>
      </Grid>

      <hr></hr>

      <Box sx={{ my: 3 }}>
        <MUIDataTable
          title={"Consulta tabular"}
          data={data}
          columns={columns}
          options={options}
        ></MUIDataTable>
      </Box>
    </Box>
  );
};

export default ConsultaTabular;
