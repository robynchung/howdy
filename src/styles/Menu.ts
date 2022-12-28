import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/system";

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
    width: "100%",
    padding: 40,
    background: `rgba(0, 0, 0, 0)`, // will be removed
  },
});

export const StyledMenuListContainer = styled(Grid)({
  height: "100%",
});

export const StyledCloseBox = styled(Grid)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  border: "solid 1px",
});

export const StyledMenuListBox = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  border: "solid 1px",
});
