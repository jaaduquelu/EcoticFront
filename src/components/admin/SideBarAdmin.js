import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

import { Drawer, List, ListItem, Divider } from "@mui/material";

const SideBarAdmin = () => {
  const drawerWidth = 300;

  let navigate = useNavigate();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      header="false"
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem button onClick={() => navigate("/admin/departamentos")}>
          Departamentos
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigate("/admin/unidades")}>
          Unidades
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigate("/admin/lazos")}>
          Lazos de corroción
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigate("/admin/tiposInspeccion")}>
          Tipos de Inspección
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigate("/admin/materiales")}>
          Materiales
        </ListItem>
      </List>

      <Divider />
    </Drawer>
  );
};

export default SideBarAdmin;
