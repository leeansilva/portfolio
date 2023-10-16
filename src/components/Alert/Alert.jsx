import React, { useEffect, useState } from "react";

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
      className={`animate__animated ${animation}`}
      style={{
        backgroundColor: "lightgreen",
        position: "absolute",
        top: "20%",
        zIndex: "2000000",
        left: "57%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <h2>Mensaje enviado</h2>
    </div>
  );
}
