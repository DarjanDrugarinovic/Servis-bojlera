import styled from "styled-components";
import { assets } from "assets/assets";
import { SmallParagraph } from "components/Paragraphs";
import { SlideShow } from "components/SlideShow";
import { Section } from "components/Section";

const { regularBoilers: regularBoilerAssets, flowBoilers: flowBoilerAssets } =
  assets;

export const RegularAndFlowBoilers = () => {
  return (
    <RegularAndFlowBoilersDiv>
      <Section name="UGRADNJA I SERVIS" />
      <BoilersDiv>
        <BoilerDiv>
          <SmallParagraph>SVIH VRSTA BOJLERA</SmallParagraph>
          <SlideShow slides={regular_boilers} />
        </BoilerDiv>
        <BoilerDiv>
          <SmallParagraph>PROTOČNIH BOJLERA</SmallParagraph>
          <SlideShow slides={flow_boilers} />
        </BoilerDiv>
      </BoilersDiv>
    </RegularAndFlowBoilersDiv>
  );
};

const BoilerDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  min-width: 200px;
`;

const RegularAndFlowBoilersDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoilersDiv = styled.div`
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const flow_boilers = [
  {
    id: "1",
    src: flowBoilerAssets.bosch,
    name: "BOSCH",
  },
  {
    id: "2",
    src: flowBoilerAssets.simens,
    name: "SIMENS",
  },
];

const regular_boilers = [
  {
    id: "1",
    src: regularBoilerAssets.metalac,
    name: "METALAC",
  },
  {
    id: "2",
    src: regularBoilerAssets.magnohrom,
    name: "MAGNOHROM",
  },
  {
    id: "3",
    src: regularBoilerAssets.tesy,
    name: "tesy",
  },
  {
    id: "4",
    src: regularBoilerAssets.termorad,
    name: "termorad",
  },
  {
    id: "5",
    src: regularBoilerAssets.gorenje,
    name: "gorenje",
  },
  {
    id: "6",
    src: regularBoilerAssets.koncar,
    name: "končar",
  },
  {
    id: "7",
    src: regularBoilerAssets.domPancevo,
    name: "dom pančevo",
  },
  {
    id: "8",
    src: regularBoilerAssets.ariston,
    name: "ariston",
  },
  {
    id: "9",
    src: regularBoilerAssets.elitInox,
    name: "elit inox",
  },
  {
    id: "10",
    src: regularBoilerAssets.bosch,
    name: "bosch",
  },
  {
    id: "11",
    src: regularBoilerAssets.rankom,
    name: "rankom",
  },
  {
    id: "12",
    src: regularBoilerAssets.elmac,
    name: "elmac",
  },
];
