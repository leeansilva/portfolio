import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import Espher from '../../components/Espher/Espher';
import './style.css';
import Name from '../../components/Name/Name';
import Button from '../../components/Button/Button';

const AboutMeScroll = ( { isActive } ) => {
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
            translateX: isActive === 'previous'
            ? '0px'
            : isActive === 'next'
            ? '15%'
            : isActive === 'next projects'
            && '10%'
            // gap:0,
          }, {
            //translateX: isActive == 'next' ? "15vw" : '0px',
            translateX: isActive === 'next'
            ? '15%'
            : isActive === 'previous'
            ? '0px'
            : isActive === 'previous projects'
            && '15%',
             ease: "none",
             duration: 0.5 ,
          })

          function createLineAnimation(line, heightFrom,heightTo,xFrom, xTo ) {
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
                  duration: 0.5,
                }
              ); 
            }

          function createAnimationContent(element,opacityTo,xFrom,xTo) {
            return gsap.fromTo(
              element.current,{
                opacity: 0,
                translateX: xFrom,
              },{
                opacity: opacityTo,
                translateX: xTo,
                ease:'none',
                duration: 0.5,
              }
            )
          }

          const animationText = gsap.fromTo(textRef.current, {
            opacity: isActive == 'next' || isActive == 'previous projects' ? 0: 1
          },{
            opacity: isActive == 'next' || isActive == 'previous projects' ? 1: 0,
            duration: 0.2,
            width:'600px',
            ease: 'none'
          } );
          const nameAnimation = createAnimationContent(nameRef,isActive == 'next' || isActive == 'previous projects' ? 1: 0, "100px","0px" );
          const espherAnimation = createAnimationContent(espherRef,isActive == 'next' || isActive == 'previous projects' ? 1: 0,"20px","0px");

          const line1Animation = createLineAnimation(line1,isActive == 'next'? "20%" : isActive == 'previous' || isActive == 'previous projects' && '-20%',isActive == 'next' ? "20%" : isActive == 'previous' || isActive == 'previous projects' && '-20%',0,0);
          const line2Animation = createLineAnimation(line2,isActive == 'next'? "20%" : isActive == 'previous' || isActive == 'previous projects' && '-20%',isActive == 'next' ? "20%" : isActive == 'previous' || isActive == 'previous projects' && '-20%',0, isActive === 'next' || isActive == 'previous projects' ? "-20px" : isActive === 'previous' && '0');
          const line3Animation = createLineAnimation(line3,isActive == 'next'? "20%" : isActive == 'previous' || isActive == 'previous projects' && '-20%',isActive == 'next' ? "20%" : isActive == 'previous' || isActive == 'previous projects' && '-20%',0, isActive === 'next' || isActive == 'previous projects' ? "-20px" : isActive === 'previous' && '0');
          const line4Animation = createLineAnimation(line4,isActive == 'next'? "20%" : isActive == 'previous' || isActive == 'previous projects' && '-20%',isActive == 'next' ? "20%" : isActive == 'previous' || isActive == 'previous projects' && '-20%',0, isActive === 'next' || isActive == 'previous projects' ? "-20px" : isActive === 'previous' && '0');
          const line5Animation = createLineAnimation(line5,isActive == 'next'? "20%" : isActive == 'previous' || isActive == 'previous projects' && '-20%',isActive == 'next' ? "20%" : isActive == 'previous' || isActive == 'previous projects' && '-20%',0, isActive === 'next' || isActive == 'previous projects' ? "80px" : isActive === 'previous' && '0');
          const line6Animation = createLineAnimation(line6,isActive == 'next'? "20%" : isActive == 'previous' || isActive == 'previous projects' && '-20%',isActive == 'next' ? "20%" : isActive == 'previous' || isActive == 'previous projects' && '-20%',0, isActive === 'next' || isActive == 'previous projects' ? "180px" : isActive === 'previous' && '0');
          const line7Animation = createLineAnimation(line7,isActive == 'next'? "20%" : isActive == 'previous' || isActive == 'previous projects' && '-20%',isActive == 'next' ? "20%" : isActive == 'previous' || isActive == 'previous projects' && '-20%',0, isActive === 'next' || isActive == 'previous projects' ? "300px" : isActive === 'previous' && '0');
    
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
          espherAnimation.kill();
          animationText.kill();
        }
        
      }, [isActive]);

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