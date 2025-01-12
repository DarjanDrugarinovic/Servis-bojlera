import { Link } from "components/Link";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderDiv>
      <H1>BEOGRAD</H1>
      <Hr />
      <br />
      <BigParagraph>
        <Link href="tel:0601881020">060/188-10-20</Link>
      </BigParagraph>
      <br />
      <SmallParagraph>PROFESIONALNO, POVOLJNO I PEDANTNO</SmallParagraph>
      <br />
      <SmallParagraph>HITNE INTERVENCIJE</SmallParagraph>
      <br />
      <BigParagraph>00-24</BigParagraph>
      <Hr />
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
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

const BigParagraph = styled.p`
  font-size: 36px;
  font-weight: 400;
  line-height: 1.5;
`;

const SmallParagraph = styled.p`
  font-size: 24px;
`;
