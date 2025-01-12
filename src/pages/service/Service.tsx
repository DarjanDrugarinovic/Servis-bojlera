import { Layout } from "components/Layout";
import { SmallParagraph } from "components/Paragraphs";
import { Section } from "components/Section";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackIcon from "@mui/icons-material/Reply";

type ServiceState = {
  title: string;
  description: string;
};

const Service = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { title, description } = state as ServiceState;

  const navigateBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <StyledLayout disableFooter>
      <Section name={title} />
      <DescriptionDiv>
        <StyledSmallParagraph>{description}</StyledSmallParagraph>
      </DescriptionDiv>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hTqAukGJ7sI?si=g_NJGUNHPBKudpoI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <BackButton onClick={navigateBack}>
        <BackIcon />
        Nazad
      </BackButton>
    </StyledLayout>
  );
};

export default Service;

const BackButton = styled.button`
  background-color: #da5b00;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  cursor: pointer;
  outline: none;
  border: 1px solid white;
  width: 100px;
  align-self: center;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #c45301;
  }
`;

const StyledSmallParagraph = styled(SmallParagraph)`
  width: 90%;
  max-width: 400px;
`;

const DescriptionDiv = styled.p`
  display: flex;
  justify-content: center;
`;

const StyledLayout = styled(Layout)`
  padding-top: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
