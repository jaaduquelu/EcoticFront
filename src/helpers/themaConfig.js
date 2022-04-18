import { createTheme  } from '@mui/material/styles';
import { esES } from '@mui/material/locale'

const theme = createTheme ({

    palette: {
      primary:{
        main:'#006064'
      },
      error:{
        main: '#ef5350'
      },
      clearcolor:{
        main: '#ef5350'
      },      
      success:{
        main: '#4caf50'
      },

    },
    typography: {
      // fontSize: 14,
    }

    

}, esES)

export default theme;