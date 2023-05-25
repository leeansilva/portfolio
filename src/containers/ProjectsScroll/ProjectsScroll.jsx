import React, { useEffect, useRef } from 'react'
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
    const project1 = useRef(null);

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
        start: "left+=373%",
        end: "left+=560%",
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
          start: "top left",
          end: "2000 top",
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
            end: "3700 top",
            scrub: true
          }
        });

        const project1Animation = gsap.fromTo(project1.current, {
          scaleY: 0
        }, {
          scaleY: 1,
          onComplete: () => { console.log(project1) },
          scrollTrigger: {
            trigger: project1.current,
            start:' left-=200%'
          }
        });
    

      return () =>{
        linesAnimation.kill();
        line1Animation.kill();
        linesAnimationFinal.kill();
        ProjecsContainerAnimation.kill();
        lineProjectsAnimation.kill();
        lineProjectsAnimationFinal.kill();
        project1Animation.kill();
      }
     
    }, [])
    

  return (
    <div ref={ ProjetcScrollContainer } className='sections projects_container '>
              <div ref = { line1 } className='PflexBlocks_line Pline1'>
                <div ref={ nameRef }>
                  <Name fontSize={"80px"} color={"white"} text={ "Projects" }/>
                </div>          
              </div>

              <div  ref={ (el) => lines.current[0] = el }  className='PflexBlocks_line Pline2'></div>

              <div ref = { lineProjects } className='PflexBlocks_line Pline3'>
                <div ref= { rowProjects } className='row__projects' >
                  <div ref={ project1 } className='project1'>
                    <img className='imgProjects twitter' src='https://i.imgur.com/pJHuwg0.png'></img>
                  </div>
                  <div className='project1 '>
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