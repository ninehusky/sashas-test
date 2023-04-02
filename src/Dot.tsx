import React, { useRef, useState } from 'react';
import './Dot.css';

interface Props {
  animationDelay: string;
}

const Dot: React.FC<Props> = ({ animationDelay }) => {
  const dotRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  // const [animationDelay, setAnimationDelay] = useState((Math.random() * 8) + "ms");

  const handleAnimationEnd = () => {
    // Add the CSS class that triggers the animation
    if (dotRef.current) {
      dotRef.current.classList.add('dot-fade');
    }
    handleRestartAnimation();
    setX(Math.floor(Math.random() * 100));
    setY(Math.floor(Math.random() * 100));
    console.log("x", x, "y", y);
  };

  const handleRestartAnimation = () => {
    // Remove the CSS class to reset the animation
    if (dotRef.current) {
      dotRef.current.classList.remove('dot-fade');
      // Use setTimeout to ensure that the class is removed before re-adding it
      setTimeout(() => {
        dotRef.current?.classList.add('dot-fade');
      }, 10);
    }
  };


  return (
    <div
      className="dot dot-fade"
      ref={dotRef}
      onAnimationEnd={handleAnimationEnd}
      onClick={handleRestartAnimation}
      style={{
        // animationDelay: `${delayTime}ms`,
        animationDelay: animationDelay,
        top: x + '%',
        left: y + '%',
      }}
    ></div>
  );
};

export default Dot;
