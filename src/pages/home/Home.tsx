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
import { P1, P3 } from "components/Paragraphs";
import { teamMembers } from "data/team-members";
import { Link } from "components/Link";
import { NavLink } from "components/NavLink";

const Home = () => {
  return (
    <Layout>
      <Header />
      <NavLink to={routes.serviceServices}>
        <Section text={["USLUGE SERVISA"]} />
      </NavLink>
      <SlideShowDiv $border>
        <SlideShow slides={deliveryServices} />
      </SlideShowDiv>
      <Banner
        topText={["SERVIS BOJLERA BEOGRAD", "HITNE INTERVENCIJE"]}
        bottomText={["NOĆNE INTERVENCIJE", "DOLAZIMO ODMAH"]}
      />
      <NavLink to={routes.regularBoilers}>
        <Section text={["MODELI BOJLERA"]} />
      </NavLink>
      <SlideShowDiv $border>
        <SlideShow slides={regular_boilers} />
      </SlideShowDiv>
      <Banner
        topText={["BOJLERU IZUZETNO DUGO TREBA", "DA SE ZAGREJE"]}
        bottomText={["POZOVITE NAS I REŠIĆEMO VAM", "TAJ PROBLEM"]}
      />
      <NavLink to={routes.flowBoilers}>
        <Section text={["UGRADNJA I SERVIS", "PROTOČNIH BOJLERA"]} />
      </NavLink>
      <SlideShowDiv $border>
        <SlideShow slides={flow_boilers} />
      </SlideShowDiv>
      <Banner
        topText={["GORI VAM LAMPICA ALI", "VAM BOJLER NE GREJE"]}
        bottomText={["POZOVITE NAS I REŠIĆEMO VAM", "TAJ PROBLEM"]}
      />
      <Section text={["SERVIS I POPRAVKA", "BOJLERA"]} />
      <ServicesDiv>
        {services.map(({ id, name }) => (
          <ServiceDiv key={id}>
            <NavLink to={routes.servicesAndRepairs}>{name}</NavLink>
            <div>🛠️</div>
          </ServiceDiv>
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
            <img src={src} alt={role} width="100%" />
            <P3>{name}</P3>
            <P3>{role}</P3>
          </TeamMemberDiv>
        ))}
      </TeamMembersDiv>
      <Banner
        topText={["NA BOJLERU VAM STALNO CURI VODA", "NA SIGRNOSNOM VENTILU"]}
        bottomText={["POZOVITE NAS I REŠIĆEMO VAM", "TAJ PROBLEM"]}
      />
      <Section text={["CALL CENTAR"]} />
      <Link href="tel:0601881020">
        <P1>060/188-10-20</P1>
      </Link>
      <P1>HITNE INTERVENCIJE</P1>
      <P1>00-24</P1>
      <Banner
        topText={["NA CREVU BOJLERA VAM", "CURI ILI KAPLJE VODA"]}
        bottomText={["POZOVITE NAS I REŠIĆEMO VAM", "TAJ PROBLEM"]}
      />
      <NavLink to={routes.warranty}>
        <P1>BOJLERI POD GARACIJOM</P1>
      </NavLink>
    </Layout>
  );
};

export default Home;

const TeamMemberDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 10px;
`;

const TeamMembersDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ServiceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

const ServicesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SlideShowDiv = styled.div<{ $border?: boolean }>`
  width: 90%;
  max-width: 400px;
  align-self: center;
  border: ${({ theme, $border }) =>
    $border ? `${theme.colors.primary} 2px solid` : "none"};
`;
