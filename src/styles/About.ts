import { styled } from "@mui/system";

export const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
});

export const StyledBox = styled("div")(({ theme }) => {
  return {
    width: "70%",

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },

    "& .MuiTypography-root": {
      textAlign: "right",

      [theme.breakpoints.down("md")]: {
        textAlign: "left",
      },
    },
  };
});
