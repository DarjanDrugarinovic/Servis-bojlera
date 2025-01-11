import React from "react";
import styled from "styled-components";

interface RepairPopupProps {
  isOpen: boolean;
  text: string;
  onClose: () => void;
}

const RepairPopup: React.FC<RepairPopupProps> = ({ isOpen, text, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Popup>
        <Content>{text}</Content>
        <ClosePopupButton onClick={onClose}>Zatvori popup</ClosePopupButton>
      </Popup>
    </Overlay>
  );
};

export default RepairPopup;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Popup = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  position: relative;
`;

const Content = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const ClosePopupButton = styled.button`
  background-color: #345f94;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #274470;
  }
`;
