import Section from "ui/Layout/Section";

import { Title1, TitleWithOrg } from "ui/Title";
import edu from "contents/education.json";

function EducationSection() {
  return (
    <>
      <Section
        leftColumns={{ xs: 2 }}
        rightColumns={{ xs: 10 }}
        leftComp={
          <>
            <Title1 title="Education" />
          </>
        }
        rightComp={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {edu.map((education) => {
              return (
                <ul key={education.major}>
                  <TitleWithOrg
                    title={education.major}
                    org={education.school}
                    edu={{ degree: education.degree, gpa: education.gpa }}
                  />
                </ul>
              );
            })}
          </div>
        }
      />
    </>
  );
}

export default EducationSection;
