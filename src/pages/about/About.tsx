import styled from "styled-components";
import { Section } from "components/Section";
import { MovingContent } from "./MovingCards";
import { Layout } from "components/Layout";
import { aboutData, data } from "./data";
import { P3, P4 } from "components/Paragraphs";
import { Divider } from "components/Divider";

const About = () => {
  return (
    <StyledLayout>
      <Section text={["O NAMA"]} />
      <AboutDiv>
        <AboutContentDiv>
          <P4>{aboutData.description}</P4>
        </AboutContentDiv>
      </AboutDiv>
      <Divider />
      <MovingContent>
        {data.map(({ id, text, description }) => (
          <DescriptionDiv key={id}>
            <DescriptionHeaderDiv>
              <P3 $color="white">{text}</P3>
            </DescriptionHeaderDiv>
            <P4 $color="white">{description}</P4>
          </DescriptionDiv>
        ))}
      </MovingContent>
    </StyledLayout>
  );
};

const AboutContentDiv = styled.div`
  max-width: 400px;
  text-align: center;
  padding: 0px 10px;
`;
const AboutDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLayout = styled(Layout)`
  padding-top: 30px;
  gap: 20px;
`;

const DescriptionHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DescriptionDiv = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  gap: 8px;
  padding: 8px;
  align-items: center;
  text-align: center;
  margin: 0 10px;
  width: 250px;
  height: 200px;
`;

export default About;
