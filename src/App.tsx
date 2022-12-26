import React from "react";
import ReactToPrint from "react-to-print";
import Web from "pages/Web";
import Print from "pages/Print";

// sections
import Menu from "sections/web/Menu";

const PrintContext = React.createContext({});

function App() {
  return <Web />;
}

export default App;
