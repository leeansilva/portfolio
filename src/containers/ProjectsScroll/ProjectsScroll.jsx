import React, { useEffect, useRef, useState } from "react";
import Name from "../../components/Name/Name";
import { gsap } from "gsap";

import "./style.css";
import Button from "../../components/Button/Button";
import LinesProjects from "../../components/LinesProjects/LinesProjects";

const ProjectsScroll = ({ isActiveProjects }) => {
  const ProjetcScrollContainer = useRef(null);
  const nameRef = useRef(null);
  const lines = useRef([]);
  const line1 = useRef(null);
  const lineProjects = useRef(null);
  const rowProjects = useRef(null);
  const projects = useRef([]);
  const columns = useRef([]);
  const columns2 = useRef([]);
  const info = useRef([]);
  const justPlayInfo = useRef(null);
  const Twitterinfo = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 950) {
      const linesAnimation = gsap.fromTo(
        lines.current,
        {
          translateX:
            (isActiveProjects == "next" && "120vw") ||
            isActiveProjects == "previous contactme",
        },
        {
          translateX:
            isActiveProjects == "previous" ||
            (isActiveProjects == "next contactme" && "0%"),
          duration: 0.4,
          stagger: {
            from:
              isActiveProjects == "previous contactme"
                ? "left"
                : isActiveProjects == "next" && "right",
            amount: 0.4,
          },
          ease: "none",
        }
      );

      return () => {
        linesAnimation.kill();
      };
    }
  }, [isActiveProjects]);

  return (
    <div ref={ProjetcScrollContainer} className="sections projects_container ">
      <div ref={line1} className="PflexBlocks_line Pline1">
        <div ref={nameRef}>
          <Name fontSize={"80px"} color={"white"} text={"Projects"} />
        </div>
      </div>

      <LinesProjects
        fadeIn={fadeIn}
        columns2={columns2}
        info={info}
        justPlayInfo={justPlayInfo}
        Twitterinfo={Twitterinfo}
        columns={columns}
        lines={lines}
        lineProjects={lineProjects}
        rowProjects={rowProjects}
        projects={projects}
      />

      <div
        ref={(el) => (lines.current[3] = el)}
        className="PflexBlocks_line Pline6"
       
      >
        <div  onClick={() => setFadeIn(!fadeIn)} className="" style={{ width: "150px", height: "35px", backgroundColor: "red" }} >
          <Button color={"light"} title={"Más"} />
        </div>
      </div>

      <div
        ref={(el) => (lines.current[4] = el)}
        className="PflexBlocks_line Pline7"
      ></div>
    </div>
  );
};

export default ProjectsScroll;
