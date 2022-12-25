import Section from "ui/Layout/Section";

import { ListItemExp } from "ui/List/ListItem";
import { TitleWithOrg } from "ui/Title";

import exp from "contents/experience.json";

function ExeprienceSection() {
  const formatRow = (row: string) => {
    let initRow = row
      .replace(/\[\[/g, `<span class="_bold">`)
      .replace(/\]\]/g, "</span>");

    return <ListItemExp row={initRow} />;
  };

  return (
    <>
      {exp.map((experience) => {
        return (
          <Section
            leftColumns={{ xs: 2 }}
            rightColumns={{ xs: 10 }}
            leftComp={
              <>
                <TitleWithOrg
                  title={experience.title}
                  org={experience.org}
                  range={{
                    location: experience.range.location,
                    time: experience.range.time,
                  }}
                />
              </>
            }
            rightComp={
              <div>
                <ul>
                  {experience.details.map((row) => {
                    return formatRow(row);
                  })}
                </ul>
              </div>
            }
          />
        );
      })}
    </>
  );
}

export default ExeprienceSection;
