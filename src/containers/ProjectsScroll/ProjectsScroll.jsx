import React, { useEffect, useRef } from 'react'
import Name from '../../components/Name/Name';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import './style.css'

const ProjectsScroll = () => {
    const ProjetcScrollContainer = useRef(null);
    const nameRef = useRef(null);
    const lines = useRef([]);
    const line1 = useRef(null);
    const lineProjects = useRef(null);

    useEffect(() => {

      const ProjecsContainerAnimation = gsap.fromTo(ProjetcScrollContainer.current, {
        translateX: "0px",
        gap:0,
      }, {
        translateX: "100vw",
        display:"none",
        ease: "none",
        duration: 1,
        scrollTrigger: {
        trigger : ProjetcScrollContainer.current,
        start: "left+=350%",
        end: "4000 top",
        scrub: true,
          }
        
      })

      const linesAnimation = gsap.fromTo(lines.current, {
        height: "50%",
        translateX: "100vw",
        marginBottom: "100px",
      },{
        translateX: "0px",
        marginBottom:'0px',
        height: "20%",
        duration: 2,
        scrollTrigger: {
          trigger: ProjetcScrollContainer.current,
          start: "right top",
          end: "350% top",
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
        height: "40%",
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
        height: "100%",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: ProjetcScrollContainer.current,
          start: "top left",
          end: "2000 top",
          scrub: true
        }
      });



      return () =>{
        linesAnimation.kill();
        line1Animation.kill();
        linesAnimationFinal.kill();
        ProjecsContainerAnimation.kill();
        lineProjectsAnimation.kill();
      }
     
    }, [])
    

  return (
    <div ref={ ProjetcScrollContainer } className='sections projects_container '>
              <div ref = { line1 } className='PflexBlocks_line Pline1'>
                <div ref={ nameRef }>
                  <Name color={"white"} text={ "Projects" }/>
                </div>          
              </div>

              <div  ref={ (el) => lines.current[1] = el }  className='PflexBlocks_line Pline2'></div>

              <div ref = { lineProjects } className='PflexBlocks_line Pline3'>
                <div className='row__projects'>
                  <div className='project1'>
                    Proyecto1
                  </div>
                  <div className='project2'>
                    Proyecto2
                  </div>
                </div>
              </div>

              <div ref={ (el) => lines.current[2] = el } className='PflexBlocks_line Pline4'></div>

              <div ref={ (el) => lines.current[3] = el } className='PflexBlocks_line Pline5'></div>

              <div ref={ (el) => lines.current[4] = el } className='PflexBlocks_line Pline6'></div>

              <div ref={ (el) => lines.current[5] = el } className='PflexBlocks_line Pline7'></div>
              
    </div>
  )
}

export default ProjectsScroll