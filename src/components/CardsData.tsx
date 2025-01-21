import lelabo from "../assets/images/LeLabo.png";
import monkey from "../assets/images/monkey.png";
import alterworld from "../assets/images/alterworld.png";
import pageperso from "../assets/images/pageperso.png";
import recreA2 from "../assets/images/recreA2.png";
import angular from "../assets/images/angular.png";
import pizza from "../assets/images/pizza.png";
import tetris from "../assets/images/tetris.png";
import Memo from "../assets/images/memo.png";

const cards = [
  {
    id: 1,
    title1: "Naissance d'un ange",
    year: "1972",
  },
  {
    id: 2,
    title1: "La reconversion",
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
    paragrahe:"Avec React, j&apos;ai développé un projet avec typescript afin d&apos;apprendre et savoir faire",
    lien: "https://typescript-react-swart.vercel.app/",
    github: "https://github.com/Shark-44/Typescript-react",
    img: recreA2

},
{
    id: 8,
    title2:"S-B / Angular",
    paragrahe:"Pour m'initier et comprendre les fonctionnalités. Sur un serveur maison, dont le lien peut être demandé",
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
function CardsData() {
    return (
      <div className="w-full bg-gray-100 flex flex-wrap">
        {cards.map((card) => (
          <div
            key={card.id}
            className="h-52 w-full md:w-1/2 lg:w-1/3 p-2 flex flex-col items-center justify-center border bg-white rounded-lg shadow-md"
          >            {/* Year */}
          {card.year && <p className="text-yellow-400 text-xl">{card.year}</p>}
            {/* Image */}
            {card.img && (
              <img
                src={card.img}
                alt={card.title2 || card.title1}
                className="h-16 w-16 object-cover rounded-full mb-2"
              />
            )}
            {/* Title1 or Title2 */}
            {card.title1 && <h2 className="text-lg font-bold">{card.title1}</h2>}
            {card.title2 && (
              <h2 className="text-lg font-semibold text-blue-600">{card.title2}</h2>
            )}

            {/* Paragraph */}
            {card.paragrahe && (
              <p className="text-sm text-gray-700 text-center mt-1">
                {card.paragrahe}
              </p>
            )}
            {/* Links */}
            <div className="flex space-x-4 mt-2">
              {card.lien && (
                <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                <a
                  href={card.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-xs"
                >
                  Voir
                </a></button>
              )}
              {card.github && (
                <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                <a
                  href={card.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-xs"
                >
                  GitHub
                </a></button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default CardsData;
