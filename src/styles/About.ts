import { styled } from "@mui/system";

export const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
});

export const StyledBox = styled("div")({
  width: "70%",

  "& .MuiTypography-root": {
    textAlign: "right",
  },
});
