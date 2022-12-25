import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { colors, fontFace } from "constants/styles";

type TitleProps = {
  title: string;
};

type TitleWithOrgProps = {
  title: string;
  org: string;
};

const StyledTitle1 = styled(Typography)({
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
});

const StyledTitle2 = styled(Typography)({
  color: colors.blue,
  fontFamily: fontFace.text,
  fontWeight: 600,
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
});

function Title1({ title }: TitleProps) {
  return <StyledTitle1 variant="h2">{title}</StyledTitle1>;
}

function TitleWithOrg({ title, org }: TitleWithOrgProps) {
  return (
    <div>
      <div>
        <StyledTitle2 variant="h3">{title}</StyledTitle2>
      </div>
      <div>{org}</div>
    </div>
  );
}

export { Title1, TitleWithOrg };
