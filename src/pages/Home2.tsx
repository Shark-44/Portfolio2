import { useState } from "react";
import AnimatedTitle from "../components/AnimatedTitle";

const Home = () => {
  const [animationEnd, setAnimationEnd] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <AnimatedTitle
        text="Bienvenue sur le site"
        speed={100}
        setAnimationEnd={setAnimationEnd}
      />
      
      <div
        className={`
          bg-blue-700 
          h-52 
          w-52 
          rounded-lg       
          ${animationEnd ? "animate-spin" : ""}
        `}
      ></div>
    </div>
  );
};

export default Home;