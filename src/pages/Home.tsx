import React from "react";

import NameSection from "sections/Name";
import { styled } from "@mui/system";

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  border: "solid 20px #0852ff",
  overflow: "auto",
  height: "100vh",
});

function Home() {
  return (
    <Container>
      {/* <Menu /> */}
      <NameSection />
    </Container>
  );
}

export default Home;
