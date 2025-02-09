import styled from "styled-components";
import { P1, P3 } from "./Paragraphs";
import { Divider } from "./Divider";
import { FC } from "react";

type Props = {
  text: string[];
};

export const Section: FC<Props> = ({ text }) => {
  return (
    <SectionDiv>
      <P3>SERVIS BOJLERA BEOGRAD</P3>
      {text.map((t) => (
        <P1>{t}</P1>
      ))}
      <Divider $maxWidth={400} />
    </SectionDiv>
  );
};

const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
