import { useEffect, useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import styled from "styled-components";
import { P3 } from "components/Paragraphs";

type Item = {
  id: string;
  direction: "left" | "right";
  title: string;
  description: string;
};

const items: Item[] = [
  {
    id: "1",
    direction: "left",
    title: "NAŠA PRIČA",
    description:
      "Vodoinstalater postoji i radi već 19 godina. Svoj posao obavljamo profesionalno i pedantno sa željom da svaki naš klijent bude zadovoljan.",
  },
  {
    id: "2",
    direction: "right",
    title: "GARANCIJA",
    description:
      "Na svoj rad naš vodoinstalater servis daje pisanu garanciju. Garanciji podleže sve što se tiče našeg rada i biće ispravljeno za 24h",
  },
  {
    id: "3",
    direction: "left",
    title: "REZERVNI DELOVI",
    description:
      "U svom poslovanju se trudimo i insistiramo na najkvalitetnijim delovima da ni mi, ni naši klijenti ne bi imali dodatnih problema.",
  },
  {
    id: "4",
    direction: "right",
    title: "BRZ DOLAZAK",
    description:
      "Naše intervencije projektujemo tako da sve budu izvedene u roku 12h a najkasnije u ekstremnim slučajevima 24h",
  },
  {
    id: "5",
    direction: "left",
    title: "HITNE INTERVENCIJE",
    description:
      "Za hitne intervencije smo dostupni 24h, sedam dana u nedelji, 365 dana godišnje. Vreme izlaska na hitne intervencije je oko 20 min.",
  },
  {
    id: "6",
    direction: "right",
    title: "REKLAMACIJE",
    description:
      "Da li se reklamacije naplaćuju? Naravno da ne. Svaki naš eventualni propust tokom intervencije biće saniran i neće biti naplaćen.",
  },
];

const Transitions = () => {
  const visibleItemsRef = useRef<Record<string, boolean>>({});
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let updated = false;
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting !== visibleItemsRef.current[id]) {
            visibleItemsRef.current[id] = entry.isIntersecting;
            updated = true;
          }
        });

        if (updated) {
          setVisibleItems({ ...visibleItemsRef.current });
        }
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {items.map(({ id, direction, title, description }, index) => (
        <ItemContainer
          key={id}
          id={id}
          ref={(el) => (itemRefs.current[index] = el)}
        >
          <Slide
            in={!!visibleItems[id]}
            direction={direction === "left" ? "right" : "left"}
            timeout={500}
          >
            <StyledPaper elevation={3}>
              <P3 $color="white">{title}</P3>
              <p>{description}</p>
            </StyledPaper>
          </Slide>
        </ItemContainer>
      ))}
    </>
  );
};

export default Transitions;

const StyledPaper = styled(Paper)`
  && {
    width: 90%;
    max-width: 400px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
