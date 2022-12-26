import React from "react";
import Section from "ui/Layout/Section";
import Name from "ui/Title/Name";
import Contact from "ui/component/Contact";

type Props = {
  compRef: {
    current: HTMLDivElement | null;
  };
};

function NameSection({ compRef }: Props) {
  return (
    <>
      <Section
        leftColumns={{ md: 7, sm: 4 }}
        rightColumns={{ md: 5, sm: 8, xs: 12 }}
        leftComp={<Name name="<Aeri Jung />" />}
        rightComp={<Contact isWeb={false} />}
      />
    </>
  );
}

export default NameSection;
