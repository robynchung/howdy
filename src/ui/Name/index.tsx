import { styled } from "@mui/system";
import { colors } from "constants/styles";

type Props = {
  name: string;
};

const StyledName = styled("span")({
  fontFamily: "Source Code Pro",
  fontWeight: 800,
  fontSize: "5em",
  color: colors.blue,
});

function Name({ name }: Props) {
  return <StyledName>{name}</StyledName>;
}

export default Name;
