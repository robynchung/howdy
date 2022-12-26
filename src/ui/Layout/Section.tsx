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

const Section = styled("section")({
  width: "100%",
});

const StyledGrid = styled(Grid)({
  justifyContent: "center",
  width: "100%",
});

function Layout({ leftComp, rightComp, leftColumns, rightColumns }: Props) {
  return (
    <Section>
      <Grid container spacing={3}>
        <StyledGrid item {...leftColumns}>
          {leftComp}
        </StyledGrid>
        <StyledGrid item {...rightColumns}>
          {rightComp}
        </StyledGrid>
      </Grid>
    </Section>
  );
}

export default Layout;
