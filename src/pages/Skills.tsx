import Grid from "@mui/material/Grid";
import Title from "components/common/Title";

import { StyledList } from "styles/Skills";

function Skills() {
  return (
    <Grid container spacing={8}>
      <Grid item md={4} xs={12}>
        <Title>Frameworks & Technologies</Title>
        <StyledList>
          <li>
            <span className="highlight">React / Redux / Recoil </span>
          </li>
          <li>
            <span className="highlight">React Native</span>
          </li>
          <li>
            <span className="highlight">Node.js</span>
          </li>
          <li>
            <span className="highlight">Serverless framework</span>
          </li>
          <li>Google Firebase</li>
          <li>Webpack</li>
        </StyledList>
      </Grid>

      <Grid item md={4} xs={12}>
        <Title>Languages & Tools</Title>
        <StyledList>
          <li>
            <span className="highlight">Javascript(ES6+)</span>
          </li>
          <li>
            <span className="highlight">Amazon AWS / DynamoDB / RDS</span>
          </li>
          <li>
            <span className="highlight">Typescript</span>
          </li>
          <li>Python</li>

          <li>HTML5 </li>
          <li>CSS3 / SCSS</li>

          <li>Firebase</li>
        </StyledList>
      </Grid>

      <Grid item md={4} xs={12}>
        <Title>Personality traits</Title>
        <StyledList>
          <li>Work independently</li>
          <li>Self-Starter</li>
          <li>Hard working</li>
          <li>Team oriented </li>
          <li>Adapt and learn rapidly evolving tech stack </li>
        </StyledList>
      </Grid>
    </Grid>
  );
}

export default Skills;
