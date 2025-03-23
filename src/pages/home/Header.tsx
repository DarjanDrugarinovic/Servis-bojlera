import { Link } from "components/Link";
import { P3 } from "components/Paragraphs";
import styled from "styled-components";
import { PLACES } from "config/contstants";
import { PHONES } from "config/contstants";
import { location } from "config/env";

export const Header = () => {
  return (
    <HeaderDiv>
      <H1>{PLACES[location]}</H1>
      <Hr />
      <br />
      <Link href="tel:0601881020">
        <P36 $color="white">{PHONES[location]}</P36>
      </Link>
      <br />
      <P3 $color="white">PROFESIONALNO, POVOLJNO I PEDANTNO</P3>
      <br />
      <P3 $color="white">HITNE INTERVENCIJE</P3>
      <br />
      <P36 $color="white">00-24</P36>
    </HeaderDiv>
  );
};

export const P36 = styled.p<{ $color: string }>`
  font-size: 36px;
  color: ${({ $color }) => $color};
`;

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
