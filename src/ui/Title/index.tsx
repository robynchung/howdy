import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { colors, fontFace } from "constants/styles";
import { Range, Edu } from "./Info";

type TitleProps = {
  title: string;
  highlight?: boolean | undefined;
};

type TitleWithOrgProps = {
  title: string;
  org: string;
  range?: {
    location: string;
    time: string;
  };
  edu?: {
    degree: string;
    gpa: string;
  };
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

const StyledTitle2 = styled(Typography)({
  color: colors.blue,
  fontFamily: fontFace.text,
  fontWeight: 700,
  fontSize: "1em",
});

const StyledOrg = styled(Typography)({
  color: colors.text,
  fontFamily: fontFace.text,
  fontWeight: 700,
  fontSize: "0.9em",
});

function Title({ title, highlight = false }: TitleProps) {
  return (
    <StyledTitle1 highlight={Boolean(highlight)} variant="h2">
      {title}
    </StyledTitle1>
  );
}

function TitleWithOrg({ title, org, range, edu }: TitleWithOrgProps) {
  return (
    <div>
      <StyledTitle2 variant="h3">{title}</StyledTitle2>
      <StyledOrg>{org}</StyledOrg>

      {range ? <Range location={range?.location} time={range.time} /> : null}
      {edu ? <Edu degree={edu.degree} gpa={edu.gpa} /> : null}
    </div>
  );
}

export { Title, TitleWithOrg };
