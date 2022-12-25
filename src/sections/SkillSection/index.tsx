import React from "react";
import Layout from "ui/Layout";

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
      <Layout
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
              return <ul>{renderRow(col)}</ul>;
            })}
          </div>
        }
      />
    </>
  );
}

export default SkillSection;
