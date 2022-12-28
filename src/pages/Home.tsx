import Typewriter from "typewriter-effect";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

import { colors, fontFace } from "constants/styles";

const StyledName = styled(Typography)(({ theme }) => {
  return {
    fontFamily: fontFace.code,
    fontWeight: 800,
    letterSpacing: "-0.04em",
    fontSize: "4.2em",
    color: colors.blue,

    [theme.breakpoints.down("sm")]: {
      fontSize: "2.8em",
    },
  };
});

const StyledNameBox = styled(Grid)(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "right",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  };
});

const currentYear = new Date();

function Home() {
  return (
    <Grid container>
      <StyledNameBox item sm={6} xs={12}>
        <StyledName>
          <Typewriter
            options={{
              strings: [
                "Aeri Jung",
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
        </StyledName>
      </StyledNameBox>
      <Grid item sm={6}>
        <p>
          {currentYear.getFullYear() - 2019}+ years of experience in frontend
          development.
          <br />
          My mission is to design and develop a website that you and your
          audience love.
        </p>
      </Grid>
    </Grid>
  );
}

export default Home;
