import Typewriter from "typewriter-effect";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

import { colors, fontFace } from "constants/styles";

const StyledName = styled("span")(({ theme }) => {
  return {
    fontFamily: fontFace.code,
    fontWeight: 800,
    letterSpacing: "-0.04em",
    fontSize: "4.2em",
    color: colors.blue,
    textAlign: "right",

    [theme.breakpoints.down("md")]: {
      fontSize: "2.8em",
      textAlign: "center",
    },
  };
});

const StyledNameBox = styled(Grid)(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "right",
    flexDirection: "column",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  };
});

const StyledAnimationTxt = styled("div")(({ theme }) => {
  return {
    textAlign: "right",
    fontWeight: 800,
    color: colors.blue,

    "& .Typewriter__wrapper": {
      width: "100%",
      backgroundColor: colors.highlight,
    },

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  };
});

const StyledIntroBox = styled(Grid)(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  };
});

const StyledAbout = styled(Typography)(({ theme }) => {
  return {
    color: colors.range,
    fontSize: 13,

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      padding: 30,
    },
  };
});

const currentYear = new Date();

function Home() {
  return (
    <Grid container spacing={4}>
      <StyledNameBox item md={6} xs={12}>
        <StyledName>Aeri Jung</StyledName>
        <StyledAnimationTxt>
          <Typewriter
            options={{
              strings: [
                "I do Front-end",
                "also Back-end",
                "so ...",
                "I do Full-Stack!",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 100,
            }}
          />
        </StyledAnimationTxt>
      </StyledNameBox>
      <StyledIntroBox item md={6} xs={12}>
        <StyledAbout>
          {currentYear.getFullYear() - 2019}+ years of experience in frontend
          development.
          <br />
          My mission is to design and develop a website that you and your
          audience love.
        </StyledAbout>
      </StyledIntroBox>
    </Grid>
  );
}

export default Home;
