import { useState, useEffect } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
  transitionDuration?: number;
}

const PageTransition = ({ 
  children, 
  transitionDuration = 300 
}: PageTransitionProps) => {
  const rows = 8;
  const cols = 2;
  const totalCells = rows * cols;
  const [isAnimating, setIsAnimating] = useState(true);
  const [hiddenCells, setHiddenCells] = useState<Set<number>>(new Set());
  
  useEffect(() => {
    if (!isAnimating) return;
    
    let timeoutIds: number[] = [];
    const availableCells = new Set(Array.from({ length: totalCells }, (_, i) => i));
    
    const animate = () => {
      if (hiddenCells.size >= totalCells) {
        setIsAnimating(false);
        return;
      }

      const remainingCells = Array.from(availableCells);
      if (remainingCells.length === 0) return;

      const randomIndex = Math.floor(Math.random() * remainingCells.length);
      const cellToHide = remainingCells[randomIndex];
      
      availableCells.delete(cellToHide);
      
      const timeoutId = window.setTimeout(() => {
        setHiddenCells(prev => {
          const newSet = new Set(prev);
          newSet.add(cellToHide);
          return newSet;
        });
        animate();
      }, transitionDuration);
      
      timeoutIds.push(timeoutId);
    };

    animate();

    return () => {
      timeoutIds.forEach(id => window.clearTimeout(id));
    };
  }, [totalCells, isAnimating, transitionDuration]);

  const getCellStyle = (index: number) => {
    const isHidden = hiddenCells.has(index);
    const isLeftColumn = index % cols === 0;
    return `bg-black transition-all duration-300 ease-in-out ${
      isHidden
        ? isLeftColumn
          ? "-translate-x-full"
          : "translate-x-full"
        : "translate-x-0"
    }`;
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full p-8">
        {children}
      </div>
      <div className="w-full h-screen absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            width: "100%",
            height: "100%",
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
    </div>
  );
};

export default PageTransition;