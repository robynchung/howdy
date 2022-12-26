import React from "react";

import NameSection from "sections/resume/Name";
import SkillSection from "sections/resume/Skill";
import ExeprienceSection from "sections/resume/Exeprience";
import EducationSection from "sections/resume/Education";
import ReactToPrint from "react-to-print";

import { Title1 } from "ui/Title";

const PrintContext = React.createContext({});

function Print() {
  const componentRef = React.useRef<HTMLDivElement>(null);

  const pageStyle = `
  @page { 
    margin: 0;
  }

  @media print {
    html {
      border: solid 10pt #0852ff;
    }

    .container {
      border: none
    }
  }
`;

  return (
    <div ref={componentRef}>
      <PrintContext.Provider value={{ compRef: componentRef }}>
        <ReactToPrint
          pageStyle={pageStyle}
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
        {/* 
        <NameSection compRef={componentRef} />

        <SkillSection />

        <section style={{ display: "block", margin: "30px 0 " }}>
          <Title1 title="Work Experience" highlight={true} />
        </section>

        <ExeprienceSection />

        <EducationSection />
      </div> */}
      </PrintContext.Provider>
    </div>
  );
}

export default Print;
