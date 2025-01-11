import { useState, useEffect } from 'react';
import slika1 from '../assets/ariston.jpg'; 
import slika2 from '../assets/protocni-bojler-bosch.jpg' 
import slika3 from '../assets/protocni-bojler-simens.jpg'
import slika4 from '../assets/servis-bojlera-bosch.jpg'
import slika5 from '../assets/servis-bojlera-dom-pancevo.jpg'
import slika6 from '../assets/servis-bojlera-elit-inox.jpg'
import slika7 from '../assets/servis-bojlera-elmac.jpg'
import slika8 from '../assets/servis-bojlera-gorenje.jpg'
import slika9 from '../assets/servis-bojlera-koncar.jpg'
import slika10 from '../assets/servis-bojlera-magnohrom.jpg'
import slika11 from '../assets/servis-bojlera-metalac.jpg'
import slika12 from '../assets/servis-bojlera-rankom.jpg'
import slika13 from '../assets/servis-bojlera-termorad.jpg'
import slika14 from '../assets/servis-bojlera-tesy.jpg'
import styled from 'styled-components';


const images = [slika1, slika2, slika3, slika4, slika5, slika6, slika7, slika8, slika9, slika10, slika11, slika12, slika13, slika14];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <MainDiv>
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
    </MainDiv>
  );
};

const MainDiv= styled.div`
position: relative;
max-width: 600px; 
margin: 0 auto
`

const Image = styled.img`
width: 100%;
`
export default ImageSlider;
