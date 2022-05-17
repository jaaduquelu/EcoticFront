import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Grid, Box, Select, MenuItem } from "@mui/material/";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

const actualizarRol = (usuario, select) => {
  console.log("value", select.value);
  Swal.fire({
    title: `¿Desea cambiar el rol de por ${select.value} ?`,
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Guardar",
    confirmButtonColor: "#4BB543",
    denyButtonText: `Cancelar`,
  }).then((result) => {
    if (result.isConfirmed) {
      //funciona asincrona
      Swal.fire("Se actualizo exitosamente!", "", "success");
    }
  });
};

export const AccesosScreen = () => {
  const dispatch = useDispatch();

  const [pageSize, setPageSize] = useState(10);

  const columnas = [
    { field: "id", headerName: "ID", width: 100, hideable: false },
    { field: "user", headerName: "Usuario", width: 360 },
    { field: "email", headerName: "Email", width: 260, renderHeader: () => {} },
    // {
    //   field: "age",
    //   headerName: "Age",
    //   minWidth: 50,
    //   valueParser: (value) => Number(value) / 100,
    //   disableExport: true,
    // },
    {
      field: "country",
      headerName: "Rol",
      width: 280,
      renderCell: (params) => (
        <Select
          label="Rol"
          value={params.row.id}
          onChange={(value) => actualizarRol(params.row, value.target)}
        >
          <MenuItem value={10}>Examinador</MenuItem>
          <MenuItem value={20}>Inspector</MenuItem>
          <MenuItem value={30}>Administrado</MenuItem>
        </Select>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      username: "@MUI",
      age: 38,
      desk: "D-546",
    },
    {
      id: 2,
      username: "@MUI-X",
      age: 25,
      desk: "D-042dfsgfdsgfdsgfdsgfsdgfdgfsdgfdgdfs",
    },
    {
      id: 3,
      username: "@MUI",
      age: 38,
      desk: "D-546",
    },
    {
      id: 4,
      username: "@MUI-X",
      age: 25,
      desk: "D-042",
    },
    {
      id: 5,
      username: "@MUI",
      age: 38,
      desk: "D-546",
    },
    {
      id: 6,
      username: "@MUI-X",
      age: 25,
      desk: "D-042",
    },
    {
      id: 7,
      username: "@MUI",
      age: 38,
      desk: "D-546",
    },
    {
      id: 8,
      username: "@MUI-X",
      age: 25,
      desk: "D-042",
    },
    {
      id: 9,
      username: "@MUI",
      age: 38,
      desk: "D-546",
    },
    {
      id: 10,
      username: "@MUI-X",
      age: 25,
      desk: "D-042",
    },
    {
      id: 11,
      username: "@MUI",
      age: 4,
      desk: "D-546",
    },
    {
      id: 12,
      username: "@MUI-X",
      age: 5,
      desk: "D-042",
    },
  ];

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        {/* <GridToolbarColumnsButton /> */}
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
    <>
      <Box>
        <Grid container spacing={2} sx={{ py: 1 }}>
          <Grid item xs={9} md={10}>
            <h2>ACCESOS</h2>
          </Grid>
          <Grid item xs={3} md={2} container justifyContent="right"></Grid>
        </Grid>
        <hr></hr>
        <Box fullWidth sx={{ py: 3, px: 4 }}>
          <div style={{ height: "80vh", width: "100%" }}>
            <DataGrid
              columns={columnas}
              rows={rows}
              pageSize={pageSize}
              onPageSizeChange={(newPage) => setPageSize(newPage)}
              rowsPerPageOptions={[10, 25, 50]}
              pagination
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
    </>
  );
};
