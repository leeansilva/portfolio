import React, { useEffect, useRef, useState } from 'react';
import Name from '../../components/Name/Name';
import { gsap } from "gsap";

import './style.css'
import Button from '../../components/Button/Button';

const ProjectsScroll = ({isActiveProjects}) => {
  
    const ProjetcScrollContainer = useRef(null);
    const nameRef = useRef(null);
    const lines = useRef([]);
    const line1 = useRef(null);
    const lineProjects = useRef(null);
    const rowProjects = useRef(null);
    const projects = useRef([]);
    const columns = useRef([]);
    const columns2 = useRef([]);
    const info = useRef([]);
    const justPlayInfo = useRef(null);
    const Twitterinfo = useRef(null);


    const handleHover = (element) => {
      gsap.killTweensOf(element == '1' ? columns.current : columns2.current);
      
      const tl1 = gsap.timeline();
    
      tl1.staggerTo(element == '1' ? columns.current : columns2.current, 0.2, {
        height: "100%"
      }, 0.2); // 0.2 es el tiempo de separación entre cada animación
    
      const projectInfoLine = gsap.fromTo(element == '1' ? columns.current[2] : columns2.current[2], {
        width: "10%",
        gap: 0,
      }, {
        width: "150%",
        ease: "none",
        duration: 0.6,
      });
    
      const infoContainer = gsap.fromTo(element == '1' ? Twitterinfo.current : justPlayInfo.current, {
        scale: 0
      }, {
        scale: 1,
        display: 'block',
        ease: "none",
        duration: 0.1,
        onComplete: () => {
          const infoElements = gsap.fromTo(element == '1' ? [info.current[0], info.current[1], info.current[2]] : [info.current[3], info.current[4], info.current[5]], {
            scale: 0
          }, {
            scale: 1,
            display: 'block',
            ease: "none",
            delay:0.2,
            duration: 0.1,
          });
      
        }
      });
    
      return () => {
        projectInfoLine.kill();
        infoContainer.kill();
        tl1.kill();
      };
    };
    

    const handleHoverOut = (element) => {
      gsap.killTweensOf(element == '1' ? columns.current : columns2.current );

      const tl1 = gsap
      .timeline()
      .staggerTo(element == '1' ? columns.current : columns2.current , 0.2, {
        height: "0%"
      }, 0.2) // 0.2 es el tiempo de separación entre cada animación
      const projectInfoLine = gsap.fromTo(element == '1' ? columns.current[2] : columns2.current[2], {
        width: "150%",
        gap:0,
      }, {
        width: "20%",
        ease: "none",
        duration: 0.6,
      })
      const infoContainer = gsap.fromTo(element == '1' ? Twitterinfo.current : justPlayInfo.current, {
        scale: 1,
        gap:0,
      }, {
        scale: 0,
        ease: "none",
        duration: 0.2,
        onComplete: ()=>{
          const infoElements = gsap.fromTo(element == '1' ? [info.current[0], info.current[1], info.current[2]] : [info.current[3], info.current[4], info.current[5]], {
            scale: 1
          }, {
            scale: 0,        
            display: 'block',
            ease: "none",
            delay:0.1,
            duration: 0.1,
          })
        }
      })

     

      return () =>{
        projectInfoLine.kill();
        infoContainer.kill();
        tl1.kill()
      }

    };

    useEffect(() => {

      const linesAnimation = gsap.fromTo(lines.current, {
        translateX:isActiveProjects == 'next'  && "120vw" || isActiveProjects == 'previous contactme',
      },{
        translateX:isActiveProjects == 'previous' || isActiveProjects == 'next contactme' && "0%",
        duration: 0.4,
        stagger:{
          from: isActiveProjects == 'previous contactme' ? "left" : isActiveProjects == 'next' && 'right',
          amount: 0.4
        },
        ease: 'none'
      });

    
  
      return () =>{
        linesAnimation.kill();
      }
     
    }, [isActiveProjects])
    

  return (
    <div ref={ ProjetcScrollContainer } className='sections projects_container '>
              <div ref = { line1 } className='PflexBlocks_line Pline1'>
                <div ref={ nameRef }>
                  <Name fontSize={"80px"} color={"white"} text={ "Projects" }/>
                </div>          
              </div>

              <div ref={ (el) => lines.current[0] = el }  className='PflexBlocks_line Pline2'></div>

              <div ref= { lineProjects } className='PflexBlocks_line Pline3'>
                <div ref= { rowProjects } className='row__projects' >

                  <div ref={ (el) => projects.current[0] = el } className='project1'>
                      <div className="columnsContainer" onMouseLeave={()=>handleHoverOut('1')} onMouseEnter={()=>handleHover('1') }>
                        <div ref={ (el) => columns.current[0] = el } className="dinamicColumns"></div>
                        <div ref={ (el) => columns.current[1] = el } className="dinamicColumns"></div>
                        <div ref={ (el) => columns.current[2] = el } className="dinamicColumns">
                          <div ref = { Twitterinfo } className='twitterInfo'>
                              <h1 ref={(el) => info.current[0] = el}>Titulo</h1>
                              <p ref={(el) => info.current[1] = el}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo earum magnam tenetur dolorum, dignissimos sequi fugiat i</p>
                              <a ref={(el) => info.current[2] = el} href='hola'>link</a>
                            </div>
                          </div>
                        <div ref={ (el) => columns.current[3] = el } className="dinamicColumns"></div>
                        <div ref={ (el) => columns.current[4] = el } className="dinamicColumns"></div>
                        <div ref={ (el) => columns.current[5] = el } className="dinamicColumns"></div>
                      </div>

                    <img className='imgProjects twitter' src='https://i.postimg.cc/Y9LFV6pr/twitterclone.png'></img>
                  </div>
                  <div ref={ (el) => projects.current[1] = el } className='project1'>
                  <div className="columnsContainer" onMouseLeave={handleHoverOut} onMouseEnter={ handleHover }>
                       
                        <div ref={ (el) => columns2.current[0] = el } className="dinamicColumns"></div>
                        <div ref={ (el) => columns2.current[1] = el } className="dinamicColumns"></div>
                        <div ref={ (el) => columns2.current[2] = el } className="dinamicColumns">
                          <div ref = { justPlayInfo } className='justPlayInfo'>
                            <h1 ref={(el) => info.current[3]= el}>Titulo</h1>
                            <p ref={(el) => info.current[4] = el} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo earum magnam tenetur dolorum, dignissimos sequi fugiat i</p>
                            <a ref={(el) => info.current[5] = el} href='hola'>link</a>
                          </div>
                        </div>
                        <div ref={ (el) => columns2.current[3] = el } className="dinamicColumns"></div>
                        <div ref={ (el) => columns2.current[4] = el } className="dinamicColumns"></div>
                        <div ref={ (el) => columns2.current[5] = el } className="dinamicColumns"></div>
                      </div>

                    <img className='imgProjects justPlay' src='https://i.postimg.cc/qRTyCtsj/just-play.png'></img>
                  </div>

                </div>
              </div>

              <div ref={ (el) => lines.current[1] = el } className='PflexBlocks_line Pline4'></div>

              <div ref={ (el) => lines.current[2] = el } className='PflexBlocks_line Pline5'></div>

              <div ref={ (el) => lines.current[3] = el } className='PflexBlocks_line Pline6'>
              <div style={{width: '150px', height: '35px', backgroundColor: 'red'}}>
                  <Button color={'light'} title={'Más'}/>
               </div>
              </div>

              <div ref={ (el) => lines.current[4] = el } className='PflexBlocks_line Pline7'>
               
              </div>
              
    </div>
  )
}

export default ProjectsScroll