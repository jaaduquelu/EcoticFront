import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";
import Toolbar from "@mui/material/Toolbar";

const SideBarAdmin = ({ drawerWidth }) => {
  let navigate = useNavigate();

  return (
    <Drawer
      sx={{
        my: 5,
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      header="true"
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <List>
        <ListItemButton
          // selected={selectedIndex === 0}
          onClick={() => navigate("/admin/departamentos")}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText>Departamentos</ListItemText>
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={() => navigate("/admin/unidades")}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText>Unidades</ListItemText>
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={() => navigate("/admin/lazos")}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText>Lazos de corroción</ListItemText>
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={() => navigate("/admin/tiposInspeccion")}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText>Tipos de Inspección</ListItemText>
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={() => navigate("/admin/materiales")}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText>Materiales</ListItemText>
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={() => navigate("/admin/tiposCMLS")}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText>Tipos de CMLS</ListItemText>
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default SideBarAdmin;
