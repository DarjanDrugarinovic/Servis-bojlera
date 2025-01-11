import styled from "styled-components";

interface BoilerPopupProps {
  name: string;
  text: string;
  image: string;
  onClose: () => void;
}

const BoilerPopup: React.FC<BoilerPopupProps> = ({
  name,
  text,
  image,
  onClose,
}) => {
  return (
    <PopupOverlay onClick={onClose}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <PopupImage src={image} alt={name} />
        <PopupTitle>{name}</PopupTitle>
        <PopupText>{text}</PopupText>
        <CloseButton onClick={onClose}>Zatvori</CloseButton>
      </PopupContent>
    </PopupOverlay>
  );
};

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  font-size: 24px;
  cursor: pointer;
  color: #345f94;
  border: none;
  background: none;
  padding: 0;
  margin: 10px 0px 0px 0px;
  text-decoration: none;
  display: inline;
`;

const PopupImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const PopupTitle = styled.h2`
  font-size: 24px;
  color: #345f94;
  margin-bottom: 10px;
`;

const PopupText = styled.p`
  font-size: 16px;
  color: #333;
`;

export default BoilerPopup;
