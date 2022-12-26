import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { colors, fontFace } from "constants/styles";

const StyledRange = styled(Typography)({
  color: colors.range,
  fontFamily: fontFace.text,
  fontWeight: 600,
  fontSize: "0.8em",
});

const StyledDegree = styled(Typography)({
  color: colors.text,
  fontFamily: fontFace.text,
  fontWeight: 600,
  fontSize: "0.9em",
});

type RangeProps = {
  location: string;
  time: string;
};

type EduProps = {
  degree: string;
  gpa: string;
};

function Range({ location, time }: RangeProps) {
  return (
    <div style={{ marginTop: 20 }}>
      <StyledRange>{location}</StyledRange>
      <StyledRange>{time}</StyledRange>
    </div>
  );
}

function Edu({ degree, gpa }: EduProps) {
  return (
    <div style={{ marginTop: 20 }}>
      <StyledDegree>{degree}</StyledDegree>
      <StyledRange>{gpa}</StyledRange>
    </div>
  );
}

export { Range, Edu };
