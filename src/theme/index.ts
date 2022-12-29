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

        ul, li {
          margin: 0;
          padding: 0;
        }

        li {
          list-style: none;
        }
      `,
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: colors.blue,
            fontWeight: 800,
          },
        },
      },
    },

    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.03)",
          fontSize: "0.9em",

          "&::after": {
            borderBottom: `solid 3px ${colors.blue}`,
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        body1: {
          lineHeight: 1.8,
        },
        h3: {
          color: colors.blue,
          fontWeight: 800,
          fontSize: "1.2em",
          border: `solid 3px ${colors.blue}`,
          padding: 10,
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
          cursor: "pointer",

          "&:hover": {
            color: colors.text,
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: colors.blue,
          color: colors.blue,
          textTransform: "none",

          "&:hover": {
            color: colors.text,
            borderColor: colors.text,
            "& .MuiSvgIcon-root": {
              color: colors.text,
            },
          },
        },

        sizeSmall: {
          fontSize: 11,
        },
      },
    },
  },
});

export default theme;
