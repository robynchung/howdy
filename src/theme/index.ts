import { createTheme } from "@mui/material/styles";
import { fontFace, colors } from "constants/styles";

const theme = createTheme({
  typography: {
    fontFamily: [fontFace.text, fontFace.code].join(","),
  },

  components: {
    // global style
    MuiCssBaseline: {
      styleOverrides: (theme) => `
        * { 
          transition: all 0.5s ease-in-out;
        }
      `,
    },

    MuiTypography: {
      styleOverrides: {
        body1: {
          lineHeight: 1.8,
        },
        root: {
          fontFamily: fontFace.text,
          fontSize: "2em",
          color: colors.text,
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: colors.blue,
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
