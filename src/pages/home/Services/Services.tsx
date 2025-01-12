import styled from "styled-components";
import { data, mainServices } from "./data";
import { SlideShow } from "components/SlideShow";
import { useCallback } from "react";
import { Section } from "components/Section";
import { useNavigate } from "react-router-dom";
import { routes } from "router/routes";

const { service } = routes;

export const Services = () => {
  const navigate = useNavigate();

  const onServiceClick = useCallback(
    (title: string, description: string) => {
      navigate(service, {
        state: {
          title,
          description,
        },
      });
    },
    [navigate]
  );

  return (
    <ServicesSection>
      <Section name="USLUGE SERVISA" />
      <SlideShowDiv>
        <SlideShow slides={mainServices} />
      </SlideShowDiv>
      <ServicesDiv>
        {data.map(({ title, description }) => (
          <ServiceDiv
            key={title}
            onClick={() => onServiceClick(title, description)}
          >
            <ServicesP>{title}</ServicesP>
          </ServiceDiv>
        ))}
      </ServicesDiv>
    </ServicesSection>
  );
};

const ServicesP = styled.p``;

const SlideShowDiv = styled.div`
  width: 90%;
  max-width: 400px;
  align-self: center;
`;

const ServicesSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const ServiceDiv = styled.div`
  border: 1px solid #345f94;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.75);
  background-color: #345f94;
  color: white;

  :hover {
    cursor: pointer;
  }
`;

const ServicesDiv = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;
