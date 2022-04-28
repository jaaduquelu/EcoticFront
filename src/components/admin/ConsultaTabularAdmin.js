import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MUIDataTable from "mui-datatables";

import { Grid, Box, Button } from "@mui/material/";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CssBaseline from "@mui/material/CssBaseline";

import { cambiarVistaConsultaTabularAdmin } from "../../redux/actions/UI";

const ConsultaTabular = ({ name, module, columns }) => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  // const listado = useSelector((state) => state.admin.modulo.toString());

  // const data = [
  //   ["Joe James", "Test Corp", "Yonkers", "NY"],
  //   ["John Walsh", "Test Corp", "Hartford", "CT"],
  //   ["Bob Herm", "Test Corp", "Tampa", "FL"],
  //   ["James Houston", "Test Corp", "Dallas", "TX"],
  // ];

  const data = [
    [
      "Gabby George",
      "Business Analyst",
      "Minneapolis",
      30,
      "$100,000",
      "$100,000",
      "$100,000",
      "555-5555",
    ],
    [
      "Aiden Lloyd",
      "Business Consultant",
      "Dallas",
      55,
      "$200,000",
      "$200,000",
      "$200,000",
      "",
    ],
    [
      "Jaden Collins",
      "Attorney",
      "Santa Ana",
      27,
      "$500,000",
      "$500,000",
      "$500,000",
      "555-5555",
    ],
    [
      "Franky Rees",
      "Business Analyst",
      "St. Petersburg",
      22,
      "$50,000",
      "$50,000",
      "$50,000",
      "555-5555",
    ],
    [
      "Aaren Rose",
      "Business Consultant",
      "Toledo",
      28,
      "$75,000",
      "$75,000",
      "$75,000",
      "555-5555",
    ],
    [
      "Blake Duncan",
      "Business Management Analyst",
      "San Diego",
      65,
      "$94,000",
      "$94,000",
      "$94,000",
      "555-3333",
    ],
    [
      "Frankie Parry",
      "Agency Legal Counsel",
      "Jacksonville",
      71,
      "$210,000",
      "$210,000",
      "$210,000",
      "555-5555",
    ],
    [
      "Lane Wilson",
      "Commercial Specialist",
      "Omaha",
      19,
      "$65,000",
      "$65,000",
      "$65,000",
      "555-5555",
    ],
    [
      "Robin Duncan",
      "Business Analyst",
      "Los Angeles",
      20,
      "$77,000",
      "$77,000",
      "$77,000",
      "555-3333",
    ],
    [
      "Mel Brooks",
      "Business Consultant",
      "Oklahoma City",
      37,
      "$135,000",
      "$135,000",
      "$135,000",
      "555-5555",
    ],
    [
      "Harper White",
      "Attorney",
      "Pittsburgh",
      52,
      "$420,000",
      "$420,000",
      "$420,000",
      "555-5555",
    ],
    [
      "Kris Humphrey",
      "Agency Legal Counsel",
      "Laredo",
      30,
      "$150,000",
      "$150,000",
      "$150,000",
      "555-5555",
    ],
    [
      "Frankie Long",
      "Industrial Analyst",
      "Austin",
      31,
      "$170,000",
      "$170,000",
      "$170,000",
      "",
    ],
    [
      "Brynn Robbins",
      "Business Analyst",
      "Norfolk",
      22,
      "$90,000",
      "$90,000",
      "$90,000",
      "555-0000",
    ],
    [
      "Justice Mann",
      "Business Consultant",
      "Chicago",
      24,
      "$133,000",
      "$133,000",
      "$133,000",
      "555-5555",
    ],
    [
      "Addison Navarro",
      "Business Management Analyst",
      "New York",
      50,
      "$295,000",
      "$295,000",
      "$295,000",
      "555-5555",
    ],
    [
      "Jesse Welch",
      "Agency Legal Counsel",
      "Seattle",
      28,
      "$200,000",
      "$200,000",
      "$200,000",
      "555-5555",
    ],
    [
      "Eli Mejia",
      "Commercial Specialist",
      "Long Beach",
      65,
      "$400,000",
      "$400,000",
      "$400,000",
      "555-5555",
    ],
    [
      "Gene Leblanc",
      "Industrial Analyst",
      "Hartford",
      34,
      "$110,000",
      "$110,000",
      "$110,000",
      "555-5555",
    ],
    [
      "Danny Leon",
      "Computer Scientist",
      "Newark",
      60,
      "$220,000",
      "$220,000",
      "$220,000",
      "555-5555",
    ],
    [
      "Lane Lee",
      "Corporate Counselor",
      "Cincinnati",
      52,
      "$180,000",
      "$180,000",
      "$180,000",
      "555-5555",
    ],
    [
      "Jesse Hall",
      "Business Analyst",
      "Baltimore",
      44,
      "$99,000",
      "$99,000",
      "$99,000",
      "555-5555",
    ],
    [
      "Danni Hudson",
      "Agency Legal Counsel",
      "Tampa",
      37,
      "$90,000",
      "$90,000",
      "$90,000",
      "555-5555",
    ],
    [
      "Terry Macdonald",
      "Commercial Specialist",
      "Miami",
      39,
      "$140,000",
      "$140,000",
      "$140,000",
      "555-5555",
    ],
    [
      "Justice Mccarthy",
      "Attorney",
      "Tucson",
      26,
      "$330,000",
      "$330,000",
      "$330,000",
      "555-5555",
    ],
    [
      "Silver Carey",
      "Computer Scientist",
      "Memphis",
      47,
      "$250,000",
      "$250,000",
      "$250,000",
      "555-5555",
    ],
    [
      "Franky Miles",
      "Industrial Analyst",
      "Buffalo",
      49,
      "$190,000",
      "$190,000",
      "$190,000",
      "555-5555",
    ],
    [
      "Glen Nixon",
      "Corporate Counselor",
      "Arlington",
      44,
      "$80,000",
      "$80,000",
      "$80,000",
      "555-5555",
    ],
    [
      "Gabby Strickland",
      "Business Process Consultant",
      "Scottsdale",
      26,
      "$45,000",
      "$45,000",
      "$45,000",
      "555-5555",
    ],
    [
      "Mason Ray",
      "Computer Scientist",
      "San Francisco",
      39,
      "$142,000",
      "$142,000",
      "$142,000",
      "555-5555",
    ],
  ];

  const options = {
    filterType: "dropdown",
    rowsPerPage: 10,
    selectableRows: "none",
    responsive: "standard",
    rowsPerPageOptions: [10, 25, 50, 100, 200],
    downloadOptions: { filename: name + ".csv", separator: "," },
    onRowClick: (rowData) => {
      navigate("/admin/" + module + "/" + rowData[3]);
    },
    // print: false,
    // resizableColumns: true,
    // columnOrder: [3, 2, 1, 5, 4, 6, 7, 8],
  };

  return (
    <Box component="main">
      <CssBaseline />
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={9} md={10}>
          <h2 className="col-10 px-5 pt-3">{name}</h2>
        </Grid>
        <Grid item xs={3} md={2} container justifyContent="right">
          <Button
            variant="contained"
            onClick={() => dispatch(cambiarVistaConsultaTabularAdmin())}
          >
            <AddCircleIcon />
            NUEVO
          </Button>
        </Grid>
      </Grid>

      <hr></hr>
      <Box sx={{ my: 3 }}>
        <MUIDataTable
          title={"Consulta Tabular"}
          data={data}
          columns={columns}
          options={options}
        ></MUIDataTable>
      </Box>
    </Box>
  );
};

export default ConsultaTabular;
