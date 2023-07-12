import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Espher from '../../components/Espher/Espher';
import './style.css';
import Name from '../../components/Name/Name';
import Button from '../../components/Button/Button';
gsap.registerPlugin(ScrollTrigger);

//posiblemente para projects, darle un position absolute a las lineas, y moverlas desde -100vw hasta 0px

const AboutMeScroll = ( { triggerRef2 } ) => {
    const AboutMeContainer = useRef(null);
    const line1 = useRef(null);
    const line2 = useRef(null);
    const line3 = useRef(null);
    const line4 = useRef(null);
    const line5 = useRef(null);
    const line6 = useRef(null);
    const line7 = useRef(null);
    const nameRef = useRef(null);
    const espherRef = useRef(null);
    const textRef = useRef([]);
    
    useEffect(() => {

          const aboutMeContainerAnimation = gsap.fromTo(AboutMeContainer.current, {
            translateX: "0px",
            gap:0,
          }, {
            translateX: "130vw",
            gap:'20px',
            opacity: "0.2",
            display:"none",
            backgroundColor:'black',
            color: 'white',
            ease: "none",
            duration: 1,
            scrollTrigger: {
            trigger : AboutMeContainer.current,
            start: "left+=110%",
            end: "left+=300%",
            scrub: true,
              }
            
          })

          function createLineAnimation(line, heightFrom,heightTo,xFrom, xTo, trigger ) {
              return gsap.fromTo(
                line.current,
                {
                  height: heightFrom,
                  translateX: xFrom,
                },
                {
                  height: heightTo,
                  translateX: xTo,
                  ease: "none",
                  duration: 1,
                  scrollTrigger: {
                    trigger: trigger.current,
                    start: "top left",
                    end: "1000 top",
                    scrub: true
                  }
                }
              ); 
            }

          function createAnimationContent(element,opacityTo,xFrom,xTo,trigger) {
            return gsap.fromTo(
              element.current,{
                opacity: 0,
                translateX: xFrom,
              },{
                opacity: opacityTo,
                translateX: xTo,
                ease:'none',
                duration: 1,
                scrollTrigger: {
                  trigger: trigger.current,
                  start:  "left+=500 center",
                  end: "+=700 end",
                  scrub: true,
                }
              }
            )
          }

          const animationText = gsap.fromTo(textRef.current, {
            opacity: 0
          },{
            opacity: 1,
            duration: 2,
            width:'600px',
            scrollTrigger: {
              trigger: triggerRef2.current,
              start: "right center",
              end: "+=100 center",
              scrub: true,
            },
            stagger:{
              from: "right",
              amount: 2
            },
            ease: 'none'
          } );

          const nameAnimation = createAnimationContent(nameRef, 1, "100px","0px", triggerRef2);
          const espherAnimation = createAnimationContent(espherRef,1,"20px","0px", triggerRef2);

       
          const line1Animation = createLineAnimation(line1, "20%","30%",0,0, triggerRef2);
          const line2Animation = createLineAnimation(line2,"20%","20%",0, "-20px",triggerRef2);
          const line3Animation = createLineAnimation(line3,"20%","20%",0, "-20px",triggerRef2);
          const line4Animation = createLineAnimation(line4,"20%","20%",0, "-20px",triggerRef2);
          const line5Animation = createLineAnimation(line5,"20%","20%",0, "80px",triggerRef2);
          const line6Animation = createLineAnimation(line6,"20%","20%",0, "180px",triggerRef2);
          const line7Animation = createLineAnimation(line7,"20%","20%",0, "300px",triggerRef2);
    
        return () =>{
          aboutMeContainerAnimation.kill();
          line1Animation.kill();
          line2Animation.kill();
          line3Animation.kill();
          line4Animation.kill();
          line5Animation.kill();
          line6Animation.kill();
          line7Animation.kill();
          nameAnimation.kill();
          animationText.kill();
          espherAnimation.kill();
        }
        
      }, []);

  return (
    <div className='sections aboutMe_container' ref={ AboutMeContainer }  >    
              <div ref={ line1 } className='flexBlocks_line line1'>
                <div ref={ nameRef }>
                  <Name fontSize={"80px"} color={"black"} text={ "Sobre mi" }/>
                </div>          
              </div>
              <div ref={ line2 } className='flexBlocks_line line2'></div>
              <div ref={ line3 } className='flexBlocks_line line3'>
                <p ref={ (el) => textRef.current[0] = el } className='aboutMe_text text1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit aut odit ut natus incidunt aspernatur nisi nam ea sit aperiam laboriosam reprehenderit, voluptatum, beatae optio distinctio molestias, maiores soluta dolorem?</p>
              </div>
              <div ref={ line4 } className='flexBlocks_line line4'>
                <p ref={ (el) => textRef.current[1] = el } className='aboutMe_text text1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit aut odit ut natus incidunt aspernatur nisi nam ea sit aperiam laboriosam reprehenderit, voluptatum, beatae optio distinctio molestias, maiores soluta dolorem?</p>
              </div>
              <div ref={ line5 } className='flexBlocks_line line5'>
                <p ref={ (el) => textRef.current[2] = el } className='aboutMe_text text1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit aut odit ut natus incidunt aspernatur nisi nam ea sit aperiam laboriosam reprehenderit, voluptatum, beatae optio distinctio molestias, maiores soluta dolorem?</p>
              </div>
              <div ref={ line6 } className='flexBlocks_line line6'>
                <p ref={ (el) => textRef.current[3] = el } className='aboutMe_text text1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit aut odit ut natus incidunt aspernatur</p>
              </div>
              <div ref={ line7 } className='flexBlocks_line line7'>
                <div style={{width: '150px', position: 'absolute', left: '50vh'}} >
                  <Button color={'dark'} title={'Más'} />
                </div>
              </div>
              
              <div ref={ espherRef } className='espher_container'>
                <Espher/>
              </div>
      </div>
  )
}

export default AboutMeScroll