import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

type Props = {
  leftComp: JSX.Element | React.ReactNode;
  rightComp?: JSX.Element | React.ReactNode;
};

function Layout({ leftComp, rightComp }: Props) {
  return (
    <>
      <Grid
        container
        component="main"
        style={{ backgroundColor: "#fff", padding: 80 }}
      >
        <Grid item xs={false} sm={4} md={7} style={{ border: "solid 1px " }}>
          {leftComp}
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          {rightComp}
        </Grid>
      </Grid>
    </>
  );
}

export default Layout;
