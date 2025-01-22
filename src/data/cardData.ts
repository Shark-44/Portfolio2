import { Card } from "../types/types"; // Importe ton interface existante
import lelabo from "../assets/images/LeLabo.png";
import monkey from "../assets/images/monkey.png";
import alterworld from "../assets/images/alterworld.png";
import pageperso from "../assets/images/pageperso.png";
import recreA2 from "../assets/images/recreA2.png";
import angular from "../assets/images/angular.png";
import pizza from "../assets/images/pizza.png";
import tetris from "../assets/images/tetris.png";
import Memo from "../assets/images/memo.png";

// Exporte les données dans un tableau
export const cards: Card[] = [
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