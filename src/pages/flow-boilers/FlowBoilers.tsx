import { Divider } from "components/Divider";
import { Layout } from "components/Layout";
import { P2, P3 } from "components/Paragraphs";
import { Section } from "components/Section";
import { flow_boilers } from "data/flow-boilers";
import styled from "styled-components";

export const FlowBoilers = () => {
  return (
    <StyledLayout>
      <Section text={["UGRADNJA I SERVIS", "PROTOČNIH BOJLERA"]} />
      <FlowBoilersDiv>
        {flow_boilers.map(({ id, name, src, description }, index) => (
          <FlowBoilerDiv key={id}>
            <P2>{name}</P2>
            <Image src={src} alt={name} width="100%" />
            <DescriptionDiv>
              <P3>{description}</P3>
            </DescriptionDiv>
            {index !== flow_boilers.length - 1 ? <Divider /> : null}
          </FlowBoilerDiv>
        ))}
      </FlowBoilersDiv>
    </StyledLayout>
  );
};

const DescriptionDiv = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.primary};
  padding: 10px;
`;

const Image = styled.img`
  border: 3px solid ${({ theme }) => theme.colors.primary};
`;

const FlowBoilerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  gap: 10px;
`;

const FlowBoilersDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledLayout = styled(Layout)`
  padding-top: 30px;
`;
