import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

type Columns = {
  lg?: number | boolean;
  md?: number | boolean;
  sm?: number | boolean;
  xs?: number | boolean;
};

type Props = {
  leftComp: JSX.Element | React.ReactNode;
  leftColumns: Columns;
  rightComp?: JSX.Element | React.ReactNode;
  rightColumns?: Columns;
};

const Container = styled(Grid)(() => {
  return {
    backgroundColor: "#fff",
  };
});

function Layout({ leftComp, rightComp, leftColumns, rightColumns }: Props) {
  return (
    <section>
      <Container container>
        <Grid item {...leftColumns} style={{ border: "solid 1px " }}>
          {leftComp}
        </Grid>
        <Grid item {...rightColumns}>
          {rightComp}
        </Grid>
      </Container>
    </section>
  );
}

export default Layout;
