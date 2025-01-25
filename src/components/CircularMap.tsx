import { useState } from 'react';
import { motion } from 'framer-motion';

const CircularMap = () => {
  const [rotation, setRotation] = useState(0);
  console.log(setRotation)

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        className="relative w-[400px] h-[200px] bg-blue-200"
        style={{
          transform: `perspective(1000px) rotate3d(1, 0, 0, 30deg) rotateY(${rotation}deg)`,
          transformOrigin: 'bottom right'
        }}
        animate={{
          rotateY: 360
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop'
        }}
      >
        <div className="absolute top-0 left-0 w-2 h-2 bg-red-500"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-green-500"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-500"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-yellow-500"></div>
      </motion.div>
    </div>
  );
};

export default CircularMap;