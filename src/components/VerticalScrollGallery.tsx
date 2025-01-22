import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lelabo from "../assets/images/LeLabo.png";
import monkey from "../assets/images/monkey.png";
import alterworld from "../assets/images/alterworld.png";
import pageperso from "../assets/images/pageperso.png";
import recreA2 from "../assets/images/recreA2.png";
import angular from "../assets/images/angular.png";
import pizza from "../assets/images/pizza.png";
import tetris from "../assets/images/tetris.png";
import Memo from "../assets/images/memo.png";
import { Howl } from 'howler';
import roly from '../assets/audio/roly-poly.mp3';

const scrollSound = new Howl({
  src: [roly], // Remplacez par le chemin de votre fichier son
  volume: 0.5,
  preload: true,
  html5: true
});

// Interface pour une carte
interface Card {
  id: number;
  title1?: string;
  title2?: string;
  year?: string;
  paragrahe?: string;
  lien?: string | null;
  github?: string;
  img?: string;
}


// Interface pour les états d'animation
interface CardStates {
  [key: string]: {
    scale: number;
    opacity: number;
    y: number;
    transition: { duration: number };
    width?: string;
    rotateX?: number;
  };
}




const cards: Card[] = [
  {
    id: 1,
    title1: "Naissance d'un ange",
    year: "1972",
  },
  {
    id: 2,
    title1: "La reconversion, apprendre a coder et ne plus bricoler",
    year: "2023",
  },
  {
    id: 3,
    title2: "Le Labo",
    paragrahe:
      "Avec les basiques HTML, CSS et Javascript. Le premier projet en groupe avec thème, design et fonctionnalités libres",
    lien: "http://labo.devbyeloise.fr/",
    github: "https://github.com/Shark-44/ProjetLabo",
    img: lelabo,
  },
  {
    id: 4,
    title2: "Monkey Shroom",
    paragrahe:
      "Avec React et express. Un projet en groupe avec objectif d'une boutique à laquelle un jeu permet des crédits",
    lien: null,
    github: "https://github.com/Shark-44/Projet2-wildcodeschool/tree/main",
    img: monkey,
  },
  {
    id: 5,
    title2: "Alterworld",
    paragrahe: "Mon projet DWWM sous react/node",
    lien: null,
    github: "https://github.com/Shark-44/projet3wildcodeschool",
    img: alterworld,
  },
  {
    id: 6,
    title2:"Page perso",
    paragrahe:"Avec React et certaines librairies, je me suis exprimé dans des essais",
    lien: "https://pageperso-plum.vercel.app/",
    github: "https://github.com/Shark-44/Pageperso",
    img: pageperso

},
{
    id: 7,
    title2:"Recré A2",
    paragrahe:"Avec react j'ai voulu m'initier a typescript",
    lien: "https://typescript-react-swart.vercel.app/",
    github: "https://github.com/Shark-44/Typescript-react",
    img: recreA2

},
{
    id: 8,
    title2:"S-B / Angular",
    paragrahe:"Un projet fullstack sous Spring-boot et Angular. Sur un serveur maison, dont le lien peut être demandé",
    lien: "lien sur demande",
    github: "https://github.com/Shark-44/1erbackendJava",
    img: angular

},
{
    id: 9,
    title2:"Pizza",
    paragrahe:"Sous React et typescript, je démontre une evolution de savoir coder",
    lien: "",
    github: "https://github.com/Shark-44/Pizza",
    img: pizza

},
{
    id: 10,
    title2:"Tetris",
    paragrahe:"Revoir le javascript avec le celebre jeu Tétris",
    lien: " https://tetris-red-zeta.vercel.app ",
    github: "https://github.com/Shark-44/Tetris",
    img: tetris

},
{
    id: 11,
    title2:"Start projet",
    paragrahe:"Memo pour lancer un projet react/typescript/tailwind",
    lien: " https://memo-start-projet.vercel.app/ ",
    github: "https://github.com/Shark-44/Memo_start_projet",
    img: Memo

},
];


const SmoothVerticalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

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

