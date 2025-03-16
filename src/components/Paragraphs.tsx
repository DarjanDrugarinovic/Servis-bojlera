import styled from "styled-components";

const P = styled.p<{ $color?: string }>`
  color: ${({ $color, theme }) => $color ?? theme.colors.primary};
  text-align: center;
  text-transform: uppercase;
`;

export const P1 = styled(P)`
  font-size: 36px;
  font-weight: 700;
`;

export const P2 = styled(P)`
  font-size: 30px;
  font-weight: 600;
`;

export const P3 = styled(P)`
  font-size: 24px;
  font-weight: 400;
`;

export const P4 = styled(P)`
  font-size: 20px;
  font-weight: 400;
`;
