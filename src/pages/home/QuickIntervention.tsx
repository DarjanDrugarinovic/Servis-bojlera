import styled from "styled-components";
import { Link } from "components/Link";

export const QuickIntervention = () => {
  return (
    <DescriptionDiv>
      <DescriptionP>
        SERVIS BOJLERA BEOGRAD, HITNE INTERVENCIJE 00-24
      </DescriptionP>
      <br />
      <DescriptionP>
        NOĆNE INTERVENCIJE, DOLAZIMO ODMAH,
        <Link href="tel:0601881020"> 060/188-10-20</Link>
      </DescriptionP>
    </DescriptionDiv>
  );
};

const DescriptionDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 24px 16px 32px 16px;
`;

const DescriptionP = styled.p`
  font-size: 24px;
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;
