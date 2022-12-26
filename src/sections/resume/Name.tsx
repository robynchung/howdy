import React from "react";
import ReactToPrint from "react-to-print";
import Section from "ui/Layout/Section";
import Name from "ui/Title/Name";
import Contact from "ui/component/Contact";

type Props = {
  compRef: {
    current: HTMLDivElement | null;
  };
};

function NameSection({ compRef }: Props) {
  console.log({ compRef });
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
    <>
      <Section
        leftColumns={{ md: 7, sm: 4 }}
        rightColumns={{ md: 5, sm: 8, xs: 12 }}
        leftComp={
          <>
            <Name name="<Aeri Jung />" />
            <ReactToPrint
              pageStyle={pageStyle}
              trigger={() => <button>Print this out!</button>}
              content={() => compRef.current}
            />
          </>
        }
        rightComp={<Contact isWeb={false} />}
      />
    </>
  );
}

export default NameSection;
