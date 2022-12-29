import { StyledParagraph } from "styles/Paragraph";

type Props = {
  children: React.ReactNode | string;
};

type TransformProps = {
  content: string;
};

export function Paragraph({ children }: Props) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

export function TransformedParagraph({ content }: TransformProps) {
  return <StyledParagraph dangerouslySetInnerHTML={{ __html: content }} />;
}

export default Paragraph;
