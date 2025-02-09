import { Divider } from "components/Divider";
import { Layout } from "components/Layout";
import { P2, P3 } from "components/Paragraphs";
import { Section } from "components/Section";
import { services } from "data/services";
import styled from "styled-components";

export const ServicesAndRepairs = () => {
  return (
    <StyledLayout>
      <Section text={["SERVIS I POPRAVKA", "BOJLERA"]} />
      <ServicesAndRepairsDiv>
        {services.map(({ id, name, src, description }, index) => (
          <RegularBoilerDiv key={id}>
            <P2>{name}</P2>
            <Divider />
            <iframe
              width="100%"
              height="315"
              src={src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <DescriptionDiv>
              <P3>{description}</P3>
            </DescriptionDiv>
            {index !== services.length - 1 ? <Divider /> : null}
          </RegularBoilerDiv>
        ))}
      </ServicesAndRepairsDiv>
    </StyledLayout>
  );
};

const DescriptionDiv = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.primary};
  padding: 10px;
`;

const RegularBoilerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  gap: 10px;
`;

const ServicesAndRepairsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledLayout = styled(Layout)`
  padding-top: 30px;
`;
