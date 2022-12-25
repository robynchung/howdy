import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

import { colors, fontFace } from "constants/styles";

type Props = {
  name: string;
};

const StyledName = styled(Typography)({
  fontFamily: fontFace.code,
  fontWeight: 800,
  fontSize: "5em",
  color: colors.blue,
});

function Name({ name }: Props) {
  return <StyledName variant="h1">{name}</StyledName>;
}

export default Name;
