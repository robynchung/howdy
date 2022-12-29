import Paragraph from "components/common/Paragraph";

import { SubContainer } from "components/Layout/Container";
import about from "data/about.json";

function About() {
  return (
    <SubContainer>
      {about.map((p) => {
        return <Paragraph>{p}</Paragraph>;
      })}
    </SubContainer>
  );
}

export default About;
