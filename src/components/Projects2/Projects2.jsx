import React, { useEffect, useState } from "react";
import GitHubIcon from "../../icons/GitHubIcon";
import DemoIcon from "../../icons/DemoIcon";
import ColumnsProjects from "../ColumnsProjects.jsx/ColumnsProjects";
import CardProject from "../CardProject/CardProject";
import { gsap } from "gsap";

export default function Projects2({
  projects,
  Twitterinfo,
  info1,
  info2,
  info3,
  columns,
  columns2,
  justPlayInfo,
  clas,
  title,
  text,
  info,
  hoverNumber,
  columnsProject,
  fadeIn,
  children,
  link,
  link2
}) {
  const [FadeInClass, setFadeInClass] = useState("");
  useEffect(() => {
    if (fadeIn) {
      // Si fadeIn es true, aplica la clase de animación
      setFadeInClass("animate__animated animate__slideInLeft");
    } else {
      setFadeInClass("animate__animated  animate__slideInRight");
    }
  }, [fadeIn]);
  const handleHover = (element) => {
    console.log(element);
    gsap.killTweensOf(element == "1" ? columns.current : columns2.current);

    const tl1 = gsap.timeline();

    tl1.staggerTo(
      element == "1" ? columns.current : columns2.current,
      0.2,
      {
        height: "100%",
      },
      0.2
    ); // 0.2 es el tiempo de separación entre cada animación

    const projectInfoLine = gsap.fromTo(
      element == "1" ? columns.current[2] : columns2.current[2],
      {
        width: "10%",
        gap: 0,
      },
      {
        width: "150%",
        ease: "none",
        duration: 0.6,
      }
    );

    const infoContainer = gsap.fromTo(
      element == "1" ? Twitterinfo.current : justPlayInfo.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        display: "block",
        ease: "none",
        duration: 0.1,
        onComplete: () => {
          const infoElements = gsap.fromTo(
            element == "1"
              ? [info.current[0], info.current[1], info.current[2]]
              : [info.current[3], info.current[4], info.current[5]],
            {
              scale: 0,
            },
            {
              scale: 1,
              display: "block",
              ease: "none",
              delay: 0.5,
              duration: 0.1,
            }
          );
        },
      }
    );

    return () => {
      projectInfoLine.kill();
      infoContainer.kill();
      tl1.kill();
    };
  };

  const handleHoverOut = (element) => {
    gsap.killTweensOf(element == "1" ? columns.current : columns2.current);

    const tl1 = gsap.timeline().staggerTo(
      element == "1" ? columns.current : columns2.current,
      0.2,
      {
        height: "0%",
      },
      0.2
    ); // 0.2 es el tiempo de separación entre cada animación
    const projectInfoLine = gsap.fromTo(
      element == "1" ? columns.current[2] : columns2.current[2],
      {
        width: "150%",
        gap: 0,
      },
      {
        width: "20%",
        ease: "none",
        duration: 0.6,
      }
    );
    const infoContainer = gsap.fromTo(
      element == "1" ? Twitterinfo.current : justPlayInfo.current,
      {
        scale: 1,
        gap: 0,
      },
      {
        scale: 0,
        ease: "none",
        duration: 0.2,
        onComplete: () => {
          const infoElements = gsap.fromTo(
            element == "1"
              ? [info.current[0], info.current[1], info.current[2]]
              : [info.current[3], info.current[4], info.current[5]],
            {
              scale: 1,
            },
            {
              scale: 0,
              display: "block",
              ease: "none",
              delay: 0.1,
              duration: 0.1,
            }
          );
        },
      }
    );

    return () => {
      projectInfoLine.kill();
      infoContainer.kill();
      tl1.kill();
    };
  };
  return (
    <div
      ref={projects}
      className={`project1 animate__animated animate__fadeIn`}
    >
      <div
        className="columnsContainer"
        onMouseLeave={() => handleHoverOut(hoverNumber)}
        onMouseEnter={() => handleHover(hoverNumber)}
      >
        <ColumnsProjects columns={columnsProject}>
          <CardProject
            info1={info1}
            info2={info2}
            info3={info3}
            clas={clas}
            Twitterinfo={Twitterinfo}
            text={text}
            title={title}
          >
            <a href={link} target="_blank">
              <DemoIcon />
            </a>
            <a href={link2} target="_blank">
              <GitHubIcon />
            </a>
          </CardProject>
        </ColumnsProjects>
      </div>

      {children}
    </div>
  );
}
