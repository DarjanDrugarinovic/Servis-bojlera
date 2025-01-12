import { useTimeout } from "hooks/useTimeout";
import { useState, useEffect, FC } from "react";

type Props = {
  sentences: string[];
  delay: number;
  infinite: boolean;
};

export const Typewriter: FC<Props> = ({ sentences, delay, infinite }) => {
  const [sentencesIndex, setSentencesIndex] = useState(0);
  const [text, setText] = useState(sentences[sentencesIndex]);
  const [currentText, setCurrentText] = useState(text[0] || "");
  const [currentIndex, setCurrentIndex] = useState(1);
  const { timeout: timeoutInterval } = useTimeout();

  useEffect(() => {
    const effect = async () => {
      let timeout: ReturnType<typeof setTimeout> | null = null;

      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
      } else if (infinite) {
        await timeoutInterval(1000);
        setCurrentIndex(1);
        const newText = sentences[(sentencesIndex + 1) % sentences.length];
        setCurrentText(newText[0] || "");
        setText(newText);
        setSentencesIndex((prevIndex) => (prevIndex + 1) % sentences.length);
      }

      return () => {
        if (timeout) clearTimeout(timeout);
      };
    };

    effect();
  }, [
    currentIndex,
    delay,
    infinite,
    sentences,
    sentencesIndex,
    text,
    timeoutInterval,
  ]);

  return <>{currentText}</>;
};
