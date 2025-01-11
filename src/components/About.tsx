import styled from "styled-components";

const descriptionAbout = [
  {
    id: 1,
    description:
      "Vodoinstalater postoji i radi već 19 godina. Svoj posao obavljamo profesionalno i pedantno sa željom da svaki naš klijent bude zadovoljan.",
    text: "NAŠA PRIČA",
  },
  {
    id: 2,
    description:
      "Na svoj rad naš vodoinstalater servis daje pisanu garanciju. Garanciji podleže sve što se tiče našeg rada i biće ispravljeno za 24h",
    text: "GARANCIJA",
  },
  {
    id: 3,
    description:
      "U svom poslovanju se trudimo i insistiramo na najkvalitetnijim delovima da ni mi, ni naši klijenti ne bi imali dodatnih problema.",
    text: "REZERVNI DELOVI",
  },
  {
    id: 4,
    description:
      "Naše intervencije projektujemo tako da sve budu izvedene u roku 12h a najkasnije u ekstremnim slučajevima 24h",
    text: "BRZ DOLAZAK",
  },
  {
    id: 5,
    description:
      "Za hitne intervencije smo dostupni 24h, sedam dana u nedelji, 365 dana godišnje. Vreme izlaska na hitne intervencije je oko 20 min.",
    text: "HITNE INTERVENCIJE",
  },
  {
    id: 6,
    description:
      "Da li se reklamacije naplaćuju? Naravno da ne. Svaki naš eventualni propust tokom intervencije biće saniran i neće biti naplaćen.",
    text: "REKLAMACIJE",
  },
];

const About = () => {
  return (
    <>
      {descriptionAbout.map((item) => (
        <DescriptionDiv key={item.id}>
          <Icon>☑️</Icon>
          <Text>{item.text}</Text>
          <Description>{item.description}</Description>
        </DescriptionDiv>
      ))}
    </>
  );
};

const DescriptionDiv = styled.div`
  background: white;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background-color: #a6d0f1;
  gap: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 40px;
`;

const Icon = styled.p`
  font-size: 36px;
  margin: 0;
`;

const Text = styled.h3`
  font-size: 24px;
  font-weight: bolder;
  margin: 8px 0;
  color: #345f94;
`;

const Description = styled.p`
  color: #345f94;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: "Asap", sans-serif !important;
`;

export default About;
