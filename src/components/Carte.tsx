import { useState } from "react";

const Carte = () => {
  const [enRotation, setEnRotation] = useState(false);
  
  const toggleRotation = () => {
    setEnRotation(!enRotation);
  };
  
  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100"
      onClick={toggleRotation}
    >
      <div
        className="relative w-40 h-60  rotate-[30deg]"
        style={{
          perspective: "1000px",
     
          // Key change: rotation origin at bottom right
        }}
      >
        <div
          className={`relative w-full h-full bg-red-500 text-white flex items-center justify-center text-2xl font-bold
            transition-transform duration-500 ${enRotation ? "animate-spin2" : ""}`}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
             // Consistent rotation origin
          }}
        >
          <div
            className="absolute w-full h-full flex items-center justify-center"
            style={{ 
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d"
            }}
          >
            Face Avant
          </div>
          <div
            className="absolute w-full h-full bg-blue-500 flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
              transform: "rotateY(180deg)"
            }}
          >
            Face Arrière
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carte;