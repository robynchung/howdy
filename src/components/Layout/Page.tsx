import Grid from "@mui/material/Grid";

import {
  StyledPageContainer,
  StyledPageTitleBox,
  StyledTitle,
} from "styles/Layout";

type Props = {
  title: string;
  contents: React.ReactElement;
};

function Page({ title, contents }: Props) {
  return (
    <StyledPageContainer container spacing={5}>
      <StyledPageTitleBox item md={5} xs={12}>
        <StyledTitle>{title}</StyledTitle>
      </StyledPageTitleBox>
      <Grid item md={7} xs={12}>
        {contents}
      </Grid>
    </StyledPageContainer>
  );
}

export default Page;
