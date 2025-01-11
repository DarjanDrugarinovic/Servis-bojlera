import styled from "styled-components"

const BoilerList = () => {
  return (
    <div>
      <H1>MARKE BOJLERA</H1>
      <Hr/>
    </div>
  )
}

const H1 = styled.p`
  font-size: 36px;
  color: #345f94;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 500;

`

const Hr = styled.hr`
  border-width: 3px;
  width: 40%;
  border-color: #345f94;
  margin-bottom: 55px;
  margin-top: 20px;
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  border: 2px solid #345f94;

`;

export default BoilerList