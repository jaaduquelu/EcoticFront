import { useMsal } from "@azure/msal-react";
import { IconButton, Tooltip } from "@mui/material/";

import Fingerprint from "@mui/icons-material/Fingerprint";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginRequest } from "../../API/authConfig";
import { types } from "../../redux/types";
import { asyncConsultarDatosUsuario } from "../../redux/actions/auth";

const ButtonLogin = () => {
  const { instance } = useMsal();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    await instance
      .loginPopup(loginRequest)
      .then((response) => {
        navigate("/admin/");
        dispatch({
          type: types.renovarToken,
          payload: response.accessToken,
        });
        dispatch(asyncConsultarDatosUsuario(response.accessToken));
      })
      .catch((error) => {
        Swal.fire(error, "Error", "error");
      })
      .finally(navigate("/admin/"));
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
