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

  // Admin
  cargarDepartamentos: "[Admin] Cargar todos los Departamentos",
  cargarUnidades: "[Admin] Cargar todos las Unidades",
  cargarLazos: "[Admin] Cargar todos los Lazos",
  cargarTiposInspeccion: "[Admin] Cargar todos los Tipos Inspeccion",
  cargarMateriales: "[Admin] Cargar todos los Materiales ",
  cargarTiposCML: "[Admin] Cargar todos los Tipos de CML",
  cargarRoles: "[Admin] Cargar todos los Roles",
  cargarUsuarios: "[Admin] Cargar todos los Usuarios",
};
