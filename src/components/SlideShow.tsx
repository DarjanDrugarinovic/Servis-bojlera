import { FC, useEffect, useState } from "react";
import styled from "styled-components";

export type Slide = {
  id: string;
  name: string;
  src: string;
};

type Props = {
  slides: Slide[];
};

const slideInterval = 1500;

export const SlideShow: FC<Props> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <SlideShowDiv>
      <Wrapper>
        {slides.map((slide, index) => (
          <SlideImage
            key={slide.id}
            src={slide.src}
            alt={slide.name}
            isVisible={index === currentIndex}
          />
        ))}
      </Wrapper>
      <NameH2>{slides[currentIndex]?.name}</NameH2>
    </SlideShowDiv>
  );
};

const SlideShowDiv = styled.div`
  color: #345f94;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameH2 = styled.h2`
  text-align: center;
`;

const Wrapper = styled.div`
  aspect-ratio: 1 / 1;
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
`;

const SlideImage = styled.img<{ isVisible: boolean }>`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;
