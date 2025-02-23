import styled from "styled-components";
import { Divider } from "components/Divider";
import { P3 } from "components/Paragraphs";
import { FC } from "react";

type Props = {
  topText: string[];
  bottomText: string[];
};

export const Banner: FC<Props> = ({ topText, bottomText }) => {
  return (
    <DescriptionDiv>
      {topText.map((t) => (
        <P3 $color="white" key={t}>
          {t}
        </P3>
      ))}
      <Divider $color="white" $maxWidth={200} />
      {bottomText.map((t) => (
        <P3 $color="white" key={t}>
          {t}
        </P3>
      ))}
    </DescriptionDiv>
  );
};

const DescriptionDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  padding: 24px 16px 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
