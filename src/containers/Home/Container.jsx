import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from '../../components/NavBar/NavBar';
import './style.css';
import Name from '../../components/Name/Name';
import MouseTrail from '../../components/MouseTrail/MouseTrail';
import { gsap } from "gsap";
import AboutMeScroll from '../AboutMeScroll/AboutMeScroll';


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
      duration: 5,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top left',
        end: '2000 top',
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
        
        <div className='sections projects_container '  >
            holi
        </div>
        <div className='sections contact_container'  >
            holi
        </div>
      </div>

   
    </div>
    </>
  )
}

export default Container