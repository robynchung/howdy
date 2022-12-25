import React from "react";
import ReactToPrint from "react-to-print";
import Layout from "ui/Layout";
import Name from "ui/Name";

type Props = {
  compRef: {
    current: HTMLDivElement | null;
  };
};

function NameSection({ compRef }: Props) {
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
      <Layout
        leftColumns={{ md: 7, sm: 4, xs: false }}
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

export default NameSection;
