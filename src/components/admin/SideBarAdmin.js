import React, { useState } from "react";
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

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer
      sx={{
        my: 4,
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          // boxSizing: "border-box",
        },
      }}
      header="true"
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <List>
        <ListItemButton
          selected={selectedIndex === 6}
          onClick={(event) => {
            navigate("/admin/accesos");
            handleListItemClick(event, 6);
          }}
          sx={{ py: 2 }}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText>Accesos</ListItemText>
        </ListItemButton>

        <Divider />

        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => {
            navigate("/admin/departamentos");
            handleListItemClick(event, 0);
          }}
          sx={{ py: 2 }}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText>Departamentos</ListItemText>
        </ListItemButton>

        <Divider />

        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => {
            navigate("/admin/unidades");
            handleListItemClick(event, 1);
          }}
          sx={{ py: 2 }}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText>Unidades</ListItemText>
        </ListItemButton>

        <Divider />

        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => {
            navigate("/admin/lazos");
            handleListItemClick(event, 2);
          }}
          sx={{ py: 2 }}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText>Lazos de corroción</ListItemText>
        </ListItemButton>

        <Divider />

        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => {
            navigate("/admin/tiposInspeccion");
            handleListItemClick(event, 3);
          }}
          sx={{ py: 2 }}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText>Tipos de Inspección</ListItemText>
        </ListItemButton>

        <Divider />

        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => {
            navigate("/admin/materiales");
            handleListItemClick(event, 4);
          }}
          sx={{ py: 2 }}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText>Materiales</ListItemText>
        </ListItemButton>

        <Divider />

        <ListItemButton
          selected={selectedIndex === 5}
          onClick={(event) => {
            navigate("/admin/tiposCML");
            handleListItemClick(event, 5);
          }}
          sx={{ py: 2 }}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText>Tipos de CMLS</ListItemText>
        </ListItemButton>
        <Divider />
      </List>
    </Drawer>
  );
};

export default SideBarAdmin;
