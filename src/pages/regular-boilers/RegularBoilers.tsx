import { Divider } from "components/Divider";
import { Layout } from "components/Layout";
import { P2, P3 } from "components/Paragraphs";
import { Section } from "components/Section";
import { regular_boilers } from "data/regular-boilers";
import styled from "styled-components";

export const RegularBoilers = () => {
  return (
    <StyledLayout>
      <Section text={["MODELI BOJLERA"]} />
      <RegularBoilersDiv>
        {regular_boilers.map(({ id, name, src, description }, index) => (
          <RegularBoilerDiv key={id}>
            <P2>{name}</P2>
            <Image src={src} alt={name} width="100%" />
            <DescriptionDiv>
              <P3>{description}</P3>
            </DescriptionDiv>
            {index !== regular_boilers.length - 1 ? <Divider /> : null}
          </RegularBoilerDiv>
        ))}
      </RegularBoilersDiv>
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

const RegularBoilerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  gap: 10px;
`;

const RegularBoilersDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledLayout = styled(Layout)`
  padding-top: 30px;
`;
