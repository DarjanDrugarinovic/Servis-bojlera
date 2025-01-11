import BoilerList from "components/BoilerList";
import ImageSlider from "components/ImageSlider";
import { Layout } from "components/Layout";
import styled from "styled-components";

const Home = () => {
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
      <BoilerList/>
      <ImageSlider/>
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
