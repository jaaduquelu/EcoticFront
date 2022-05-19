import { useMsal } from "@azure/msal-react";
import { useDispatch } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Swal from "sweetalert2";

import { types } from "../../redux/types";

const ButtonLogout = () => {
  const { instance } = useMsal();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // dispatch({ type: "ACTION-LOGIN", payload: {} });
    instance
      .logoutPopup({
        postLogoutRedirectUri: "/login",
        mainWindowRedirectUri: "/",
      })
      .then(
        dispatch({
          type: types.cerrarSesion,
          payload: "",
        })
      )
      .catch((error) => {
        Swal.fire(error, "", "error");
      });
  };

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="CERRAR SESIÓN" arrow>
          <IconButton
            size="medium"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="success"
            onClick={() => handleLogout()}
          >
            <ExitToAppIcon sx={{ fontSize: 35, color: "#FF0000 !important" }} />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};

export default ButtonLogout;
