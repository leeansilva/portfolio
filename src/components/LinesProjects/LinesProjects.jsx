import React from "react";
import Project from "../Project/Project";
import Projects2 from "../Projects2/Projects2";

export default function LinesProjects({
  info,
  lineProjects,
  rowProjects,
  projects,
  lines,
  columns,
  Twitterinfo,
  justPlayInfo,
  columns2,
  fadeIn,
}) {
  return (
    <>
      <div
        ref={(el) => (lines.current[0] = el)}
        className="PflexBlocks_line Pline2"
      ></div>

      <div ref={lineProjects} className="PflexBlocks_line Pline3">
        <div ref={rowProjects} className="row__projects ">
          {fadeIn == false ? (
            <Project
              info={info}
              fadeIn={fadeIn}
              projects={(el) => (projects.current[0] = el)}
              info1={(el) => (info.current[0] = el)}
              info2={(el) => (info.current[1] = el)}
              info3={(el) => (info.current[2] = el)}
              columns={columns}
              columns2={columns2}
              Twitterinfo={Twitterinfo}
              justPlayInfo={justPlayInfo}
              clas={"twitterInfo"}
              text={
                "Mi clon de Twitter, creado con HTML, CSS y JavaScript vanilla.Fue una gran oportunidad para usar conceptos esenciales de CSS y JavaScript."
              }
              title={"Twitter-clone"}
              hoverNumber={"1"}
              columnsProject={columns}
              link={"https://twitter-clne.netlify.app/"}
              link2={"https://github.com/leeansilva/TwitterClon"}
            >
              <img
                className="imgProjects twitter"
                src="https://i.postimg.cc/Y9LFV6pr/twitterclone.png"
              ></img>
            </Project>
          ) : (
            <Projects2
              fadeIn={fadeIn}
              info={info}
              projects={(el) => (projects.current[0] = el)}
              info1={(el) => (info.current[0] = el)}
              info2={(el) => (info.current[1] = el)}
              info3={(el) => (info.current[2] = el)}
              columns={columns}
              columns2={columns2}
              Twitterinfo={Twitterinfo}
              justPlayInfo={justPlayInfo}
              clas={"twitterInfo"}
              text={"Elegimos Chakra UI y Next.js para un desarrollo eficiente y escalable. Esto nos permitió crear un sitio web sólido con capacidad para futuras expansiones."}
              title={"Evolutiva Consulting"}
              hoverNumber={"1"}
              columnsProject={columns}
              link={"https://www.consultingevolutiva.com/"}
              link2={"https://github.com/leeansilva/evolutivaconsulting-web"}
            >
              <img
                className="imgProjects twitter"
                src="https://i.postimg.cc/NFR4WVGk/Screenshot-16.png"
              ></img>
            </Projects2>
          )}
          {fadeIn == false ? (
            <Project
              fadeIn={fadeIn}
              info={info}
              projects={(el) => (projects.current[1] = el)}
              info1={(el) => (info.current[3] = el)}
              info2={(el) => (info.current[4] = el)}
              info3={(el) => (info.current[5] = el)}
              columns={columns}
              columns2={columns2}
              Twitterinfo={justPlayInfo}
              justPlayInfo={justPlayInfo}
              clas={"justPlayInfo  "}
              text={
                "Just Play es una web-app con juegos. Trabajé con React, Vite y Material UI, consumí la API de Google a través de Firebase."
              }
              title={"Just-Play"}
              hoverNumber={"0"}
              columnsProject={columns2}
              link={"https://justplay-site.netlify.app/games"}
              link2={"https://github.com/leeansilva/multiProjects-gonziJS"}
            >
              <img
                className="imgProjects twitter"
                src="https://i.postimg.cc/qRTyCtsj/just-play.png"
              ></img>
              
            </Project>
          ) : (
            <Projects2
              fadeIn={fadeIn}
              info={info}
              projects={(el) => (projects.current[1] = el)}
              info1={(el) => (info.current[3] = el)}
              info2={(el) => (info.current[4] = el)}
              info3={(el) => (info.current[5] = el)}
              columns={columns}
              columns2={columns2}
              Twitterinfo={justPlayInfo}
              justPlayInfo={justPlayInfo}
              clas={"justPlayInfo  "}
              text={"En mi portfolio trabajé con React, CSS y GSAP. Muestro proyectos con componentes personalizados y énfasis en la interactividad."}
              title={"Leandro Silva"}
              hoverNumber={"0"}
              columnsProject={columns2}
              link={"www.leandrosilva.com"}
              link2={"https://github.com/leeansilva/portfolio"}
            >
              <img
                className="imgProjects twitter"
                src="https://i.postimg.cc/wM9yjbcV/portfolio.png"
              ></img>
            </Projects2>
          )}
           
        
        </div>
      </div>

      <div
        ref={(el) => (lines.current[1] = el)}
        className="PflexBlocks_line Pline4"
      ></div>

      <div
        ref={(el) => (lines.current[2] = el)}
        className="PflexBlocks_line Pline5"
      ></div>
    </>
  );
}
