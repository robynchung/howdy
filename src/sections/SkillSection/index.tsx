import React from "react";
import Layout from "ui/Layout";

function SkillSection() {
  return (
    <>
      <Layout
        leftColumns={{ xs: 2 }}
        rightColumns={{ xs: 10 }}
        leftComp={<>Skills</>}
        rightComp={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ul>
              <li>React / Redux / Recoil </li>
              <li>React Native </li> <li>Javascript / ES6+ </li>
              <li>Amazon AWS / DynamoDB </li>
              <li>Serverless framework </li>
              <li>Node.js </li>
              <li>Google Firebase / MySQL </li>
              <li>Webpack</li>
            </ul>
            <ul>
              <li>HTML5 /CSS3 / SCSS</li>
              <li>JQuery/JSON</li>
              <li>Github / GitLab / Bitbucket / Jira</li>
              <li>Agile Project Management Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Flash</li>
            </ul>

            <ul>
              <li>- Work independently - Self-Starter</li>
              <li>- Hard working</li>
              <li>- Team oriented</li>
              <li>- Adapt and learn rapidly evolving tech stack</li>
            </ul>
          </div>
        }
      />
    </>
  );
}

export default SkillSection;
