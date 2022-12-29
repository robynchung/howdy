import { TransformedParagraph } from "components/common/Paragraph";

import { SubContainer } from "components/Layout/Container";
import { refineHightlight, getExpNum } from "utils/convert";
import about from "data/about.json";

function About() {
  const renderParagraph = (para: string) => {
    const replaced = refineHightlight(para).replace(
      "expNum",
      `${getExpNum()}+`
    );

    return <TransformedParagraph key={replaced} content={replaced} />;
  };

  return (
    <SubContainer>
      {about.map((p) => {
        return renderParagraph(p);
      })}
    </SubContainer>
  );
}

export default About;
