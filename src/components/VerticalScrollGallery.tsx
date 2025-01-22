import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Howl } from 'howler';

import roly from '../assets/audio/roly-poly.mp3';

import { cards } from "../data/cardData";
import {  CardStates } from '../types/types';


interface SmoothVerticalCarouselProps {
  mute: number;  // mute est un nombre, représentant le volume
}


const SmoothVerticalCarousel = ({ mute }: SmoothVerticalCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
console.log(mute)
  const scrollSound = new Howl({
    src: [roly], 
    volume: mute,
    preload: true,
    html5: true
  });

  const getPrevIndex = (index: number, offset = 1): number =>
    (index - offset + cards.length) % cards.length;
    
  const getNextIndex = (index: number, offset = 1): number =>
    (index + offset) % cards.length;

  const handleScroll = (event: WheelEvent): void => {
    if (isScrolling) return;

    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 400);

    if (event.deltaY > 0) {
      scrollSound.rate(1.0);
      setDirection(1);
      setCurrentIndex((prev) => getNextIndex(prev));
    } else {
      scrollSound.rate(0.9);
      setDirection(-1);
      setCurrentIndex((prev) => getPrevIndex(prev));
    }
    scrollSound.play();
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isScrolling]);

  

  const cardStates: CardStates = {
    topHidden: {
      scale: 0.75,
      opacity: 0,
      y: -320,
      transition: { duration: 0.4 },
    },
    topSmall: {
      scale: 0.8,
      opacity: 0.3,
      width: "130%",
      rotateX: 60,
      y: -340,
      transition: { duration: 0.4 },
    },
    topMedium: {
      scale: 0.9,
      opacity: 0.5,
      width: "122%",
      rotateX: 40,
      y: -210,
      transition: { duration: 0.4 },
    },
    center: {
      scale: 1.2,
      opacity: 1,
      width: "100%",
      y: 0,
      transition: { duration: 0.4 },
    },
    bottomMedium: {
      scale: 0.9,
      opacity: 0.5,
      width: "122%",
      rotateX: -40,
      y: 210,
      transition: { duration: 0.4 },
    },
    bottomSmall: {
      scale: 0.75,
      opacity: 0.3,
      width: "136%",
      rotateX: -60,
      y: 340,
      transition: { duration: 0.4 },
    },
    bottomHidden: {
      scale: 0.75,
      opacity: 0,
      y: 390,
      transition: { duration: 0.4 },
    },
  };

  const renderCard = (
    cardIndex: number,
    position: string,
    isCenter: boolean
  ) => {
    const currentCard = cards[cardIndex];
   
    const trapezeStyle =
    position.includes("top") || position.includes("bottom")
      ? {
          clipPath:
            position.includes("top")
              ? "polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)" 
              : "polygon(0% 0%, 100% 0%, 97% 100%, 03% 100%)", 
        }
      : {};

      return (
        <motion.div
          key={cardIndex}
          className="absolute -translate-x-1/2"
          initial={direction > 0 ? cardStates.bottomHidden : cardStates.topHidden}
          animate={cardStates[position]}
          exit={direction > 0 ? cardStates.topHidden : cardStates.bottomHidden}
        >
          <div
            className={`flex items-center justify-center rounded-lg shadow-lg h-52 text-white font-bold text-2xl ${
              isCenter
                ? "bg-gradient-to-r from-blue-500 to-purple-600"
                : "bg-gradient-to-r from-gray-500 to-gray-700"
            }`}
            style={trapezeStyle}
          >
            <div className="h-52 w-full md:w-1/2 lg:w-7/12 p-2 flex flex-col items-center justify-center   shadow-md">
              {currentCard.year && (
                <p className="text-yellow-400 text-xl">{currentCard.year}</p>
              )}
              {currentCard.img && currentCard.title2 && (
                <div className="flex flex-row items-center justify-center space-x-10 mb-2">
                  <img
                    src={currentCard.img}
                    alt={currentCard.title2 || currentCard.title1}
                    className="h-28 w-56 object-cover rounded-full"
                  />
                  <h2 className="text-xl font-semibold text-lime-200">
                    {currentCard.title2}
                  </h2>
                </div>
              )}
              {currentCard.title1 && (
                <h2 className="text-lg font-bold text-black">{currentCard.title1}</h2>
              )}
              {currentCard.paragrahe && (
                <p className="text-sm text-white text-center mt-1">
                  {currentCard.paragrahe}
                </p>
              )}
              <div className="flex space-x-4 mt-2">
                {currentCard.lien && (
                  <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                    <a
                      href={currentCard.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-xs"
                    >
                      Voir
                    </a>
                  </button>
                )}
                {currentCard.github && (
                  <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                    <a
                      href={currentCard.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-xs"
                    >
                      GitHub
                    </a>
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      );
      
  };

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      
      <div className="relative h-[100vh] flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {renderCard(getPrevIndex(currentIndex, 2), "topSmall", false)}
          {renderCard(getPrevIndex(currentIndex), "topMedium", false)}
          {renderCard(currentIndex, "center", true)}
          {renderCard(getNextIndex(currentIndex), "bottomMedium", false)}
          {renderCard(getNextIndex(currentIndex, 2), "bottomSmall", false)}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SmoothVerticalCarousel;

