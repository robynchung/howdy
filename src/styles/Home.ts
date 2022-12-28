import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

import { colors, fontFace } from "constants/styles";

export const StyledName = styled("span")(({ theme }) => {
  return {
    fontFamily: fontFace.code,
    fontWeight: 800,
    letterSpacing: "-0.04em",
    fontSize: "4.2em",
    color: colors.blue,
    textAlign: "right",

    [theme.breakpoints.down("md")]: {
      fontSize: "2.8em",
      textAlign: "center",
    },
  };
});

export const StyledNameBox = styled(Grid)(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "right",
    flexDirection: "column",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  };
});

export const StyledAnimationTxt = styled("div")(({ theme }) => {
  return {
    textAlign: "right",
    fontWeight: 800,
    color: colors.blue,

    "& .Typewriter__wrapper": {
      width: "100%",
      backgroundColor: colors.highlight,
    },

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  };
});

export const StyledIntroBox = styled(Grid)(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  };
});

export const StyledAbout = styled(Typography)(({ theme }) => {
  return {
    color: colors.range,
    fontSize: 13,

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      padding: 30,
    },
  };
});
