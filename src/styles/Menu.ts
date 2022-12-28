import Grid from "@mui/material/Grid";
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
