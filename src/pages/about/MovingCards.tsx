import { FC, ReactNode } from "react";
import Marquee from "react-marquee-slider";

type Props = {
  children: ReactNode[];
};

export const MovingContent: FC<Props> = ({ children }) => {
  return (
    <Marquee
      velocity={20}
      resetAfterTries={200}
      scatterRandomly={false}
      direction="rtl"
      onInit={() => {}}
      onFinish={() => {}}
    >
      {children}
    </Marquee>
  );
};
