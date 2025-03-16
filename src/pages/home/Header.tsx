import { Link } from "components/Link";
import { P1, P2, P3 } from "components/Paragraphs";
import styled from "styled-components";
import env, { LOCATIONS } from "config/env";

const { LOCATION } = env;

const locationName = (location: string) => {
  if (location === LOCATIONS.BEOGRAD) return "BEOGRAD";
  if (location === LOCATIONS.VRACAR) return "VRAČAR";
  if (location === LOCATIONS.STARI_GRAD) return "STARI GRAD";
};

export const Header = () => {
  return (
    <HeaderDiv>
      <H1>{locationName(LOCATION)}</H1>
      <Hr />
      <br />
      <Link href="tel:0601881020">
        <P1 $color="white">060/188-10-20</P1>
      </Link>
      <br />
      <P3 $color="white">PROFESIONALNO, POVOLJNO I PEDANTNO</P3>
      <br />
      <P2 $color="white">HITNE INTERVENCIJE</P2>
      <br />
      <P3 $color="white">00-24</P3>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 24px 16px 32px 16px;
`;

const H1 = styled.h1`
  font-size: 42px;
  font-weight: bold;
  line-height: 1.2;
`;

const Hr = styled.hr`
  width: 100%;
  border-color: #fff;
  border-width: 3px;
  margin: 20px 0;
  border: 2px solid #fff;
`;
