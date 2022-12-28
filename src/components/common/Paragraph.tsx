import { StyledParagraph } from "styles/Paragraph";
type Props = {
  children: string;
};

function Paragraph({ children }: Props) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

export default Paragraph;
