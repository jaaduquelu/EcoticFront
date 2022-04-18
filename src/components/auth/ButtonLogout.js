import { useMsal } from "@azure/msal-react"
import { IconButton, Tooltip } from '@mui/material/'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { mensaje_error } from 'tools/mensajes'

//Redux
import { useDispatch } from 'react-redux'

const ButtonLogout = () => {
    const { instance } = useMsal()
    const dispatch = useDispatch()

    const handleLogout = (logoutType) => {
      if (logoutType === "popup") {
          dispatch({type: 'ACTION-LOGIN', payload: {} })
          instance.logoutPopup({
              postLogoutRedirectUri: "/",
              mainWindowRedirectUri: "/"
          }).catch(error => {
            return mensaje_error(error)
          })

      } else if (logoutType === "redirect") {
          dispatch({type: 'ACTION-LOGIN', payload: {} })
          instance.logoutRedirect({
              postLogoutRedirectUri: "/",
          }).catch(error => {
            return mensaje_error(error)
          });
      }
    }

    return (<>
      <Tooltip title="CERRAR SESIÓN" arrow>
        <IconButton
          size="medium"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="success"
          onClick={() => handleLogout("popup")}
        >
          <ExitToAppIcon sx={{ fontSize: 35, color:"#52c41a !important" }} />
        </IconButton>
      </Tooltip>
    </>)

}

export default ButtonLogout