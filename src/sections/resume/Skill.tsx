import React from "react";
import Section from "ui/Layout/Section";

import { ListItem } from "ui/List/ListItem";
import { Title } from "ui/Title";
import skills from "contents/skils.json";
import highlight from "contents/hightlight.json";

function SkillSection() {
  const renderRow = (col: Array<string>) => {
    return col.map((row: string) => {
      return (
        <ListItem
          key={row}
          row={row}
          hightlight={highlight.skills.includes(row)}
        />
      );
    });
  };

  return (
    <Section
      leftColumns={{ xs: 2 }}
      rightColumns={{ xs: 10 }}
      leftComp={<Title title="Skills" highlight={false} />}
      rightComp={
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {Object.entries(skills).map(([key, values]) => {
            return <ul key={key}>{renderRow(values)}</ul>;
          })}
        </div>
      }
    />
  );
}

export default SkillSection;
