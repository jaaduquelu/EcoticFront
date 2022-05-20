/** Ficha técnica del proyecto. */
const projectInfo = {
  name: "EcoTIC",
  version: "v.1.0.0.",
  versionYear: 2022,
  developTo: "Ecopetrol S.A. - INDRA Company",
  recommendedBrowsers:
    "Navegadores Web recomendados: Chrome 43 o superior, Firefox 38 o superior, Safari 8 o superior.",
  information:
    "Todos los derechos reservados. Ninguna reproducción externa copia o transmisión digital de esta publicación puede ser hecha sin permiso escrito. Ningún párrafo de esta publicación puede ser reproducido, copiado o transmitido digitalmente sin un consentimiento escrito o de acuerdo con las leyes que regulan los derechos de autor y con base en la regulación vigente.",
};

/** Expresiones regulares. */
const regExp = {
  email:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  url: /^https?:\/\/[\w]+(\.[\w]+)+[/#?]?.*$/,
  notSpecialCharacters: /^[A-Za-z0-9.,;:-áéíóúÁÉÍÓÚäëïöüÄËÏÖÜñÑ\s]+$/,
  notSpecialCharactersStrict: /^[A-Za-z0-9\s]+$/,
  notSpecialCharactersStrictAndSpaces: /^[A-Za-z0-9_]+$/,
  password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).*$/,
};

// Opciones de la Tabla de Material UI MUITable
const options = {
  filter: true,
  filterType: "dropdown",
  responsive: "standard",
  print: false,
  download: false,
  selectableRowsHideCheckboxes: true,
  textLabels: {
    body: {
      noMatch: "No se encontraron resultados",
      toolTip: "Ordenar",
      columnHeaderTooltip: (column) => `Ordenar por ${column.label}`,
    },
    pagination: {
      next: "Página Siguiente",
      previous: "Página anterior",
      rowsPerPage: "Itéms por página:",
      displayRows: "de",
    },
    toolbar: {
      search: "Buscar",
      downloadCsv: "Descargar CSV",
      print: "Imprimir",
      viewColumns: "Ver columnas",
      filterTable: "Filtrar Tabla",
    },
    filter: {
      all: "Todos",
      title: "FILTROS",
      reset: "Limpiar",
    },
    viewColumns: {
      title: "Ver columnas",
      titleAria: "Ver/Ocultar Columnas de la tabla",
    },
  },
};

export { projectInfo, regExp, options };
