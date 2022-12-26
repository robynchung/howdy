import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { colors, fontFace } from "constants/styles";

type Props = {
  isWeb: boolean;
};

const StyledText = styled(Typography)({
  color: colors.range,
  fontFamily: fontFace.text,
  fontWeight: 600,
  fontSize: "0.8em",

  "@media print": {
    color: colors.range,
  },
});

const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  height: "100%",
});

const StyledLink = styled("a")({
  color: colors.range,
  fontFamily: fontFace.text,
  fontWeight: 600,
  fontSize: "0.8em",
  textDecoration: "none",

  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
  },

  "@media print": {
    color: colors.blue,
  },
});

function Contact({ isWeb }: Props) {
  return (
    <StyledContainer className="print-contact">
      {!isWeb ? (
        <>
          <StyledText>Greater Toronto Area 519-466-4673</StyledText>
          <StyledText>rjungprogrammer@gmail.com</StyledText>
        </>
      ) : null}

      <StyledLink
        href="https://www.linkedin.com/in/aeri-jung"
        target="_blank"
        rel="noreferrer"
      >
        https://www.linkedin.com/in/aeri-jung
      </StyledLink>
    </StyledContainer>
  );
}

export default Contact;
