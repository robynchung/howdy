import React from "react";
import Web from "pages/Web";
import Print from "pages/Print";
import ResumeContext from "context/ResumeContext";

// sections
import Menu from "sections/web/Menu";

function App() {
  return (
    <ResumeContext.Provider>
      <>
        <Web />
        <Print />
      </>
    </ResumeContext.Provider>
  );
}

export default App;
