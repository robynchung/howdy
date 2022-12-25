import React from "react";

// sections
import NameSection from "sections/NameSection";
import SkillSection from "sections/SkillSection";
import ExeprienceSection from "./sections/ExeprienceSection";
import { Title1 } from "ui/Title";

function App() {
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
        </div>
      </div>
    </>
  );
}

export default App;
