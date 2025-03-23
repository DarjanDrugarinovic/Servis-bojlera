import { Layout } from "components/Layout";
import { Link } from "components/Link";
import { P2, P3 } from "components/Paragraphs";
import { Section } from "components/Section";
import { PHONES } from "config/contstants";
import { location } from "config/env";
import styled from "styled-components";

export const Contact = () => {
  return (
    <StyledLayout>
      <ContactDiv>
        <Section text={["KONTAKT"]} />
        <InformationsDiv>
          <InformationDiv>
            <P2>Adresa</P2>
            <P3>Brsjačka 34</P3>
          </InformationDiv>
          <InformationDiv>
            <P2>Telefon</P2>
            <Link href="tel:0601881020">
              <P3>{PHONES[location]}</P3>
            </Link>
          </InformationDiv>
          <InformationDiv>
            <P2>Radno vreme</P2>
            <P3>00-24</P3>
          </InformationDiv>
        </InformationsDiv>
      </ContactDiv>
    </StyledLayout>
  );
};

const StyledLayout = styled(Layout)`
  padding-top: 30px;
`;

const InformationDiv = styled.div`
  width: 200px;
  text-align: center;
`;

const InformationsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
`;

const ContactDiv = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
