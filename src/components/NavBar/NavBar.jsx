import React, { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Burger from '../Burger/Burger';
import './style.css';
import { gsap } from 'gsap';

function NavBar({ clickOut, handleClickOut }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (clickOut) {
      handleClose();
    }
    if (!show) {
      handleClickOut();
    }
  }, [clickOut, show, handleClose, handleClickOut]);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tl.to('.offcanvas-wrapper', { opacity: 1, duration: 0.2 }).to('.offcanvas', { opacity: 1, x: 0, duration: 0.2 });

    const tl2 = gsap.timeline({ paused: true});
    tl2.to('.offcanvas-wrapper', { opacity: 1, duration: 0.3 }).to('.offcanvas', { opacity: 0, duration: 0.3 });
    if (show) {
      tl.play();
    } else {
      tl2.play();
    }
  }, [show]);

  return (
    <>
      <div className='navBarContainer' onClick={handleShow}>
        <Burger isOpen={show} type='submit' />
      </div>

      <div className="offcanvas-wrapper" style={{ display: show ? 'block' : 'none' }}>
        <div className="offcanvas" style={{ marginTop:'25px' }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
            <a href='https://facebook.com' target='_blank'>face</a>
          </Offcanvas.Body>
        </div>
      </div>
    </>
  );
}

export default NavBar;
