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

const actualizarRol = (usuario, select, roles, dispatch) => {
  Swal.fire({
    title: `¿Desea cambiar el rol de ${usuario.name} por ${
      roles.find((r) => r.id == select.value).name
    } ?`,
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Confirmar",
    confirmButtonColor: "#4BB543",
    denyButtonText: `Cancelar`,
  }).then((result) => {
    if (result.isConfirmed) {
      // dispatch(asyncActualizarRegistroAdmin(usuario, select.value, token, "Auth/roles"));
      Swal.fire("Se actualizo exitosamente!", "", "success");
    }
  });
};

export const AccesosScreen = () => {
  const dispatch = useDispatch();

  const roles = useSelector((state) => state.admin.roles);
  const usuario = useSelector((state) => state.admin.usuarios);
  const token = useSelector((state) => state.auth.token);

  const [pageSize, setPageSize] = useState(10);

  const columnas = [
    { field: "id", headerName: "ID", width: 100, hideable: false },
    { field: "name", headerName: "Usuario", width: 360 },
    { field: "email", headerName: "Email", width: 300, renderHeader: () => {} },
    {
      field: "country",
      headerName: "Rol",
      width: 260,
      renderCell: (params) => (
        <Select
          label="Rol"
          value={roles.find((r) => r.name == params.row.roleName).id}
          onChange={(value) =>
            actualizarRol(params.row, value.target, roles, dispatch, token)
          }
        >
          {roles.map((i) => (
            <MenuItem key={i.id} value={i.id}>
              {i.name}
            </MenuItem>
          ))}
        </Select>
      ),
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
              rows={usuario}
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
