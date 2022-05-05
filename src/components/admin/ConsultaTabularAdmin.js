import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MUIDataTable from "mui-datatables";

import { Grid, Box, Button } from "@mui/material/";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CssBaseline from "@mui/material/CssBaseline";

import { cambiarVistaConsultaTabularAdmin } from "../../redux/actions/UI";

const ConsultaTabular = ({ name, module, columns, data }) => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  // const listado = useSelector((state) => state.admin.modulo.toString());

  // const data = [
  //   ["Joe James", "Test Corp", "Yonkers", "NY"],
  //   ["John Walsh", "Test Corp", "Hartford", "CT"],
  //   ["Bob Herm", "Test Corp", "Tampa", "FL"],
  //   ["James Houston", "Test Corp", "Dallas", "TX"],
  // ];

  const options = {
    filterType: "dropdown",
    rowsPerPage: 10,
    selectableRows: "none",
    responsive: "standard",
    rowsPerPageOptions: [10, 25, 50, 100, 200],
    downloadOptions: { filename: name + ".csv", separator: "," },
    onRowClick: (rowData) => {
      navigate("/admin/" + module + "/" + rowData[3]);
    },
    // print: false,
    // resizableColumns: true,
    // columnOrder: [3, 2, 1, 5, 4, 6, 7, 8],
  };

  return (
    <Box component="main">
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container wrap="nowrap" spacing={2} sx={{ py: 1 }}>
          <Grid item xs={9} md={10}>
            <h2 className="col-10 px-5 pt-3">{name}</h2>
          </Grid>
          <Grid item xs={3} md={2} container justifyContent="right">
            <Button
              variant="contained"
              onClick={() => dispatch(cambiarVistaConsultaTabularAdmin())}
            >
              <AddCircleIcon />
              NUEVO
            </Button>
          </Grid>
        </Grid>
      </Box>
      <hr></hr>
      <Box sx={{ my: 3 }}>
        <MUIDataTable
          title={"Consulta Tabular"}
          data={data}
          columns={columns}
          options={options}
        ></MUIDataTable>
      </Box>
    </Box>
  );
};

export default ConsultaTabular;
