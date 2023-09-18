import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Name from '../../components/Name/Name';
import AboutMeScroll from '../AboutMeScroll/AboutMeScroll';
import ProjectsScroll from '../ProjectsScroll/ProjectsScroll';
import ContactMeScroll from '../ContactMeScroll/ContactMeScroll';
import './style.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Observer } from "gsap/Observer";
import { gsap } from "gsap";
import Button from '../../components/Button/Button';


const Container = () => {
  const [clickOut, setClickOut] = useState(true);

  const [section0, setSection0] = useState('');
  const [section1, setSection1] = useState('');
  const [section2, setSection2] = useState('');
  const [section3, setSection3] = useState('');

  const sections = useRef([]);
  const homeContainer = useRef(null);
  const triggerRef = useRef(null);
  const contactMeContainer = useRef(null);
  
  const handleClickOut = () =>{
    setClickOut(true);
  }

  const nextSection = (currentIndex) => {
    if (currentIndex < sections.current.length - 1) {
      const section = currentIndex + 1
      gsap.to(homeContainer.current, {
        x: -(section) * window.innerWidth, // Scroll to the next section
        duration: 0.5,
      });
      if (section == 1){
        setSection1('next')
      } else if (section == 2){
        setSection1('next projects')
        setSection2('next')
      } else if (section == 3){
        setSection2('next contactme')
      }
    }
  };

  const previousSection = (currentIndex) => {
    if (currentIndex > 0) {
      const section = currentIndex - 1
      gsap.to(homeContainer.current, {
        x: -(section) * window.innerWidth, // Scroll to the previous section
        duration: 0.5,
      });
      if(section == 0){
        setSection1('previous')
      } else if (section == 1){
        setSection1('previous projects')
        setSection2('previous')
      } else if (section == 2){
        setSection2('previous contactme')
        
      } else if (section == 3){


      }
    }
  };
  
  useEffect(() => {
    gsap.registerPlugin(Observer); // Register Observer plugin

    const observer = Observer.create({
      target: window,
      type: 'wheel,touch',
      wheelSpeed: -1,
      onDown: () => {
        const currentIndex = Math.floor(-homeContainer.current.getBoundingClientRect().x / window.innerWidth);
        nextSection(currentIndex);
      },
      onUp: () => {
        const currentIndex = Math.floor(-homeContainer.current.getBoundingClientRect().x / window.innerWidth);
        previousSection(currentIndex);
      },
      tolerance: 200,
      preventDefault: true,
    });

    return () => {
      observer.kill(); // Clean up the observer on component unmount
    };
  }, []);
  

  return ( 
      <div className='main_container' ref= { homeContainer } onClick={()=>setClickOut(!clickOut)}>
          
        <section ref={ (el) => sections.current[0] = el }>
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
                <Button contactMeContainer={contactMeContainer} title={'Contáctame'} color={'light'} /> 
              </div>       
          </div> 
        </section>

        <section className='second_section' ref={ (el) => sections.current[1] = el }>
            <AboutMeScroll isActive={ section1 } triggerRef2={ triggerRef }/>
        </section>
             
        <section ref={ (el) => sections.current[2] = el }>
          <ProjectsScroll isActiveProjects={ section2 } triggerRef3={ triggerRef }/>
        </section>

        <section ref={ (el) => sections.current[3] = el }>
          <ContactMeScroll ref={contactMeContainer} />
        </section>


        
      </div>
  )
}

export default Container