import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

import { colors, fontFace } from "constants/styles";

type Props = {
  name: string;
};

const StyledName = styled(Typography)(({ theme }) => {
  return {
    fontFamily: fontFace.code,
    fontWeight: 800,
    letterSpacing: "-0.04em",
    fontSize: "4.2em",
    color: colors.blue,

    [theme.breakpoints.down("sm")]: {
      fontSize: "3em",
    },

    "@media print": {
      fontSize: "43pt",
      letterSpacing: "-0.04em",
      marginLeft: "10pt",
    },
  };
});

function Name({ name }: Props) {
  return <StyledName variant="h1">{name}</StyledName>;
}

export default Name;
