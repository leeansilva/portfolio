import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Burger from '../Burger/Burger';
import './style.css'

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='NAVBAR'>
     
      <div className='navBarContainer' onClick={handleShow} >
         <Burger isOpen={ show }   type='submit'/> 
         {/* <p className='navBar_Span' style={{color:"aliceblue"}}>MENU</p> */}
       
      </div>

      <Offcanvas style={{marginTop:'30px'}} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default NavBar;