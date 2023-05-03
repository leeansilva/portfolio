import './style.css';
import { gsap } from "gsap";
import React, { StrictMode, useEffect, useRef, useState } from 'react';


//cuadno importemos este comp, importarlo dentro de un div para manejar su posi

const Button = ({color, title}) => {
    const [hoverTime, setHoverTime] = useState(0);
    const [colorButton, setColorButton] = useState('');

    const text = useRef(null);
    const columns = useRef([]);

  const handleMouseEnter = () => {
   
    const textAnimation = gsap
    .timeline()
    .to(text.current, {
        color: color === "light" ? '#fff' : "#000",
        duration: 0.1,
        delay:0.1
    });

    const columnsAnimation = gsap.fromTo(columns.current, {
        height: "0%",
        border: `'0px outset'${color === 'light' ? "#000" : "#fff"}`
      },{
        height: "100%",
        border: `'2px outset'${color === 'light' ? "#000" : "#fff"}`,
        duration: 0.1,
        onComplete:()=>{ setHoverTime(1) },
        stagger:{
          from: "left",
          amount: 0.4
        },
        ease: 'none'
      } );
 
    textAnimation.play();
   
    return () =>{
        animationLetter.kill();
        gsap.killTweensOf(columns.current);
      }
  };

  const handleMouseLeave = () => {

      const textAnimation2 = gsap
      .timeline()
      .to(text.current, {
          color: color === "light" ? '#000' : "#fff",
          duration: 0.1,
          delay: 0.3
      })

      const columnsAnimation = gsap.fromTo(columns.current, {
        height: "100%",
        border: `'1px solid'${color === 'light' ? "#000" : "#fff"}`
      },{
        height: "0%",
        border: `'0px solid'${color === 'light' ? "#000" : "#fff"}`,
        duration: 0.1,
        onComplete:()=>{ setHoverTime(0) },
        stagger:{
          from: "left",
          amount: 0.4
        },
        ease: 'none'
      } );  
      
      textAnimation2.play();
      
      return () =>{
        gsap.killTweensOf(columns.current);
        animationLetter.kill();
      }
  };

return (
    <div style={{ border: color === 'light' ? '1px outset #fff' : '1px outset #000'}} className='Button' onMouseEnter={ hoverTime == 0 && handleMouseEnter} onMouseLeave={hoverTime == 1 ? handleMouseLeave : () => setTimeout(handleMouseLeave, 500)} >
        <div style={{backgroundColor: color === 'light' ? "#fff" : "#000"}} className='color1' >
            <div ref={(el) => columns.current[0] = el} style={{ backgroundColor: color === 'light' ? '#000' : "#fff" }} className="columns"></div>
            <div ref={(el) => columns.current[1] = el} style={{ backgroundColor: color === 'light' ? '#000' : "#fff" }} className="columns"></div>
            <div ref={(el) => columns.current[2] = el} style={{ backgroundColor: color === 'light' ? '#000' : "#fff" }} className="columns"></div>
            <div ref={(el) => columns.current[3] = el} style={{ backgroundColor: color === 'light' ? '#000' : "#fff" }} className="columns"></div>
            <div ref={(el) => columns.current[4] = el} style={{ backgroundColor: color === 'light' ? '#000' : "#fff" }} className="columns"></div>
        </div>
        <span ref={ text }  style={{color: color === 'light' ? '#000' : "#fff"}} className='text'>{ title }</span>
    </div>
  )
}

export default Button