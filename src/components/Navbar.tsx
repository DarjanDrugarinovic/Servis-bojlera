import styled from "styled-components";
import { routes } from "router/routes";
import { NavLink as RRNavLink } from "react-router-dom";

const { home } = routes;

export const Navbar = () => {
  return (
    <StyledNav>
      <NavbarDiv>
        <NavLink to={home}>SERVIS BOJLERA</NavLink>
      </NavbarDiv>
    </StyledNav>
  );
};

export default Navbar;

export const NavLink = styled(RRNavLink)`
  text-decoration: none;
  color: white;
  font-size: 28px;
  font-weight: 700;
`;

const NavbarDiv = styled.div`
  padding: 16px 8px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.65) 0,
    rgba(0, 0, 0, 0) 100%
  );
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 700;
`;

const StyledNav = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
`;
