import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { colors, fontFace } from "constants/styles";

import cursor from "assets/cursor.png";

type Props = {
  isWeb: boolean;
};

const StyledText = styled(Typography)({
  color: colors.range,
  fontFamily: fontFace.text,
  fontWeight: 600,
  fontSize: "0.8em",
});

const StyledContainer = styled("div")({
  display: "flex",
  alignItems: "center",
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
});

function Contact({ isWeb }: Props) {
  return (
    <StyledContainer>
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
