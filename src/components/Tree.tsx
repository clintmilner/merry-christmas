import React, { useState, useEffect } from 'react';
import './Tree.css';

interface CircleProps {
  forceColor?: string;
  isFirst?: boolean;
}

const Circle: React.FC<CircleProps> = ({ forceColor, isFirst = false }) => {
  const [color, setColor] = useState(forceColor ?? 'var(--tree-green)');
  const [isLight,setIsLight] = useState(false);
  useEffect(() => {
    if (forceColor) return;

    const interval = 1400;

    const timer = setInterval(() => {
      if (Math.random() < 0.7) {
        setColor('var(--tree-green)');
        setIsLight(false)
      } else {
        setIsLight(true)
        const lights = [
          'var(--light-red)',
          'var(--light-blue)',
          'var(--light-yellow)',
          'var(--light-purple)',
          'var(--light-orange)',
        ];
        setColor(lights[Math.floor(Math.random() * lights.length)]);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [forceColor]);

  return (
    <div
      className={`circle ${isFirst ? 'circle-large' : ''} ${isLight ? 'light' : ''}`}
      style={{ backgroundColor: `rgb(${color})` }}
    />
  );
};

const Tree = () => {
  const [rowCount, setRowCount] = useState(18);

  useEffect(() => {
    const updateTreeSize = () => {
      const width = window.innerWidth;
      if (width < 400) {
        setRowCount(8);
      } else if (width < 600) {
        setRowCount(10);
      } else if (width < 768) {
        setRowCount(12);
      } else if (width < 900) {
        setRowCount(15);
      } else if (width < 1024) {
        setRowCount(17);
      } else {
        setRowCount(18);
      }
    };

    updateTreeSize();
    window.addEventListener('resize', updateTreeSize);
    return () => window.removeEventListener('resize', updateTreeSize);
  }, []);

  // Create rows array dynamically based on rowCount
  const rows = [...Array(rowCount)].map((_, i) => i + 1);

  return (
    <div className="tree-container">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="tree-row">
          {[...Array(row)].map((_, circleIndex) => (
            <Circle
              key={circleIndex}
              forceColor={rowIndex === 0 ? 'var(--light-yellow)' : undefined}
              isFirst={rowIndex === 0 && circleIndex === 0}
            />
          ))}
        </div>
      ))}

      <h1>Merry Christmas</h1>
    </div>
  );
};

export default Tree;