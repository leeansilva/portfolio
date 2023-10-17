import React, { useEffect, useState } from "react";
import "./style.css";

export default function Social({children, link}) {

  return (
    <div onClick={()=> handle(link)} className="social_container">
      <div className="social">
        {children}
      </div>
    </div>
  );
}
