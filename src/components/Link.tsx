import styled from "styled-components";

export const Link = styled.a<{ $color?: string }>`
  color: ${({ $color, theme }) => $color ?? theme.colors.primary};
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
