import styled from "styled-components";
import CopyrightIcon from "@mui/icons-material/Copyright";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <FooterDiv className={className}>
      <ContactDiv>
        <HeaderDiv>Kontakt</HeaderDiv>
      </ContactDiv>

      <CopyRightDiv>
        <CopyrightIcon /> 2024
      </CopyRightDiv>
    </FooterDiv>
  );
};

export default Footer;

const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 1px 0px;
`;

const FooterDiv = styled.footer`
  box-shadow: rgba(0, 0, 0, 0.75) 3px 1px 3px 0px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const CopyRightDiv = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid black;
  width: 100%;
  justify-content: center;
  padding: 5px;
  color: white;
`;

const HeaderDiv = styled.div`
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
