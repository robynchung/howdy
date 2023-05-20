import Grid from "@mui/material/Grid";
import Title from "components/common/Title";

import { StyledList } from "styles/Skills";
import { refineHighlight } from "utils/convert";

import skills from "data/skills.json";

type SkillType = {
  title: string;
  list: string[];
};

function Skills() {
  const renderList = (list: Array<string>) => {
    return list.map((item) => {
      const replaced = refineHighlight(item);

      return <li key={item} dangerouslySetInnerHTML={{ __html: replaced }} />;
    });
  };

  return (
    <Grid container spacing={8}>
      {skills.map((skill: SkillType) => {
        return (
          <Grid key={skill.title} item md={4} xs={12}>
            <Title>{skill.title}</Title>
            <StyledList>{renderList(skill.list)}</StyledList>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Skills;
