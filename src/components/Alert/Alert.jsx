import React, { useEffect, useState } from "react";
import "./style.css"
export default function Alert({ isSent, setIsSent }) {
  const [animation, setAnimation] = useState("animate__fadeIn");

  useEffect(() => {
    if (isSent) {
      setAnimation("animate__fadeOut");
      setAnimation("animate__fadeIn");

      const myTimeout = setTimeout(() => {
        setIsSent(false);
      }, 5000);

      return () => {
        clearTimeout(myTimeout);
      };
    }
  }, [isSent, setIsSent]);

  return (
    <div
      className={`alert animate__animated ${animation}`}
  
    >
      <h2>Mensaje enviado</h2>
    </div>
  );
}
