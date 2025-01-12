import { Layout } from "components/Layout";
import styled from "styled-components";
import About from "pages/home/About/About";
import { RegularAndFlowBoilers } from "./RegularAndFlowBoilers";
import { Header } from "./Header";
import { QuickIntervention } from "./QuickIntervention";
import { Services } from "./Services/Services";
import { Contact } from "./Contact";
import { ProblemSolving } from "./ProblemSolving";

const Home = () => {
  return (
    <StyledLayout>
      <Header />
      <RegularAndFlowBoilers />
      <QuickIntervention />
      <Services />
      <QuickIntervention />
      <About />
      <ProblemSolving />
      <Contact />
    </StyledLayout>
  );
};

export default Home;

const StyledLayout = styled(Layout)`
  gap: 20px;
`;
