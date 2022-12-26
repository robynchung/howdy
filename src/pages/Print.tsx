import React from "react";

import NameSection from "sections/resume/Name";
import SkillSection from "sections/resume/Skill";
import ExeprienceSection from "sections/resume/Exeprience";
import EducationSection from "sections/resume/Education";
import ResumeContext from "context/ResumeContext";

import { Title } from "ui/Title";

function Print() {
  const context = React.useContext(ResumeContext.Context);

  return (
    <div ref={context}>
      <NameSection compRef={context} />
      <SkillSection />
      {/* 
      <section style={{ display: "block", margin: "30px 0 " }}>
        <Title title="Work Experience" highlight={true} />
      </section> */}

      {/* 

      <ExeprienceSection />

      <EducationSection /> */}
    </div>
  );
}

export default Print;
