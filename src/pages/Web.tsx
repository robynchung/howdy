import React from "react";

import NameSection from "sections/web/Name";
import { styled } from "@mui/system";

// sections
import Menu from "sections/web/Menu";

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  border: "solid 20px #0852ff",
  overflow: "auto",
  height: "100vh",
});

function Web() {
  return (
    <Container>
      {/* <Menu /> */}
      <NameSection />
    </Container>
  );
}

export default Web;
