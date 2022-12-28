import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { colors } from "constants/styles";

export const StyledContainer = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
  border: "solid 20px #0852ff",
  overflow: "auto",
  height: "100vh",
});

// pages
export const StyledPageContainer = styled("div")(({ theme }) => {
  return {
    padding: 25,
    minHeight: "65%",
    width: "100%",
  };
});

export const StyledPageTitleBox = styled("div")(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 50,

    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
    },
  };
});

export const StyledTitle = styled("span")(({ theme }) => {
  return {
    borderBottom: `solid 10px ${colors.blue}`,
    minWidth: 300,
    textAlign: "right",
    fontSize: "3em",
    fontWeight: 800,
    color: colors.blue,
    height: 90,

    [theme.breakpoints.down("md")]: {
      fontSize: "2em",
      minWidth: "100%",
      height: 70,
    },
  };
});
