import styled from "styled-components";
import { Typewriter } from "components/Typewriter";

export const ProblemSolving = () => {
  return (
    <ProblemSolvingSection>
      <TextDiv>
        <Typewriter
          sentences={[
            "VODA VAM KONSTANTNO CURI IZ SIGURNOSNOG VENTILA?",
            "IMATE VRUĆE VODE U BOJLERU ALI VAM BRZO NESTANE PRILIKOM KUPANJA?",
          ]}
          delay={100}
          infinite
        />
      </TextDiv>
      <DescriptionP>POZOVITE NAS I REŠIĆEMO VAM TAJ PROBLEM!</DescriptionP>
    </ProblemSolvingSection>
  );
};

const TextDiv = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProblemSolvingSection = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  padding: 24px 16px 32px 16px;
  margin: 25px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DescriptionP = styled.p`
  font-size: 24px;
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;
