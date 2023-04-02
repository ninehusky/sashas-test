import React, { useRef } from 'react';
import './Dot.css';

interface Props {
  delayTime: number;
}

const Dot: React.FC<Props> = ({ delayTime }) => {
  const dotRef = useRef<HTMLDivElement>(null);

  const handleAnimationEnd = () => {
    // Add the CSS class that triggers the animation
    if (dotRef.current) {
      dotRef.current.classList.add('dot-fade');
    }
    handleRestartAnimation();
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

  const componentDidMount = () => {
    // Add the CSS class that triggers the animation
    if (dotRef.current) {
      dotRef.current.classList.add('dot-fade');
    }
  };

  return (
    <div
      className="dot"
      ref={dotRef}
      onAnimationEnd={handleAnimationEnd}
      onClick={handleRestartAnimation}
      style={{ animationDelay: `${delayTime}ms` }}
    ></div>
  );
};

export default Dot;
