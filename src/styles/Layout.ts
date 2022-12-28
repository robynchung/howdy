import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

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
