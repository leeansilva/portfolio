import React from "react";
import Name from "../Name/Name";
import CardExperience from "../CardExperience/CardExperience";

export default function LinesAboutMe({
  nameRef,
  line1,
  line2,
  line3,
  line4,
  line5,
  line6,
  textRef,
  fadeIn,
}) {
  return (
    <>
      <div ref={line1} className={`flexBlocks_line line1 `}>
        <div ref={nameRef}>
          <Name
            fontSize={"80px"}
            color={"black"}
            text={fadeIn == false ? "Sobre mi" : "Experiencia"}
          />
        </div>
      </div>

      <div ref={line2} className=" flexBlocks_line line2"></div>

      <div
        ref={line3}
        className={`flexBlocks_line line3 ${
          fadeIn == true ? "experience_click" : ""
        }`}
      >
        <div
          ref={(el) => (textRef.current[0] = el)}
          className="aboutMe_text text1"
        >
          {fadeIn == false && (
            <div className="animate__animated animate__fadeIn">
              <h3>¿Cómo llegué hasta aquí?</h3>
              <p>
                En 2022, mi interés dio un giro radical al tomar un curso de
                JavaScript y escribir mi primer "alert('Hola mundo')". Este
                logro encendió mi curiosidad y me sumergió en la informática.
              </p>
            </div>
          )}
        </div>
      </div>

      <div
        ref={line4}
        className={`flexBlocks_line line4 ${
          fadeIn == true ? "line4_experience line4_click" : ""
        }`}
      >
        <div
          ref={(el) => (textRef.current[1] = el)}
          className="aboutMe_text text1"
        >
          {fadeIn == false ? (
            <div
              ref={(el) => (textRef.current[3] = el)}
              className=" animate__animated animate__fadeIn"
            >
              <h3>Continuo Aprendizaje</h3>
              <p>
                Me apasiona el desarrollo frontend, es como tener una hoja en
                blanco donde puedo dar vida a diseños creativos, pero estoy en
                constante exploración, adentrándome en el desarrollo backend y
                ciencia de datos.
              </p>
            </div>
          ) : (
            <CardExperience
              ref={(el) => (textRef.current[3] = el)}
              work={"Analista Funcional"}
              link={"htt"}
              nameOfWork={"Secretaria de innovación y transformación digital"}
              date={"6/05/2023 - hoy"}
              description={
                "Identifico fallos en sistemas (backend y frontend), mejoro la UX/UI, trabajamos con metodología SCRUM, realizo pruebas con Postman y desarrollo mockups de interfaces (React) para una visualización efectiva. Además, colaboro en la gestión de requerimientos con Jira y trabajo eficientemente en equipo a través de Discord, Microsoft Teams y Trello."
              }
            >
              <div className="img_experience animate__animated  animate__fadeIn">
                <img src="https://yt3.googleusercontent.com/Qus5yeO_5GOp18Yxh8nv8SmchCP0Qt-_lWBFZY0tR4tQJ59L5RO8JsxgWAOWFsUXkC9gIug3fds=s900-c-k-c0x00ffffff-no-rj"></img>
              </div>
            </CardExperience>
          )}
        </div>
      </div>

      <div
        ref={line5}
        className={`flexBlocks_line ${
          fadeIn == true ? "line5 line5_click" : "line5 "
        }`}
      >
        <div
          ref={(el) => (textRef.current[2] = el)}
          className="aboutMe_text text1"
        >
          {fadeIn == false ? (
            <div
              ref={(el) => (textRef.current[3] = el)}
              className="text5 animate__animated animate__fadeIn"
            >
              <h3>Diseño Web</h3>
              <p>
                Soy un tipo raro que disfruta resolviendo problemas de diseño y
                construyendo interfaces inteligentes. Mi enfoque es hacer que
                las aplicaciones web sean útiles e interesantes.
              </p>
            </div>
          ) : (
            <CardExperience
              ref={(el) => (textRef.current[3] = el)}
              work={"Freelance"}
              link={"Evolutiva Consulting"}
              nameOfWork={"Evolutiva Consulting"}
              date={"2022 - hoy"}
              description={
                "Landing page, construida con Next.js y Chakra UI, destaca por su rendimiento y escalabilidad. Componentizada y visualmente atractiva, garantiza una experiencia de usuario excepcional y la capacidad de crecimiento y evolución sin complicaciones. Perfecta para atraer y convertir visitantes de manera efectiva."
              }
            >
              <div className="img_experience2 animate__animated  animate__fadeIn">
                <img src="https://i.postimg.cc/760vDwGt/evolutiva.png"></img>
              </div>
            </CardExperience>
          )}
        </div>
      </div>

      <div ref={line6} className="flexBlocks_line line6">
        <div
          ref={(el) => (textRef.current[3] = el)}
          className="aboutMe_text text1"
        >
          {fadeIn == false ? (
            <div
              ref={(el) => (textRef.current[3] = el)}
              className=" animate__animated animate__fadeIn"
            >
              <h3>Evolución Tecnológica</h3>
              <p>
                Para mantenerme al día, sigo novedades en redes sociales y me
                relaciono con profesionales. Siempre busco oportunidades y
                desafíos para crecer en el mundo IT.
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
