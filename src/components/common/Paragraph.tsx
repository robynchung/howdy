import { StyledParagraph } from "styles/Paragraph";
type Props = {
  children: React.ReactNode;
};

function Paragraph({ children }: Props) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

export default Paragraph;
