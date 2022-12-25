import { styled } from "@mui/system";
import { colors, fontFace } from "constants/styles";

type Props = {
  row: string;
  hightlight?: boolean;
};

type StyledCompProps = {
  hightlight?: boolean;
};

const StyledListItem = styled("li")((props: StyledCompProps) => {
  const highlight = props.hightlight;

  return {
    backgroundColor: highlight ? colors.highlight : "",
    backgroundRepeat: "no-repeat",
    color: colors.text,
    fontFamily: fontFace.text,
    fontSize: "0.8em",
    fontWeight: highlight ? 800 : 400,
    margin: "4px 0",
    position: "relative",
    zIndex: 1,

    "&::before": {
      content: '"- "',
      marginRight: 5,
    },

    "&::after": {
      content: `""`,
    },
  };
});

function ListItem({ row, hightlight }: Props) {
  return <StyledListItem hightlight={hightlight}>{row}</StyledListItem>;
}

export default ListItem;
