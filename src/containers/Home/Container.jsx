import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Name from '../../components/Name/Name';
import AboutMeScroll from '../AboutMeScroll/AboutMeScroll';
import ProjectsScroll from '../ProjectsScroll/ProjectsScroll';
import ContactMeScroll from '../ContactMeScroll/ContactMeScroll';
import './style.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Button from '../../components/Button/Button';


const Container = () => {
  const [clickOut, setClickOut] = useState(true);
  const homeContainer = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const handleClickOut = () =>{
    setClickOut(true);
  }
  
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
      <div className='main_container' ref= { homeContainer } onClick={()=>setClickOut(!clickOut)}>
          
          <NavBar clickOut={ clickOut } handleClickOut={ handleClickOut }/>
        
          <div className='scrollDown'>
            <span className='span1'>S c r o l l</span>
            <KeyboardDoubleArrowDownIcon sx={{color: "#fff"}} />
          </div>
          <div className='scrollDown__black'>
            <span className='span2'>S c r o l l</span>
            <KeyboardDoubleArrowDownIcon sx={{color: "#000"}} />
          </div>

          <div className='home_about_container' >
              <div className='home__Name_container'>
                <h1 className='Name_container_text'>Hola, soy</h1>
                  <Name fontSize={"90px"} color={"white"} text="Leandro Silva,"/>
                  <Name fontSize={"60px"} color={"white"} text="desarrollador web." />
                <h1 className='Name_container_text2'>Apasionado por crear experiencias digitales excepcionales.</h1>
              </div>
              <div className='button__container'>
                <Button title={'Contáctame'} color={'light'} /> 
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