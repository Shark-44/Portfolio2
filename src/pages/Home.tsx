import React, { useEffect, useState } from "react";
import test from "../assets/images/test.gif";
import goldorak from "../assets/images/goldorak.jpg";
import Navbar from "../components/Navbar";
import AnimatedTitle from "../components/AnimatedTitle";
import moi from "../assets/images/moi.png"

const Home: React.FC = () => {
  const [maskStyle, setMaskStyle] = useState<string>(`url(${test})`);
  const [maskSize, setMaskSize] = useState<string>("cover");
  const [maskPosition, setMaskPosition] = useState<string>("center");
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  const [isTextAnimatedVisible, setIsTextAnimatedVisible] = useState<boolean>(false);
  const [isSecondLineVisible, setIsSecondLineVisible] = useState<boolean>(false);
  const [firstAnimationEnd, setFirstAnimationEnd] = useState<boolean>(false);
  const [animationEnd, setAnimationEnd] = useState(false);

  useEffect(() => {
    setIsNavbarVisible(false);
    const timer = setTimeout(() => {
      setMaskStyle("none");
      setMaskSize("none");
      setMaskPosition("none");
      setIsNavbarVisible(true);
      setIsTextAnimatedVisible(true);
    }, 6200);
    return () => clearTimeout(timer);
  }, []);

  // Gérer l'affichage du deuxième texte après la fin de l'animation du premier
  useEffect(() => {
    if (firstAnimationEnd) {
      setIsSecondLineVisible(true);
    }
  }, [firstAnimationEnd]);

  useEffect(() => {
    document.body.classList.add("background-black");
    return () => {
      document.body.classList.remove("background-black");
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center h-screen">
      {isNavbarVisible && <Navbar />}
      
      {isTextAnimatedVisible ? (
        <div className="text-center">
          <AnimatedTitle
            text="Salut! je suis Joanny BERNARDEAU"
            speed={100}
            setAnimationEnd={setFirstAnimationEnd}
          />
          
          {isSecondLineVisible && (
            <AnimatedTitle
              text="Développeur junior d'un demi siècle"
              speed={100}
              setAnimationEnd={setAnimationEnd}
            />
          )}
          {  animationEnd && (
          <img src= {moi} alt=""    
                style={{
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                }}    
                className={`h-60 w-60 p-4 ml-52 mb-4
                ${animationEnd ? "animate-spin" : ""}
                `} />)}
   
        </div>
    
      ) : (
        <div className="content text-white">
          <div className="font-[Hallowed-Grounds] text-9xl">Hello</div>
          <p>see more</p>
        </div>
      )}
      
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${goldorak})`,
          maskImage: maskStyle,
          WebkitMaskImage: maskStyle,
          maskSize: maskSize,
          WebkitMaskSize: maskSize,
          maskPosition: maskPosition,
          WebkitMaskPosition: maskPosition,
        }}
      ></div>
    </div>
  );
};

export default Home;