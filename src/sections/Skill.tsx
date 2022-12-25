import React from "react";
import Section from "ui/Layout/Section";

import { ListItem } from "ui/List/ListItem";
import { Title1 } from "ui/Title";
import skills from "contents/skils.json";
import highlight from "contents/hightlight.json";

function SkillSection() {
  const renderRow = (col: Array<string>) => {
    return col.map((row: string) => {
      return <ListItem row={row} hightlight={highlight.skills.includes(row)} />;
    });
  };

  return (
    <>
      <Section
        leftColumns={{ xs: 2 }}
        rightColumns={{ xs: 10 }}
        leftComp={
          <>
            <Title1 title="Skills" />
          </>
        }
        rightComp={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {skills.map((col) => {
              return <ul style={{ border: "solid 1px" }}>{renderRow(col)}</ul>;
            })}
          </div>
        }
      />
    </>
  );
}

export default SkillSection;
