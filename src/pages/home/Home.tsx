import { Layout } from "components/Layout";
import styled from "styled-components";
import { Header } from "./Header";
import { Banner } from "./Bannner";
import { Section } from "components/Section";
import { SlideShow } from "components/SlideShow";
import { deliveryServices } from "data/delivery-services";
import { regular_boilers } from "data/regular-boilers";
import { flow_boilers } from "data/flow-boilers";
import { services } from "data/services";
import { routes } from "router/routes";
import Transitions from "./Transitions";
import { locations } from "data/locations";
import { P2, P3 } from "components/Paragraphs";
import { teamMembers } from "data/team-members";
import { Link } from "components/Link";
import { NavLink } from "components/NavLink";
import { PHONES } from "config/contstants";
import { location } from "config/env";

const Home = () => {
  return (
    <Layout>
      <Header />
      <NavLink to={routes.serviceServices}>
        <Section text={["USLUGE SERVISA"]} />
      </NavLink>
      <SlideShow slides={deliveryServices} />
      <Banner
        topText={["SERVIS BOJLERA BEOGRAD", "HITNE INTERVENCIJE"]}
        bottomText={["NOĆNE INTERVENCIJE", "DOLAZIMO ODMAH"]}
      />
      <NavLink to={routes.regularBoilers}>
        <Section text={["MARKE BOJLERA"]} />
      </NavLink>
      <SlideShow slides={regular_boilers} />
      <Banner
        topText={["BOJLERU IZUZETNO DUGO TREBA", "DA SE ZAGREJE"]}
        bottomText={["POZOVITE NAS I REŠIĆEMO VAM", "TAJ PROBLEM"]}
      />
      <NavLink to={routes.flowBoilers}>
        <Section text={["UGRADNJA I SERVIS", "PROTOČNIH BOJLERA"]} />
      </NavLink>
      <SlideShow slides={flow_boilers} />
      <Banner
        topText={["GORI VAM LAMPICA ALI", "VAM BOJLER NE GREJE"]}
        bottomText={["POZOVITE NAS I REŠIĆEMO VAM", "TAJ PROBLEM"]}
      />
      <Section text={["SERVIS I POPRAVKA", "BOJLERA"]} />
      <ServicesDiv>
        {services.map(({ id, name }) => (
          <NavLink to={`${routes.servicesAndRepairs}?usluga=${name}`} key={id}>
            <ServiceDiv>
              {name}
              <div>🛠️</div>
            </ServiceDiv>
          </NavLink>
        ))}
      </ServicesDiv>
      <Banner
        topText={["KAD UPALITE BOJLER", "ISKAČE VAM OSIGURAČ"]}
        bottomText={["POZOVITE NAS I REŠIĆEMO VAM", "TAJ PROBLEM"]}
      />
      <Section text={["O NAMA"]} />
      <Transitions />
      <Banner
        topText={["BOJLER GREJE I IMA VRUĆE", "VODE ALI SE BRZO POTROŠI"]}
        bottomText={["POZOVITE NAS I REŠIĆEMO VAM", "TAJ PROBLEM"]}
      />
      <Section text={["LOKACIJE"]} />
      {locations.map(({ name, src }) => (
        <NavLink to={src} key={name}>
          <P3>{name}</P3>
        </NavLink>
      ))}
      <Banner
        topText={[
          "SKAZALJKA NA TERMOPOKAZIVAČU",
          "BOJLERA IDE DO KRAJA U CRVENO",
        ]}
        bottomText={["POZOVITE NAS I REŠIĆEMO VAM", "TAJ PROBLEM"]}
      />
      <Section text={["NAŠ TIM"]} />
      <TeamMembersDiv>
        {teamMembers.map(({ name, role, src }) => (
          <TeamMemberDiv key={name}>
            <TeamMemberImageBorder>
              <img src={src} alt={role} width="100%" />
            </TeamMemberImageBorder>
            <P2>{name}</P2>
            <P3>{role}</P3>
          </TeamMemberDiv>
        ))}
      </TeamMembersDiv>
      <Banner
        topText={["NA BOJLERU VAM STALNO CURI VODA", "NA SIGRNOSNOM VENTILU"]}
        bottomText={["POZOVITE NAS I REŠIĆEMO VAM", "TAJ PROBLEM"]}
      />
      <Section text={["CALL CENTAR"]} />
      <CallCenterDiv>
        <Link href="tel:0601881020">
          <P36>{PHONES[location]}</P36>
        </Link>
        <P2>HITNE INTERVENCIJE</P2>
        <P36>00-24</P36>
      </CallCenterDiv>
      <Banner
        topText={["NA CREVU BOJLERA VAM", "CURI ILI KAPLJE VODA"]}
        bottomText={["POZOVITE NAS I REŠIĆEMO VAM", "TAJ PROBLEM"]}
      />
      <NavLink to={routes.warranty}>
        <P2>BOJLERI POD GARACIJOM</P2>
      </NavLink>
    </Layout>
  );
};

export default Home;

const CallCenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const P36 = styled.p`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
`;

const TeamMemberImageBorder = styled.div`
  border: 3.5px solid ${({ theme }) => theme.colors.primary};
`;

const TeamMemberDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  align-items: center;
  padding: 10px;
`;

const TeamMembersDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ServiceDiv = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
`;

const ServicesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
