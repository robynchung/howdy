import React from "react";

import NameSection from "sections/resume/Name";
import SkillSection from "sections/resume/Skill";
import ExeprienceSection from "sections/resume/Exeprience";
import EducationSection from "sections/resume/Education";

import { Title1 } from "ui/Title";

function Print() {
  const componentRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={componentRef}>
        <div className="container">
          <NameSection compRef={componentRef} />

          <SkillSection />

          <section style={{ display: "block", margin: "30px 0 " }}>
            <Title1 title="Work Experience" />
          </section>

          <ExeprienceSection />

          <EducationSection />
        </div>
      </div>
    </>
  );
}

export default Print;
