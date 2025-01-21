import React, { useEffect, useState } from 'react';
import test from "../assets/images/test.gif";
import goldorak from "../assets/images/goldorak.jpg";

const Two: React.FC = () => {
  // État pour gérer le style du masque
  const [maskStyle, setMaskStyle] = useState<string>(`url(${test})`);
  const [maskSize, setMaskSize] = useState<string>('cover');
  const [maskPosition, setMaskPosition] = useState<string>('center');

  // Effet pour changer le style du masque après 6200 ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setMaskStyle('none');
      setMaskSize('none');
      setMaskPosition('none');
    }, 6200);

    return () => clearTimeout(timer); // Nettoyage pour éviter les fuites de mémoire
  }, []);

  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="content text-white">
        <div className="font-[Hallowed-Grounds] text-9xl">Hello</div>
        <p>see more</p>
      </div>

      <div
        className="absolute inset-0 -z-10 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${goldorak})`,
          maskImage: maskStyle,
          WebkitMaskImage: maskStyle, // Compatibilité avec les navigateurs WebKit
          maskSize: maskSize,
          WebkitMaskSize: maskSize,
          maskPosition: maskPosition,
          WebkitMaskPosition: maskPosition,
        }}
      ></div>
    </div>
  );
};

export default Two;
