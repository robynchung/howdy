import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
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
