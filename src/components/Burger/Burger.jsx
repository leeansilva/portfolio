import React from 'react';
import { useSpring, animated } from 'react-spring';
import './style.css';

const Burger = ({isOpen}) => {
  
  const { top } = useSpring({
    top: isOpen ? '50%' : '20%',
    transform: isOpen ? 'translate(-50%, -50%) rotate(90deg)' : 'translate(-50%, -50%) rotate(0deg)'
  });

  return (
    <div
      className="burger-container"
      style={{ position: 'relative', width: 24, height: 28,left:'10px',top:'8px' }}
    >
      <animated.svg
        viewBox="0 0 100 100"
        style={{
          position: 'absolute',
        
          top:'17px',
          left: '50%',
          transform: 'translate(-50%, -50%) ',
          width: '100%',
          height: '77%'
        }}
      >
        <animated.line
          className="burger-line"
          x1="10"
          y1="10"
          x2="90"
          y2="10"
          stroke="#fff"
          strokeWidth="10"
          strokeLinecap="round"
         
          transform={isOpen ? 'rotate(45)' : ''}
        />
        <animated.line
          className="burger-line"
          x1="10"
          y1="50"
          x2="90"
          y2="50"
          stroke="#fff"
          strokeWidth="10"
          strokeLinecap="round"
          opacity={isOpen ? 0 : 1}
          
        />
        <animated.line
          className="burger-line"
          x1="10"
          y1="90"
          x2="90"
          y2="90"
          stroke="#fff"
          strokeWidth="10"
          strokeLinecap="round"
          
          transform={isOpen ? 'rotate(-45)' : ''}
        />
      </animated.svg>
      
    </div>
  );
};

export default Burger;
