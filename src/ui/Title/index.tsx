import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { colors, fontFace } from "constants/styles";

type TitleProps = {
  title: string;
  highlight?: boolean | undefined;
};

type StyledTitleProps = {
  highlight?: boolean | string;
};

const StyledTitle1 = styled(Typography)((props: StyledTitleProps) => {
  const highlight = props.highlight;

  return {
    display: "inline-block",
    backgroundColor: highlight ? colors.highlight : "",
    color: colors.blue,
    fontFamily: fontFace.text,
    fontWeight: 800,
    fontSize: "1em",
    position: "relative",

    "&::after": {
      left: 0,
      position: "absolute",
      content: `""`,
      width: 70,
      height: 20,
      bottom: -20,
      marginBottom: 10,
      borderBottom: `solid 3px ${colors.blue}`,
      color: "red",
    },
  };
});

function Title({ title, highlight }: TitleProps) {
  return (
    <StyledTitle1 highlight={highlight || undefined} variant="h2">
      {title}
    </StyledTitle1>
  );
}

export { Title };
