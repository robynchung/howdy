import {
  StyledPageContainer,
  StyledPageTitleBox,
  StyledTitle,
  StyledContentBox,
} from "styles/Layout";

type Props = {
  title: string;
  contents: React.ReactElement;
};

function Page({ title, contents }: Props) {
  return (
    <StyledPageContainer>
      <StyledPageTitleBox>
        <StyledTitle>{title}</StyledTitle>
      </StyledPageTitleBox>
      <StyledContentBox>{contents}</StyledContentBox>
    </StyledPageContainer>
  );
}

export default Page;
