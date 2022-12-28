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
    <StyledPageContainer>
      <StyledPageTitleBox>
        <StyledTitle>{title}</StyledTitle>
      </StyledPageTitleBox>
      <div>{contents}</div>
    </StyledPageContainer>
  );
}

export default Page;
