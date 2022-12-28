import React from "react";

import "./App.css";
import { useLocation, useRoutes } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import routes from "routes";

function App() {
  const location = useLocation();
  const element = useRoutes(routes);

  return (
    <PageTransition
      preset="moveToLeftFromRight"
      transitionKey={location.pathname}
      enterAnimation={"fade"}
      exitAnimation={"fade"}
    >
      {element}
    </PageTransition>
  );
}

export default App;
