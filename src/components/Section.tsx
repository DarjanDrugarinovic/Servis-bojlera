import styled from "styled-components";
import { BigParagraph, SmallParagraph } from "./Paragraphs";
import { Divider } from "./Divider";
import { FC } from "react";

type Props = {
  name: string;
};

export const Section: FC<Props> = ({ name }) => {
  return (
    <SectionDiv>
      <BigParagraph>{name}</BigParagraph>
      <SmallParagraph>SERVIS BOJLERA BEOGRAD</SmallParagraph>
      <Divider />
    </SectionDiv>
  );
};

const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
