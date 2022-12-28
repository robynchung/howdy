import { StyledContainer } from "styles/Layout";

import type { ContainerProps } from "types/layout";

function Container({ children }: ContainerProps) {
  return <StyledContainer container>{children}</StyledContainer>;
}

export default Container;
