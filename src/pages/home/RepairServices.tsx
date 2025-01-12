import { useState } from "react";
import styled from "styled-components";
import BoilerPopup from "../../components/BoilerPopup";
import { boilers, Boiler } from "boilersData";

const BoilerList = () => {
  const [selectedBoiler, setSelectedBoiler] = useState<Boiler | null>(null);

  const handleOpenPopup = (boiler: Boiler) => {
    setSelectedBoiler(boiler);
  };

  const handleClosePopup = () => {
    setSelectedBoiler(null);
  };

  return (
    <MainDiv>
      <BoilerGrid>
        {boilers.map((boiler) => (
          <BoilerItem key={boiler.id} onClick={() => handleOpenPopup(boiler)}>
            {boiler.name}
          </BoilerItem>
        ))}
      </BoilerGrid>
      {selectedBoiler && (
        <BoilerPopup
          name={selectedBoiler.name}
          text={selectedBoiler.text}
          image={selectedBoiler.image}
          onClose={handleClosePopup}
        />
      )}
    </MainDiv>
  );
};

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.p`
  font-size: 36px;
  color: #345f94;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Hr = styled.hr`
  width: 40%;
  margin-bottom: 55px;
  margin-top: 20px;
  box-sizing: content-box;
  border: 2px solid #345f94;
`;

const BoilerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 80%;
`;

const BoilerItem = styled.div`
  font-size: 20px;
  color: #345f94;
  text-align: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e8f1fa;
  }
`;

export default BoilerList;
