import { StyledContainer, StyledSubContainer, StyledBox } from "styles/Layout";

import type { ContainerProps } from "types/layout";

export function Container({ children }: ContainerProps) {
  return <StyledContainer container>{children}</StyledContainer>;
}

export function SubContainer({ children }: ContainerProps) {
  return (
    <StyledSubContainer>
      <StyledBox>{children}</StyledBox>
    </StyledSubContainer>
  );
}
