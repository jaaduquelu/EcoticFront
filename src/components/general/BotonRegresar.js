//Icons Material UI
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {Box, Grid, Fab, Typography, Toolbar } from '@mui/material';

// Rutas
import { useNavigate } from 'react-router-dom'

const BotonRegresar = ({titulo, subtitulo, ruta }) => {
    let navigate = useNavigate()
    return (
      <Grid item xs={12} container spacing={2}>
        <Box ml={2} mr={2}>
          <Toolbar onClick={() => navigate(ruta)} style={{cursor:'pointer'}}>
            <Fab sx={{mt:2}} size="small" className="btn-fab-white" >
              <ArrowBackIcon color="action" sx={{ fontSize: 25 }}/>
            </Fab>
    
            <Box ml={1} />

            <Typography variant="h6" sx={{fontWeight:'bold'}}> 
              {titulo}
            </Typography>

          </Toolbar>
          <Typography ml={9} mt={-3} > 
            {subtitulo} 
          </Typography>
        </Box>
      </Grid>
    )
}

export default BotonRegresar;
