import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import { gsap,Bounce,Elastic } from "gsap";
import './style.css'

const Name = ({ text }) => {
  useEffect(() => {
    Splitting();
  }, []);



  const handleHover = (e) => {

    gsap.killTweensOf(e.target);
    gsap.set(e.target, {
      left:100,
      top:100
    })

    const tl1 = gsap
    .timeline()
    .to(e.target, {
      duration: 0.2,
      rotate: 10,
      scale: 1,
    })
    .to(e.target,{
      rotate: 0,
      duration: 0.2,
      scale: 2,
    })
    .to(e.target, {
      rotate:10,
      duration: 0.2,
      scale: 1
    })
    .to(e.target,{
      rotate: 0,
      duration: 0.2,
    })

   
  };

  const handleHoverOut = (e) => {
    gsap.to(e.target, {
      duration: 0.2,
      x: 0,
      y: 0,
      ease: "power2.out",
    });
  };

  const letters = document.querySelectorAll(".word > .char");

  const springs = useSpring({
    to: { transform: "scale(1.5)" },
    from: { transform: "scale(1)" },
    config: { mass: 1, tension: 280, friction: 60 },
    reset: true,
  });

  return (
    <div className="Name-text-container">
      <div className="Name-word">
        {text &&
          Array.from(text).map((letter, index) => (
            <animated.span
              key={index}
              className="char"
              style={springs}
              onMouseEnter={handleHover}
              
            >
              {letter}
            </animated.span>
          ))}
      </div>
    </div>
  );
};

export default Name;
