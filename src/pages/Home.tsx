import Typewriter from "typewriter-effect";
import Grid from "@mui/material/Grid";

import {
  StyledName,
  StyledNameBox,
  StyledAnimationTxt,
  StyledIntroBox,
  StyledAbout,
} from "styles/Home";

import { getExpNum } from "utils/convert";

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
          {getExpNum()}+ years of experience in frontend development.
          <br />
          My mission is to design and develop a website that you and your
          audience love.
        </StyledAbout>
      </StyledIntroBox>
    </Grid>
  );
}

export default Home;
