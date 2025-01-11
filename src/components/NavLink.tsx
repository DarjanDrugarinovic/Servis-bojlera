import styled from "styled-components";
import { NavLink as RRNavLink } from "react-router-dom";

export const NavLink = styled(RRNavLink)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
