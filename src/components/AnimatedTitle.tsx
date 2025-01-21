import { useState, useEffect } from "react";

interface AnimatedTitleProps {
  text: string;
  speed?: number;
  setAnimationEnd: (value: boolean) => void;  // Correction du type
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ 
  text, 
  speed = 100, 
  setAnimationEnd 
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let isMounted = true;

    const interval = setInterval(() => {
      if (isMounted && index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else if (isMounted) {
        clearInterval(interval);
        setAnimationEnd(true);
      }
    }, speed);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [text, speed, setAnimationEnd]);

  return <h1 className="text-3xl font-bold mb-8">{displayedText}</h1>;
};

export default AnimatedTitle;