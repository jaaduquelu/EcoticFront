import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Avatar,
  Button,
  Tooltip,
  Stack,
} from "@mui/material";
import { useSelector } from "react-redux";

import ButtonLogout from "../auth/ButtonLogout";

const pages = ["Activos", "Dashboard", "Admin"];
const settings = ["Profile", "Account", "Logout"];

const ResponsiveAppBar = () => {
  const drawerWidth = 300;

  const { nombre, rol } = useSelector((state) => state.auth);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar disableGutters sx={{ pr: 3 }}>
        {/* TAMAÑO MD */}
        <Box
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              // boxSizing: "border-box",
            },
            display: { xs: "none", md: "flex" },
            backgroundColor: "grey.main",
            // '&:hover': {
            //   backgroundColor: 'primary.main',
            //   opacity: [0.9, 0.8, 0.7],
            // },
          }}
        >
          <IconButton sx={{ px: 5, width: "100%" }}>
            <img
              src="/ecopetrol.svg"
              alt="Ecopetrol"
              style={{ height: "3rem", width: "12rem" }}
            />
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Stack>
              <Typography variant="h6">{nombre}</Typography>
              <Typography variant="h7">{rol}</Typography>
            </Stack>
          </Box>
        </Box>
        {/* FIN MD */}

        {/* TAMAÑO XS */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          EcoTIC
        </Typography>
        {/* FIN XS  */}

        {/* OPCIONES DE PERFIL */}
        {/* <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="User settings" arrow>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Temy Sharp" src="" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box> */}

        <Box sx={{ flexGrow: 0 }}>
          <ButtonLogout></ButtonLogout>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
