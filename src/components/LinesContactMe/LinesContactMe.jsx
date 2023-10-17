import React, { useRef, useState } from "react";
import Name from "../Name/Name";
import "./style.css";
import Map from "../Map/Map";
import Form from "../Form/Form";

export default function LinesContactMe({setIsSent, isSent}) {
  const nameRef = useRef(null);
  const lines = useRef([]);
  

  return (
    <>
      <div
        ref={(el) => (lines.current[0] = el)}
        className="CflexBlocks_line Cline1"
      >
        <div className="title_container" ref={nameRef}>
          <Name fontSize={"80px"} color={"black"} text={"Contáctame"} />
        </div>
      </div>

      <div
        ref={(el) => (lines.current[1] = el)}
        className="CflexBlocks_line Cline2"
      ></div>
      <Form isSent={isSent} setIsSent={setIsSent} />
      <div
        ref={(el) => (lines.current[2] = el)}
        className="CflexBlocks_line Cline3"
      ></div>

      <div
        ref={(el) => (lines.current[3] = el)}
        className="CflexBlocks_line Cline4"
      ></div>
      <div
        ref={(el) => (lines.current[4] = el)}
        className="CflexBlocks_line Cline5"
      ></div>
      <div
        ref={(el) => (lines.current[5] = el)}
        className="CflexBlocks_line Cline6"
        // style={{width:"65%", display:'flex', justifyContent:'space-around', backgroundColor:'red' }}
      >
        
      </div>
      <div
        ref={(el) => (lines.current[6] = el)}
        className="CflexBlocks_line Cline7"
      >
        <Map />
      </div>
    </>
  );
}
