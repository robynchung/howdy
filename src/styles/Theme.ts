import { createTheme } from "@mui/material/styles";
import { fontFace, colors } from "constants/styles";

const theme = createTheme({
  typography: {
    fontFamily: [fontFace.text, fontFace.code].join(","),
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: fontFace.text,
          fontSize: "2em",
          color: colors.text,
        },
      },
    },
  },
});

export default theme;
