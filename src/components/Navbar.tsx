import styled from "styled-components";
import { routes } from "router/routes";
import { NavLink } from "./NavLink";
import { P3, P4 } from "./Paragraphs";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const { home, about, contact } = routes;

export const Navbar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <NavbarPlaceholder>
      <NavbarDiv>
        <NavbarContentDiv>
          <StyledNavLink to={home}>
            <P3 $color="white">SERVIS BOJLERA</P3>
          </StyledNavLink>
          <RightDiv>
            <StyledNavLink to={about}>
              <P4 $color="white">O NAMA</P4>
            </StyledNavLink>{" "}
            <StyledNavLink to={contact}>
              <P4 $color="white">KONTAKT</P4>
            </StyledNavLink>
          </RightDiv>
        </NavbarContentDiv>
      </NavbarDiv>
    </NavbarPlaceholder>
  );
};

export default Navbar;

const RightDiv = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const NavbarContentDiv = styled.div`
  padding: 16px 8px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.65) 0,
    rgba(0, 0, 0, 0) 100%
  );
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavbarPlaceholder = styled.div`
  height: 67px;
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
`;

const NavbarDiv = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 2147483647;

  background-color: ${({ theme }) => theme.colors.primary};
`;
