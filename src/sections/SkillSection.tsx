import React from "react";
import Layout from "ui/Layout";

function SkillSection() {
  return (
    <>
      <Layout
        leftColumns={{ md: 7, sm: 4, xs: false }}
        rightColumns={{ md: 5, sm: 8, xs: 12 }}
        leftComp={<></>}
        rightComp={
          <ul>
            <li>Greater Toronto Area 519-466-4673</li>
            <li>rjungprogrammer@gmail.com</li>
            <li>https://www.linkedin.com/in/aeri-jung</li>
          </ul>
        }
      />
    </>
  );
}

export default SkillSection;
