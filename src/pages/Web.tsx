import React from "react";

import NameSection from "sections/web/Name";

// sections
import Menu from "sections/web/Menu";

function Web() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* <Menu /> */}
      <NameSection />
    </div>
  );
}

export default Web;
