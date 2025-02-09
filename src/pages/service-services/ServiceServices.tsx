import { Divider } from "components/Divider";
import { Layout } from "components/Layout";
import { P2, P3 } from "components/Paragraphs";
import { Section } from "components/Section";
import { deliveryServices } from "data/delivery-services";
import styled from "styled-components";

export const ServiceServices = () => {
  return (
    <StyledLayout>
      <Section text={["USLUGE SERVISA"]} />
      <DeliveryServicesDiv>
        {deliveryServices.map(({ id, name, src, description }, index) => (
          <DeliveryServiceDiv key={id}>
            <P2>{name}</P2>
            <Image src={src} alt={name} width="100%" />
            <DescriptionDiv>
              <P3>{description}</P3>
            </DescriptionDiv>
            {index !== deliveryServices.length - 1 ? <Divider /> : null}
          </DeliveryServiceDiv>
        ))}
      </DeliveryServicesDiv>
    </StyledLayout>
  );
};

const DescriptionDiv = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.primary};
  padding: 10px;
`;

const Image = styled.img`
  border: 3px solid ${({ theme }) => theme.colors.primary};
`;

const DeliveryServiceDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  gap: 10px;
`;

const DeliveryServicesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledLayout = styled(Layout)`
  padding-top: 30px;
`;
