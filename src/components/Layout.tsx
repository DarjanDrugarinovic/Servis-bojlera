import { FC, ReactNode } from "react";
import styled from "styled-components";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

type Direction = "vertical" | "horizontal";

type LayoutProps = {
  children: ReactNode;
  direction?: Direction;
  className?: string;
};

export const Layout: FC<LayoutProps> = ({
  children,
  direction = "vertical",
  className,
}) => {
  return (
    <LayoutDiv>
      <Navbar />
      <ContentDiv $direction={direction} className={className}>
        {children}
      </ContentDiv>
      <Footer />
    </LayoutDiv>
  );
};

const ContentDiv = styled.div<{ $direction: Direction }>`
  flex: 1;
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === "vertical" ? "column" : "row"};
`;

const LayoutDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
