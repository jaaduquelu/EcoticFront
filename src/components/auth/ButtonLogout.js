import { useMsal } from "@azure/msal-react";
import { useDispatch } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Swal from "sweetalert2";

const ButtonLogout = () => {
  const { instance } = useMsal();
  const dispatch = useDispatch();

  const handleLogout = (logoutType) => {
    if (logoutType === "popup") {
      // dispatch({ type: "ACTION-LOGIN", payload: {} });
      instance
        .logoutPopup({
          postLogoutRedirectUri: "/login",
          mainWindowRedirectUri: "/",
        })
        .catch((error) => {
          Swal.fire(error, "", "error");
        });
    } else if (logoutType === "redirect") {
      // dispatch({ type: "ACTION-LOGIN", payload: {} });
      instance
        .logoutRedirect({
          postLogoutRedirectUri: "/login",
        })
        .catch((error) => {
          Swal.fire(error, "", "error");
        });
    }
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
            onClick={() => handleLogout("popup")}
          >
            <ExitToAppIcon sx={{ fontSize: 35, color: "#FF0000 !important" }} />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};

export default ButtonLogout;
