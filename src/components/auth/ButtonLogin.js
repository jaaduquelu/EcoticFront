import { useMsal } from "@azure/msal-react";
import { IconButton, Tooltip } from "@mui/material/";

import Fingerprint from "@mui/icons-material/Fingerprint";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginRequest } from "../../API/authConfig";
import { types } from "../../redux/types";

const ButtonLogin = () => {
  const { instance } = useMsal();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await instance
      .loginPopup(loginRequest)
      .then(async (response) => {
        navigate("/admin/");
        console.log(response.accessToken);
        dispatch({ type: types.renovarToken, payload: response.accessToken });
      })
      .catch((error) => {
        Swal.fire(error, "Error", "error");
      });
  };

  return (
    <>
      <Tooltip title="AUTENTICARSE PARA INGRESAR" arrow>
        <IconButton
          size="medium"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={() => handleLogin()}
        >
          <Fingerprint sx={{ fontSize: 35, color: "#52c41a !important" }} />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default ButtonLogin;
