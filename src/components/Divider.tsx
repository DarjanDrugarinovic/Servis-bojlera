import styled from "styled-components";

export const Divider = styled.hr<{ $color?: string; $maxWidth?: number }>`
  width: 90%;
  max-width: ${({ $maxWidth }) => ($maxWidth ? `${$maxWidth}px` : "")};
  margin-bottom: 10px;
  margin-top: 10px;
  border: 2px solid ${({ theme, $color }) => $color ?? theme.colors.primary};
  box-sizing: content-box;
  align-self: center;
`;
