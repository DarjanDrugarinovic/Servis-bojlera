import styled, { keyframes } from "styled-components";

export const Footer = () => {
  return (
    <FooterPlaceholderDiv>
      <FooterDiv>
        <a href="tel:+381612005825">
          <BreathingButton>POZOVI ODMAH 📞</BreathingButton>
        </a>
      </FooterDiv>
    </FooterPlaceholderDiv>
  );
};

export default Footer;

const FooterPlaceholderDiv = styled.footer`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FooterDiv = styled.footer`
  position: fixed;
  bottom: 10px;
`;
const breatheAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const BreathingButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  animation: ${breatheAnimation} 2s infinite;
  border: 1px solid white;
`;
