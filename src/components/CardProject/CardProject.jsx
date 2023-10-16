import React from "react";

export default function CardProject({Twitterinfo, children, info1, info2, info3 ,clas, title, text}) {
    
  return (
    <div ref={Twitterinfo} className={clas}>
      <h1 ref={info1}>{title}</h1>
      <p ref={info2}>
        {text}
      </p>
      <div ref={info3} className="launch_container ">
        {children}
      </div>
    </div>
  );
}
