import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { colors } from "constants/styles";

export const StyledTitle = styled(Typography)(({ theme }) => {
  return {
    color: colors.range,
    fontSize: 13,
    marginBottom: 20,
    position: "relative",
  };
});
