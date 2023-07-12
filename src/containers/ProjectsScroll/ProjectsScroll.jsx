import React, { useEffect, useRef } from 'react';
import Name from '../../components/Name/Name';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import './style.css'
import Button from '../../components/Button/Button';

const ProjectsScroll = () => {
  
    const ProjetcScrollContainer = useRef(null);
    const nameRef = useRef(null);
    const lines = useRef([]);
    const line1 = useRef(null);
    const lineProjects = useRef(null);
    const rowProjects = useRef(null);
    const projects = useRef([]);
    const columns = useRef([]);

    const handleHover = () => {

      gsap.killTweensOf(columns.current);

      const tl1 = gsap
      .timeline()
      .staggerTo(columns.current, 0.2, {
        height: "100%"
      }, 0.2) // 0.2 es el tiempo de separación entre cada animación
    };

    const handleHoverOut = () => {

      gsap.killTweensOf(columns.current);

      const tl1 = gsap
      .timeline()
      .staggerTo(columns.current, 0.2, {
        height: "0%"
      }, 0.2) // 0.2 es el tiempo de separación entre cada animación
    };



    useEffect(() => {

      const ProjecsContainerAnimation = gsap.fromTo(ProjetcScrollContainer.current, {
        translateX: "0px",
        gap:0,
      }, {
        translateX: "150vw",
        display:"none",
        ease: "none",
        duration: 1,
        scrollTrigger: {
        trigger : ProjetcScrollContainer.current,
        start: "left+=275%",
        end: "left+=480%",
        scrub: true,
          }
      })

      const linesAnimation = gsap.fromTo(lines.current, {
        height: "50%",
        translateX: "120vw",
        marginBottom: "100px",
      },{
        translateX: "0px",
        marginBottom:'0px',
        height: "20%",
        duration: 2,
        scrollTrigger: {
          trigger: ProjetcScrollContainer.current,
          start: "left+=240%",
          end: "left+=320%",
          scrub: true,
        },
        stagger:{
          from: "left",
          amount: 2
        },
        ease: 'none'
      });

      const linesAnimationFinal = gsap.fromTo(lines.current, {
       borderTop: "0px solid #fff"
        
      },{
        borderTop: "15px solid #fff",
        duration: 2,
        scrollTrigger: {
          trigger: ProjetcScrollContainer.current,
          start: "left+=400%",
          end: "500% top",
          scrub: true,
        },
        stagger:{
          from: "left",
          amount: 2
        },
        ease: 'none'
      } );
        
      const line1Animation = gsap.fromTo (line1.current,
      {
        height: "160%",
      },
      {
        height: "50%",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: ProjetcScrollContainer.current,
          start: "top left",
          end: "2000 top",
          scrub: true
        }
      });
      const lineProjectsAnimation = gsap.fromTo (lineProjects.current,
      {
        translateX: "50%",
        height: "20%",
      },
      {
        translateX: "0%",
        height: "250%",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: ProjetcScrollContainer.current,
          start: "left+=150%",
          end: "left+=200%",
          scrub: true
        }
      });
      
      const lineProjectsAnimationFinal = gsap.fromTo (lineProjects.current,
        {
          height: "100%",
          borderTop: "0px solid #fff"
        },
        {
          height: "20%",
          borderTop: "15px solid #fff",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: ProjetcScrollContainer.current,
            start: "left+=400%",
          end: "left+=480%",
            scrub: true
          }
        });

        const projectsAnimation = gsap.fromTo(projects.current, {
          scale: 0
        },{
         scale:1,
         ease:"none",
          scrollTrigger: {
          trigger: ProjetcScrollContainer.current,
          start: "left+=250%",
          end: "left+=350%",
          scrub: true
          },
          stagger:{
            from: "left",
            amount: 2
          },
          ease: 'none'
        });
  
      return () =>{
        linesAnimation.kill();
        line1Animation.kill();
        linesAnimationFinal.kill();
        ProjecsContainerAnimation.kill();
        lineProjectsAnimation.kill();
        lineProjectsAnimationFinal.kill();
        projectsAnimation.kill();
      }
     
    }, [])
    

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
                      <div className="columnsContainer" onMouseLeave={handleHoverOut} onMouseEnter={ handleHover }>
                        <div ref={ (el) => columns.current[0] = el } className="dinamicColumns"></div>
                        <div ref={ (el) => columns.current[1] = el } className="dinamicColumns"></div>
                        <div ref={ (el) => columns.current[2] = el } className="dinamicColumns"></div>
                        <div ref={ (el) => columns.current[3] = el } className="dinamicColumns"></div>
                        <div ref={ (el) => columns.current[4] = el } className="dinamicColumns"></div>
                        <div ref={ (el) => columns.current[5] = el } className="dinamicColumns"></div>
                      </div>

                    <img className='imgProjects twitter' src='https://i.imgur.com/pJHuwg0.png'></img>
                  </div>
                  <div ref={ (el) => projects.current[1] = el } className='project1 '>
                    <img className='imgProjects justPlay' src='https://i.imgur.com/KTZVvIP.png'></img>
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