import BoilerList from "components/BoilerList";
import ImageSlider from "components/ImageSlider";
import { Layout } from "components/Layout";
import styled from "styled-components";
import imageBosch from "assets/protocni-bojler-bosch.jpg";
import imageSiemens from "assets/protocni-bojler-simens.jpg";
import About from "components/About";
import { useState } from "react";
import RepairPopup from "components/RepaitPopup";
import { options } from "options.ts";

const Home = () => {
  const [popupText, setPopupText] = useState<string>("");
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);

  const openPopup = (text: string) => {
    setPopupText(text);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setPopupText("");
  };
  return (
    <Layout>
      <MainDiv>
        <H1>BEOGRAD</H1>
        <Hr />
        <br />
        <PTel>
          <Link href="tel:0601881020">060/188-10-20</Link>
        </PTel>
        <P2>PROFESIONALNO, POVOLJNO I PEDANTNO</P2>
        <P2>HITNE INTERVENCIJE</P2>
        <PTel>00-24</PTel>
        <Hr />
      </MainDiv>
      <BoilerList />
      <ImageSlider />
      <DescriptionDiv>
        <DescriptionP>
          SERVIS BOJLERA BEOGRAD, HITNE INTERVENCIJE 00-24
        </DescriptionP>
        <DescriptionP>
          NOĆNE INTERVENCIJE, DOLAZIMO ODMAH,
          <Link href="tel:0601881020"> 060/188-10-20</Link>
        </DescriptionP>
      </DescriptionDiv>
      <ServicesDiv>
        <ServicesP>SERVIS BOJLERA BEOGRAD</ServicesP>
        <ServicesH1>USLUGE SERVISA</ServicesH1>
        <ServicesHr />
        <ServicesList>
          <ServicesItem>DOSTAVA BOJLERA 🛠️ </ServicesItem>
          <ServicesItem>MONTAŽA BOJLERA 🛠️</ServicesItem>
          <ServicesItem>ODRŽAVANJE I POPRAVKA BOJLERA 🛠️</ServicesItem>
        </ServicesList>
      </ServicesDiv>
      <DescriptionDiv>
        <DescriptionP>
          IMATE VRUĆE VODE U BOJLERU ALI VAM BRZO NESTANE PRILIKOM KUPANJA?
        </DescriptionP>
        <br />
        <DescriptionP>POZOVITE NAS I REŠIĆEMO VAM TAJ PROBLEM</DescriptionP>
      </DescriptionDiv>
      <ServicesDiv>
        <ServicesP>SERVIS BOJLERA BEOGRAD</ServicesP>
        <ServicesH1>POPRAVKE SERVIS BOJLERA</ServicesH1>
        <ServicesHr />
        <OptionsList>
          {options.map((option, index) => (
            <OptionItem
              key={index}
              onClick={() => openPopup(option.description)}
            >
              {option.title}
              <br />
              🛠️
            </OptionItem>
          ))}
        </OptionsList>
        <RepairPopup
          isOpen={isPopupOpen}
          text={popupText}
          onClose={closePopup}
        />
      </ServicesDiv>
      <DescriptionDiv>
        <DescriptionP>
          VODA VAM KONSTANTNO CURI IZ SIGURNOSNOG VENTILA?
        </DescriptionP>
        <br />
        <DescriptionP>POZOVITE NAS I REŠIĆEMO VAM TAJ PROBLEM</DescriptionP>
      </DescriptionDiv>
      <ServicesPerentDiv>
        <ServicesDiv>
          <ServicesP>SERVIS BOJLERA BEOGRAD</ServicesP>
          <br />
          <ServicesH1>SERVIS I UGRADNJA PROTOČNIH BOJLERA</ServicesH1>
          <ServicesHr />
        </ServicesDiv>
        <ServiceAndInstalationDiv>
          <ServicesLink>
            BOSCH <br />
            🛠️
            <Image src={imageBosch} alt="Bosch" />
          </ServicesLink>
          <br />
          <ServicesLink>
            SIEMENS <br />
            🛠️
            <Image src={imageSiemens} alt="Siemens" />
          </ServicesLink>
        </ServiceAndInstalationDiv>
        <DescriptionDiv>
          <DescriptionP>
            VODA VAM KONSTANTNO CURI IZ SIGURNOSNOG VENTILA?
          </DescriptionP>
          <br />
          <DescriptionP>POZOVITE NAS I REŠIĆEMO VAM TAJ PROBLEM</DescriptionP>
        </DescriptionDiv>
        <ServicesDiv>
          <ServicesP>SERVIS BOJLERA BEOGRAD</ServicesP>
          <ServicesH1>O NAMA</ServicesH1>
          <ServicesHr />
        </ServicesDiv>
        <About />
      </ServicesPerentDiv>
      <DescriptionDiv>
        <DescriptionP>
          VODA VAM KONSTANTNO CURI IZ SIGURNOSNOG VENTILA?
        </DescriptionP>
        <DescriptionP>POZOVITE NAS I REŠIĆEMO VAM TAJ PROBLEM</DescriptionP>
      </DescriptionDiv>
      <ServicesDiv>
        <ServicesP>SERVIS BOJLERA BEOGRAD</ServicesP>
        <ServicesH1>KONTAKT</ServicesH1>
        <ServicesHr />
        <ServicesP1>Adresa</ServicesP1>
        <br />
        <ServicesP>Brsjačka 34</ServicesP>
        <br />
        <ServicesP1>Telefon</ServicesP1>
        <ServicesP>
          <ServicesLink href="tel:0601881020">060/188-10-20</ServicesLink>
        </ServicesP>
        <br />
        <ServicesP1>Radno vreme</ServicesP1>
        <ServicesP>00-24</ServicesP>
      </ServicesDiv>
    </Layout>
  );
};

