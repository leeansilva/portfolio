import React from "react";
import Button from "../Button/Button";
import "./style.css";

export default function ModalSwipe({setSwipe}) {
    
  return (
    <div className="container animate__animated animate__fadeIn">
      <div className="box">
        <img src="https://media.tenor.com/9K7yuyUGIpUAAAAi/hand-swipe.gif" />
            <p>Deslice hacia la izquierda o hacia la derecha para explorar más contenido.</p>
            <div onClick={()=>{setSwipe(true)}} className="button_swipe">
            <Button
              title={"Entendido"}
              color={"light"}
            />
          </div>
      </div>
    </div>
  );
}
