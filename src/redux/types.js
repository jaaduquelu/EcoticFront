export const types = {
  //Autenticacion
  iniciarSesion: "[Autenticacion] Cargar datos de sesion del usuario",
  cerrarSesion: "[Autenticacion] Borrar datos de sesion del usuario",
  renovarToken: "[Autenticacion] Renovar el token de la sesion del usuario",
  iniciaValidacion: "[Autenticacion] Inicia proceso de Login",
  finalizaValidacion: "[Autenticacion] Finaliza proceso de Login",

  //UI
  cambiarVistaDepartamentosAdmin:
    "[UI] Cambiar la vista actual de DepartamentosScreen",
  cambiarVistaUnidadesAdmin: "[UI] Cambiar la vista actual de UnidadesScreen",
  cambiarVistaConsultaTabularAdmin:
    "[UI] Cambiar la vista de consulta en admin",
  vistaConsultaTabularAdmin:
    "[UI] Inicializar la vista actual de consulta en admin",
};
