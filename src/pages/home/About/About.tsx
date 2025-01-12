import styled from "styled-components";
import { data } from "./data";
import { Section } from "components/Section";
import { MovingContent } from "../MovingCards";

const About = () => {
  return (
    <AboutSection>
      <Section name="O NAMA" />

      <MovingContent>
        {data.map((item) => (
          <DescriptionDiv key={item.id}>
            <DescriptionHeaderDiv>
              <Text>{item.text}</Text>
            </DescriptionHeaderDiv>
            <Description>{item.description}</Description>
          </DescriptionDiv>
        ))}
      </MovingContent>
    </AboutSection>
  );
};

const DescriptionHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const DescriptionDiv = styled.div`
  background: white;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background-color: #a6d0f1;
  gap: 16px;
  align-items: center;
  text-align: center;
  margin: 0 10px;
  width: 250px;
  height: 250px;
`;

const Text = styled.h3`
  font-size: 20px;
  font-weight: bolder;
  margin: 8px 0;
  color: #345f94;
`;

const Description = styled.p`
  color: #345f94;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: "Asap", sans-serif !important;
`;

export default About;
