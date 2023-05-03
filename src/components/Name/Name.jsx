import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import { gsap } from "gsap";
import './style.css'

const Name = ({ text, color,fontSize }) => {
  const spanRefs = useRef([]);

  useEffect(() => {
    Splitting();

    //Animacion inicial
    const animationLetter = gsap.fromTo(spanRefs.current, {
      opacity: 0
    },{
      opacity: 1,
      duration: 0.1,
      stagger:{
        from: "left",
        amount: 1
      },
      ease: 'none'
    } );

    return () =>{
      animationLetter.kill();
    }

  }, []);

  const handleHover = (e) => {

    gsap.killTweensOf(e.target);
    gsap.set(e.target, {
      left:100,
      top:100,
    })

    const tl1 = gsap
    .timeline()
    .to(e.target, {
      duration: 0.2,
      rotate: 12,
      scale: 1.5,
    })
    .to(e.target,{
      rotate: 0,
      duration: 0.2,
      scale: 1,
    })
    .to(e.target, {
      rotate:6,
      duration: 0.2,
    })
    .to(e.target,{
      rotate: 0,
      duration: 0.2,
    })

   
  };



  return (
    <div className="Name-text-container">
      <div className="Name-word">
        {text &&
          Array.from(text).map((letter, index) => (
            <animated.span
              key={index}
              className="char"
              style={{color: color, fontSize: fontSize }}
              onMouseEnter={handleHover}
              ref={(el) => spanRefs.current[index] = el}
            >
              {letter}
            </animated.span>
          ))}
      </div>
    </div>
  );
};

export default Name;
