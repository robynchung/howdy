import React from "react";
import { styled } from "@mui/system";

import NameSection from "ui/component/Name";

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
      <NameSection />
    </Container>
  );
}

export default Home;
