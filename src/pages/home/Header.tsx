import { Link } from "components/Link";
import { P1, P3 } from "components/Paragraphs";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderDiv>
      <H1>BEOGRAD</H1>
      <Hr />
      <Link href="tel:0601881020">
        <P1 $color="white">060/188-10-20</P1>
      </Link>
      <br />
      <P3 $color="white">PROFESIONALNO, POVOLJNO I PEDANTNO</P3>
      <br />
      <P1 $color="white">HITNE INTERVENCIJE</P1>
      <br />
      <P1 $color="white">00-24</P1>
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
  font-weight: 500;
  line-height: 1.2;
`;

const Hr = styled.hr`
  width: 100%;
  border-color: #fff;
  border-width: 3px;
  margin: 20px 0;
  border: 2px solid #fff;
`;
