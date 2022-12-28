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

    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: colors.blue,
          color: colors.blue,
          textTransform: "none",
        },

        sizeSmall: {
          fontSize: 11,
        },
      },
    },
  },
});

export default theme;
