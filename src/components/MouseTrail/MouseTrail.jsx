import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { gsap } from "gsap";

function MouseTrail() {
  const [isVisible, setIsVisible] = useState(true);
  const divsRefs = useRef([]);


  useEffect(() => {
    const circles = document.querySelectorAll('.circle');
    const coords = {
      x: 0,
      y: 0,
    };

    let timeoutId = null;

    circles.forEach(function (circle) {
      circle.x = 0;
      circle.y = 0;
    });

    const animatedCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = circle.x - 12 + 'px';
        circle.style.top = circle.y - 12 + 'px';

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
        circle.style.backgroundColor = `#${Math.round(Math.random(100, 900) * 1000)}`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.5;
        y += (nextCircle.y - y) * 0.5;
      });

      // Reiniciar temporizador en cada movimiento
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 100); // Cambiar el tiempo de acuerdo a tus preferencias
    };

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
      animatedCircles();
      setIsVisible(true); // Mostrar los círculos inmediatamente al mover el mouse
    };


    window.addEventListener('mousemove', handleMouseMove);
    // window.addEventListener('touchmove', handleTouchMove);

    // Limpieza de eventos al desmontar el componente
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      // window.removeEventListener('touchmove', handleTouchMove);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    //Animacion inicial
    if (!isVisible){
      const animationLetter = gsap.fromTo(divsRefs.current, {
        opacity: 1
      },{
        opacity: 0,
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
    } else {
      const animationLetter = gsap.fromTo(divsRefs.current, {
        opacity: 0
      },{
        opacity: 1,
        stagger:{
          from: "left",
          amount: 1
        },
        ease: 'none'
      } );
  
      return () =>{
        animationLetter.kill();
      }
    }

  }, [isVisible]);

  return (
    <div className={`circle-container `}>
      <div ref={(el) => divsRefs.current[0] = el} className="circle"></div>
      <div ref={(el) => divsRefs.current[1] = el} className="circle"></div>
      <div ref={(el) => divsRefs.current[2] = el} className="circle"></div>
      <div ref={(el) => divsRefs.current[3] = el} className="circle"></div>
      <div ref={(el) => divsRefs.current[4] = el} className="circle"></div>
      <div ref={(el) => divsRefs.current[5] = el} className="circle"></div>
      <div ref={(el) => divsRefs.current[6] = el} className="circle"></div>
      <div ref={(el) => divsRefs.current[7] = el} className="circle"></div>
      <div ref={(el) => divsRefs.current[8] = el} className="circle"></div>
      <div ref={(el) => divsRefs.current[9] = el} className="circle"></div>
    </div>
  );
}

export default MouseTrail;
