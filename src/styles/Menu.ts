import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/system";

import { colors } from "constants/styles";

export const StyledFloatContainer = styled("div")({
  position: "absolute",
  top: 20,
  right: 20,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
});

export const StyledIconContainer = styled(Grid)({
  marginRight: 25,
});

export const StyledButton = styled(Button)({
  marginBottom: 4,
});

export const StyledButtonBox = styled(Grid)({
  display: "flex",
  alignItems: "center",
});

export const StyledDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    border: `solid 20px ${colors.blue}`,
    width: "100%",
    padding: 40,
    // background: `rgba(0, 0, 0, 0)`, // will be removed
  },
});

export const StyledCloseBox = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  // border: "solid 1px",
});

export const StyledMenuListBox = styled("div")({
  // border: "solid 1px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "& a": {
    textDecoration: "none",
    fontSize: 20,
    padding: 20,
    fontWeight: 800,
    color: colors.blue,
    position: "relative",

    "&::after": {
      transition: "0.5s ease-in-out",
      content: `""`,
      width: 0,
      borderBottom: "solid 3px",
      height: 3,
      position: "absolute",
      bottom: 17,
      left: 0,
    },

    "&:hover": {
      "&::after": {
        width: "100%",
      },
    },
  },
});
