import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

type Props = {
  leftComp: JSX.Element | React.ReactNode;
  rightComp?: JSX.Element | React.ReactNode;
};

const Container = styled(Grid)(() => {
  return {
    backgroundColor: "#fff",
    padding: 50,
  };
});

function Layout({ leftComp, rightComp }: Props) {
  return (
    <>
      <Container container>
        <Grid item xs={false} sm={4} md={7} style={{ border: "solid 1px " }}>
          {leftComp}
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          {rightComp}
        </Grid>
      </Container>
    </>
  );
}

export default Layout;
