import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, Button, MenuItem } from "@mui/material/";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import { cambiarVistaConsultaTabularAdmin } from "../../redux/actions/UI";

const ConsultaTabular = ({ name, columns, data }) => {
  const dispatch = useDispatch();

  const [pageSize, setPageSize] = useState(10);

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton variant="outlined" sx={{ mx: 2 }} />
        <GridToolbarFilterButton
          title="Mostrar Filtros"
          variant="outlined"
          size="medium"
          sx={{ mx: 2 }}
        />
        <GridToolbarExport
          csvOptions={{
            fileName: "Accesos_ecotic",
            delimiter: ",",
            utf8WithBom: true,
          }}
          printOptions={{ disableToolbarButton: true }}
          variant="outlined"
          size="small"
          sx={{ mx: 2 }}
        />
      </GridToolbarContainer>
    );
  };

  return (
    <Box>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2>{name}</h2>
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
      <hr></hr>
      <Box
        fullWidth
        sx={{
          py: 3,
          "& .super-app-theme--header": {
            backgroundColor: "thirdy.main",
            height: "4vh",
            marginTop: "2vh",
          },
        }}
      >
        <div style={{ height: "80vh", width: "100%" }}>
          <DataGrid
            autoHeight
            columns={columns}
            rows={data}
            pageSize={pageSize}
            // rowHeight={45}
            onPageSizeChange={(newPage) => setPageSize(newPage)}
            rowsPerPageOptions={[10, 25, 50]}
            pagination
            disableColumnMenu
            componentsProps={{
              toolbar: { printOptions: { disableToolbarButton: true } },
            }}
            components={{
              Toolbar: CustomToolbar,
            }}
          />
        </div>
      </Box>
    </Box>
  );
};

export default ConsultaTabular;
