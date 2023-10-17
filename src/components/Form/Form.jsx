import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button/Button";
import Name from "../Name/Name";

export default function Form({ setIsSent, isSent }) {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [sending, setIsSending] = useState("Enviar");
  const form = useRef(null);

  const handleSend = (e) => {
    e.preventDefault();

    if (isSent === false) {
      setIsSending("Enviando...");
    }

    sendEmail(e);
  };

  useEffect(() => {
    if (isSent === true) {
      setIsSending("Enviar");
    }
  }, [isSent]);

  const VITE_EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const VITE_EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    if (nameValue === "") {
      setNameError("Completa este campo");
    } else {
      setNameError("");
    }

    if (emailValue === "") {
      setEmailError("Completa este campo");
    } else {
      setEmailError("");
    }

    if (messageValue === "") {
      setMessageError("Completa este campo");
    } else {
      setMessageError("");
    }

    if (nameValue !== "" && emailValue !== "" && messageValue !== "") {
      // Realiza el envío del formulario si todos los campos están completos
      emailjs
        .sendForm(
          VITE_EMAILJS_SERVICE_ID,
          "template_xzenlsi",
          form.current,
          VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSent(true);
            setNameValue("");
            setEmailValue("");
            setMessageValue("");
            setTimeout(() => {
              setIsSent(false);
            }, 3000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <input
            placeholder="Nombre"
            id="name"
            style={{ border: nameError !== "" ? "1px solid red" : "" }}
            className="inputName"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            type="text"
            required
          />
          {nameError !== "" ? (
            <span className="error-message animate__animated animate__fadeIn">
              {nameError}
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className="form-group">
          <input
            placeholder="Email"
            id="email"
            style={{ border: emailError !== "" ? "1px solid red" : "" }}
            className="inputMail"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            type="email"
            required
          />
          {emailError !== "" ? (
            <span className="error-message animate__animated animate__fadeIn">
              {emailError}
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className="form-group">
          <input
            placeholder="Mensaje"
            id="message"
            style={{ border: messageError !== "" ? "1px solid red" : "" }}
            className="inputMessage"
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            type="text"
            required
          />
          {messageError !== "" ? (
            <span className="error-message animate__animated animate__fadeIn">
              {messageError}
            </span>
          ) : (
            <></>
          )}
        </div>
        <div onClick={(e) => handleSend(e)} className="container_button">
          <Button color={"black"} title={sending} />
        </div>
      </form>
    </>
  );
}
