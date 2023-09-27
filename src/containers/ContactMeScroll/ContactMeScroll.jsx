import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import emailjs from '@emailjs/browser';
import './style.css';
import Name from '../../components/Name/Name';

const ContactMeScroll = ({isActive}) => {
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
        width: isActive == 'next' && "50%",
        right:isActive == 'next' && '100%',
      },
      {
        width: isActive == 'next' && '15%',
        right: isActive == 'next' && 0 ,
        duration: 0.5,
        ease: "none",
      }
    );
    return () =>{
      RectanguloAnimation.kill();
    }

  }, [isActive]);

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
    console.log(form.current)

    emailjs.sendForm(VITE_EMAILJS_SERVICE_ID, 'template_xzenlsi', form.current, VITE_EMAILJS_PUBLIC_KEY)
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
              <Name fontSize={"80px"} color={"black"} text={ "Contáctame" }/>
          </div>
      </div>
      
      <div ref={ (el) => lines.current[1] = el } className='CflexBlocks_line Cline2'>
      </div>
        <form className='form' ref={form} onSubmit={sendEmail}>
          <input placeholder='Name' className='inputName' value={nameValue} onChange={(e) => setNameValue(e.target.value)} type='text'></input>
          <input placeholder='Email' className='inputMail' value={emailValue} onChange={(e) => setEmailValue(e.target.value)} type='email'></input>
          <input placeholder='Message' className='inputMessage' value={messageValue} onChange={(e) => setMessageValue(e.target.value)} type='text'></input>
          <button type='submit'>SEND</button>
        </form>

      <div ref={ (el) => lines.current[2] = el } className='CflexBlocks_line Cline3'></div>
      
      <div ref={ (el) => lines.current[3] = el } className='CflexBlocks_line Cline4'></div>
      <div ref={ (el) => lines.current[4] = el } className='CflexBlocks_line Cline5'></div>
      <div ref={ (el) => lines.current[5] = el } className='CflexBlocks_line Cline6'></div>
      <div ref={ (el) => lines.current[6] = el } className='CflexBlocks_line Cline7'> <p>Desing & Built by Leandro Silva.</p></div>
       
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