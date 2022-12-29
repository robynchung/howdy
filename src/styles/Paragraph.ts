import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { colors } from "constants/styles";

export const StyledParagraph = styled(Typography)(({ theme }) => {
  return {
    color: colors.range,
    fontSize: 13,
    marginBottom: 20,
    position: "relative",

    "& .highlight": {
      fontWeight: 800,
      color: colors.text,
      background:
        "linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(255,255,255,0) 59%, rgba(250,233,0,1) 60%, rgba(250,233,0,1) 100%)",
    },
  };
});
