import styled from "styled-components";
import { P1, P4 } from "./Paragraphs";
import { Divider } from "./Divider";
import { FC } from "react";

type Props = {
  text: string[];
};

export const Section: FC<Props> = ({ text }) => {
  return (
    <SectionDiv>
      <SectionContentDiv>
        <P4>SERVIS BOJLERA BEOGRAD</P4>
        {text.map((t) => (
          <P1 key={t}>{t}</P1>
        ))}
        <Divider $maxWidth={400} />
      </SectionContentDiv>
    </SectionDiv>
  );
};

const SectionContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
