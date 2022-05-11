import { createTheme } from "@mui/material/styles";
import { esES } from "@mui/material/locale";

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#004236",
      },
      secondary: {
        main: "#F7DB17",
      },
      thirdy: {
        main: "#BAD405",
      },
      orange: {
        main: "#FF5F00",
      },
      grey: {
        main: "#B5B0AD",
      },
      black: {
        main: "#403B33",
      },
      error: {
        main: "#EF5350",
      },
      success: {
        main: "#4CAF50",
      },
      white: {
        main: "#FFFFFF",
      },
    },
    typography: {
      fontSize: 14,
    },
  },
  esES
);

export default theme;
