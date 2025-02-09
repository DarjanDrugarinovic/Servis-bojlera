import styled from "styled-components";
import { NavLink as RRNavLink } from "react-router-dom";

export const NavLink = styled(RRNavLink)<{ $color?: string }>`
  color: ${({ $color, theme }) => $color ?? theme.colors.primary};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
