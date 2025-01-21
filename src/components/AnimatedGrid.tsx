import { useState, useEffect } from "react";

const AnimatedGrid = () => {
  const rows = 8;
  const cols = 2;
  const totalCells = rows * cols;
  const [hiddenCells, setHiddenCells] = useState<Set<number>>(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      setHiddenCells((prev) => {
        if (prev.size >= totalCells) {
          clearInterval(interval);
          return prev;
        }
        const randomIndex = Math.floor(Math.random() * totalCells);
        const newSet = new Set(prev);
        newSet.add(randomIndex);
        return newSet;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [totalCells]);

  const getCellStyle = (index: number) => {
    const isHidden = hiddenCells.has(index);
    const isLeftColumn = index % cols === 0;
    return `w-full h-full border border-white transition-all duration-700 ease-in-out ${
      isHidden
        ? isLeftColumn
          ? "-translate-x-full opacity-0"  // 100% vers la gauche
          : "translate-x-full opacity-0"   // 100% vers la droite
        : "translate-x-0 opacity-100"      // position initiale
    }`;
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          width: "100%",
          height: "100vh",
        }}
      >
        {Array.from({ length: totalCells }).map((_, index) => (
          <div
            key={index}
            className={getCellStyle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedGrid;