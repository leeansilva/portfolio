import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from '../../components/NavBar/NavBar';
import './style.css';
import Name from '../../components/Name/Name';
import { gsap } from "gsap";
import AboutMeScroll from '../AboutMeScroll/AboutMeScroll';
import ProjectsScroll from '../ProjectsScroll/ProjectsScroll';
import ContactMeScroll from '../ContactMeScroll/ContactMeScroll';


const Container = () => {
  const homeContainer = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {

    const pin = gsap.fromTo(homeContainer.current, {
      translateX : 0
    },{
      translateX: "-300vw",
      ease: "none",
      duration: 10,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top left',
        end: '4000 top',
        scrub: true,
        pin: true
      }
    });

    return () =>{
      pin.kill();
    }
    
  }, []);

  return ( 
    <>

    <div ref={ triggerRef } >
      <div className='main_container' ref= { homeContainer }>
          <NavBar/>
          <div className='home_about_container' >
              <div className='home__Name_container'>
                  <Name color={"white"} text="Leandro Silva,"/>
                  <Name color={"white"} text="web developer." />
              </div>       
          </div> 

        <AboutMeScroll triggerRef2={ triggerRef }/>
        
      
        <ProjectsScroll triggerRef3={ triggerRef }/>



        <ContactMeScroll/>
      </div>

   
    </div>
    </>
  )
}

export default Container