import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from '@emailjs/browser';
import './style.css';
import Name from '../../components/Name/Name';


gsap.registerPlugin(ScrollTrigger);

const ContactMeScroll = () => {
  const contactMeContainer = useRef(null);
  const rectangulo = useRef(null);
  const lines = useRef([]);
  const chords = useRef([]);
  const nameRef = useRef(null);
  
  const form = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const VITE_EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const VITE_EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  useEffect(() => {

    const RectanguloAnimation = gsap.fromTo(
      rectangulo.current,
      {
        width: "100%",
        right: "100vw",
      },
      {
        width: '15%',
        right: 0,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: contactMeContainer.current,
          start: "left+=10%",
          end: "4000 top",
          scrub: true,
        },
      }
    );

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
        trigger: contactMeContainer.current,
        start: "left+=360%",
        end: "left+=400%",  
        scrub: true,
      },
      stagger:{
        from: "left",
        amount: 2
      },
      ease: 'none'
    } );

    const line1Animation = gsap.fromTo (lines.current[0],
      {
        height: "20%",
      },
      {
        height: "30%",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: contactMeContainer.current,
          start: "left+=135%",
          end: "520% top",
          scrub: true
        }
      });

    return () =>{
      RectanguloAnimation.kill();
      linesAnimation.kill();
      line1Animation.kill();
    }

  }, []);

  const handleHover = (e) => {
    gsap.killTweensOf(e.target);
    const tl1 = gsap
    .timeline()
    .to(e.target, {
      duration: 0.2,
      borderTopLeftRadius: "50%",
      width: "10px",
    })
    .to(e.target,{
      borderTopLeftRadius: 0,
      width: "5px",
      duration: 0.2,
    })
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(VITE_EMAILJS_SERVICE_ID, 'template_coloozq', form.current, VITE_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
        setNameValue('');
        setEmailValue('');
        setMessageValue('');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div ref={ contactMeContainer } id='Contáctame' className='sections contact_container'>

      <div ref={ rectangulo } className='rectangulo'></div>

      <div ref={ (el) => lines.current[0] = el } className='CflexBlocks_line Cline1'>
          <div className='title_container' ref={ nameRef }>
              <Name color={"black"} text={ "Contáctame" }/>
          </div>
      </div>
      
      <div ref={ (el) => lines.current[1] = el } className='CflexBlocks_line Cline2'></div>

      <div ref={ (el) => lines.current[2] = el } className='CflexBlocks_line Cline3'>
        <form className='form__container' ref={form} onSubmit={sendEmail}>
          <input value={nameValue} onChange={(e) => setNameValue(e.target.value)} type='text'></input>
          <input  value={emailValue} onChange={(e) => setEmailValue(e.target.value)} type='text'></input>
          <input value={messageValue} onChange={(e) => setMessageValue(e.target.value)} type='text'></input>
          <button value='Send' type='submit'>SEND</button>
        </form>
      </div>
      
      <div ref={ (el) => lines.current[3] = el } className='CflexBlocks_line Cline4'></div>
      <div ref={ (el) => lines.current[4] = el } className='CflexBlocks_line Cline5'></div>
      <div ref={ (el) => lines.current[5] = el } className='CflexBlocks_line Cline6'></div>
      <div ref={ (el) => lines.current[6] = el } className='CflexBlocks_line Cline7'></div>
       
      <div className='flexCuerdas'>
        <div ref={ (el) => chords.current[0] = el } onMouseEnter={ handleHover } className="chord1 chord"></div>
        <div ref={ (el) => chords.current[1] = el } onMouseEnter={ handleHover } className="chord2 chord"></div>
        <div ref={ (el) => chords.current[2] = el } onMouseEnter={ handleHover } className="chord3 chord"></div>
        <div ref={ (el) => chords.current[3] = el } onMouseEnter={ handleHover } className="chord4 chord"></div>
        <div ref={ (el) => chords.current[4] = el } onMouseEnter={ handleHover } className="chord5 chord"></div>
        <div ref={ (el) => chords.current[5] = el } onMouseEnter={ handleHover } className="chord6 chord"></div>
      </div>
    </div>
  )
}

export default ContactMeScroll