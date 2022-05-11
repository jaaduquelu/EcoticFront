import { useMsal } from "@azure/msal-react";
import { IconButton, Tooltip } from "@mui/material/";

import Fingerprint from "@mui/icons-material/Fingerprint";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginRequest } from "../../API/authConfig";

// const setProfile = async (response) => {
//   const p = await axios
//     .post(
//       "/login/get",
//       { active: true, email: response.account.username },
//       { params: { page: 0, size: 0 } }
//     )
//     .then((response) => {
//       return response.data.data.results[0];
//     });
//   return p;
// };

const ButtonLogin = () => {
  const { instance } = useMsal();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (loginType) => {
    if (loginType === "popup") {
      dispatch({ type: "ACTION-LOADING", payload: true });
      await instance
        .loginPopup(loginRequest)
        .then(async (response) => {
          // let profile = await setProfile(response);
          // dispatch({
          //   type: "ACTION-LOGIN",
          //   payload: profile ? profile : { id: "", role: 1, administrator: 0 },
          // });
          // dispatch({ type: "ACTION-ROLESVISTA", payload: { role: 0 } });
          navigate("/");
        })
        .catch((error) => {
          Swal.fire(error, "", "error");
        });
    } else if (loginType === "redirect") {
      dispatch({ type: "ACTION-LOADING", payload: true });
      await instance
        .loginRedirect(loginRequest)
        .then((response) => {
          // let profile = setProfile(response).then((res) => {
          //   return res;
          // });
          // dispatch({ type: "ACTION-ROLESVISTA", payload: { role: 0 } });
          // dispatch({ type: "ACTION-LOGIN", payload: profile });
          navigate("/");
        })
        .catch((error) => {
          Swal.fire(error, "", "error");
        });
    }
  };

  return (
    <>
      <Tooltip title="AUTENTICARSE PARA INGRESAR" arrow>
        <IconButton
          size="medium"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={() => handleLogin("popup")}
        >
          <Fingerprint sx={{ fontSize: 35, color: "#52c41a !important" }} />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default ButtonLogin;