export default Home;

const MainDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 24px 16px 32px 16px;
`;
const Link = styled.a`
  color: white;
  text-decoration: none;
  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;
const H1 = styled.h1`
  font-size: 42px;
  font-weight: 500;
  line-height: 1.2;
`;

const Hr = styled.hr`
  width: 100%;
  border-color: #fff;
  border-width: 3px;
  margin: 20px 0;
  border: 2px solid #fff;
`;

const PTel = styled.p`
  font-size: 36px;
  font-weight: 400;
  line-height: 1.5;
`;

const P2 = styled.p`
  font-size: 24px;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
`;
const DescriptionDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 24px 16px 32px 16px;
  margin: 25px 0;
`;

const DescriptionP = styled.p`
  font-size: 24px;
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;
const ServicesDiv = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ServicesP = styled.p`
  color: #345f94;
  font-size: 24px;
  text-align: center;
  font-weight: 400;
`;

const ServicesH1 = styled.h1`
  color: #345f94;
  font-size: 36px;
  text-align: center;
  font-weight: 700;
`;

const ServicesHr = styled.hr`
  width: 40%;
  margin-bottom: 55px;
  margin-top: 20px;
  border: 2px solid #345f94;
  box-sizing: content-box;
`;

const ServicesList = styled.ul`
  list-style-position: inside;
  text-align: center;
`;
const ServicesItem = styled.li`
  font-size: 24px;
  color: #345f94;
  margin-bottom: 10px;
`;
const ServicesLink = styled.a`
  font-size: 24px;
  text-align: center;
  font-weight: 400;
  color: #345f94;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const ServicesPerentDiv = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

const ServiceAndInstalationDiv = styled.div`
  margin-bottom: 25px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
`;

const Image = styled.img`
  width: 100%;
`;

const ServicesP1 = styled.p`
  color: #1c194d;
  font-size: 36px;
`;

const OptionItem = styled.li`
  font-size: 24px;
  color: #345f94;
  cursor: pointer;
  padding: 10px 0;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
`;
