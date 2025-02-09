import { Divider } from "components/Divider";
import { Layout } from "components/Layout";
import { NavLink } from "components/NavLink";
import { P1, P2, P3, P4 } from "components/Paragraphs";
import { Section } from "components/Section";
import { warranties } from "data/warranty";
import styled from "styled-components";

export const Warranty = () => {
  return (
    <StyledLayout>
      <Section text={["BOJLERI POD", "GARANCIJOM"]} />
      <WarrantiesDiv>
        {warranties.map((warranty, index) => (
          <WarrantyDiv key={index}>
            <P1>{warranty}</P1>
            <Divider $maxWidth={400} />
            <ServicesDiv>
              {[...Array(2)].map((_, index) => (
                <ServiceDiv key={index}>
                  <LeftDiv>
                    <P4>Green Service</P4>
                    <P4>Prvomajska 13</P4>
                  </LeftDiv>
                  <RigthDiv>
                    <P4>Fiksni: 011/000-00-00</P4>
                    <P4>Mobilni: 064/000-00-00</P4>
                    <P4>Web: www.greenservice.rs</P4>
                  </RigthDiv>
                </ServiceDiv>
              ))}
            </ServicesDiv>
          </WarrantyDiv>
        ))}
      </WarrantiesDiv>
      <Divider />
      <P2>SARADNICI SERVISA</P2>
      <CollaboratorsDiv>
        {[...Array(7)].map((_, index) => (
          <NavLink to={"https://www.greenservice.rs"} key={index}>
            <P3>www.greenservice.rs</P3>
          </NavLink>
        ))}
      </CollaboratorsDiv>
    </StyledLayout>
  );
};

const CollaboratorsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RigthDiv = styled.div``;

const LeftDiv = styled.div``;

const ServicesDiv = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ServiceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  gap: 30px;
  padding: 5px;
`;

const WarrantyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WarrantiesDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledLayout = styled(Layout)`
  padding-top: 30px;
  gap: 20px;
`;
