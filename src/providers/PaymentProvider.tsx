import { FC, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "router/routes";

interface Props {
  children: ReactNode;
}

const { payment } = routes;

export const PaymentProvider: FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkPayment = async () => {
      try {
        const response = await fetch(
          "https://darjandrugarinovic.github.io/bojleri-payment/"
        );

        const res = await response.text();
        if (res.includes("hasPaid=false")) {
          navigate(payment);
        }
      } catch (err) {
        console.log(err);
      }
    };

    checkPayment();
  }, [navigate]);

  return children;
};
