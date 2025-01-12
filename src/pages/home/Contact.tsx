import { Section } from "components/Section";
import styled from "styled-components";

export const Contact = () => {
  return (
    <ContactDiv>
      <Section name="KONTAKT" />
      <InformationsDiv>
        <InformationDiv>
          <BigParagraph>Adresa</BigParagraph>
          <SmallParagraph>Brsjačka 34</SmallParagraph>
        </InformationDiv>
        <InformationDiv>
          <BigParagraph>Telefon</BigParagraph>
          <SmallParagraph>
            <ServicesLink href="tel:0601881020">060/188-10-20</ServicesLink>
          </SmallParagraph>
        </InformationDiv>
        <InformationDiv>
          <BigParagraph>Radno vreme</BigParagraph>
          <SmallParagraph>00-24</SmallParagraph>
        </InformationDiv>
      </InformationsDiv>
    </ContactDiv>
  );
};

const InformationDiv = styled.div`
  width: 200px;
  text-align: center;
`;

const InformationsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
`;

const SmallParagraph = styled.p`
  color: #345f94;
  font-size: 24px;
  text-align: center;
  font-weight: 400;
`;

const ServicesLink = styled.a`
  font-size: 24px;
  text-align: center;
  font-weight: 400;
  color: #345f94;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const BigParagraph = styled.p`
  color: #1c194d;
  font-size: 36px;
`;
