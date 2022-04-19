import React from "react";
import { NavLink } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

const SideBarAdmin = () => {
  const drawerWidth = 300;

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
        <ListItem button key={"Departamentos"}>
          <NavLink to="/admin/departamentos">Departamentos</NavLink>
        </ListItem>
        <Divider />
        <ListItem button key={"Unidades"}>
          <NavLink to="/admin/unidades">Unidades</NavLink>
        </ListItem>
        <Divider />
        <ListItem button>
          <NavLink to="/admin/lazos">Lazos</NavLink>
        </ListItem>
        <Divider />
        <ListItem button>
          <NavLink to="/admin/tiposInspeccion">Tipos de Inspección</NavLink>
        </ListItem>
        <Divider />
        <ListItem button>
          <NavLink to="/admin/materiales">Materiales</NavLink>
        </ListItem>
      </List>

      <Divider />
    </Drawer>
  );
};

export default SideBarAdmin;
