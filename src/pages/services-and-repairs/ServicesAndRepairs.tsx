import { Divider } from "components/Divider";
import { Layout } from "components/Layout";
import { P2, P3 } from "components/Paragraphs";
import { Section } from "components/Section";
import { services } from "data/services";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const ServicesAndRepairs = () => {
  const [searchParams] = useSearchParams();
  const service = useMemo(() => {
    return services.find(
      (service) => service.name === searchParams.get("usluga")
    );
  }, [searchParams]);

  return (
    <StyledLayout>
      <Section text={["SERVIS I POPRAVKA", "BOJLERA"]} />
      <ServicesAndRepairsDiv>
        {service && (
          <RegularBoilerDiv>
            <P2>{service.name}</P2>
            <iframe
              width="100%"
              height="315"
              src={service.src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <Divider />
            <P3>{service.description}</P3>
          </RegularBoilerDiv>
        )}
      </ServicesAndRepairsDiv>
    </StyledLayout>
  );
};

const RegularBoilerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  gap: 10px;
`;

const ServicesAndRepairsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledLayout = styled(Layout)`
  padding-top: 30px;
`;
