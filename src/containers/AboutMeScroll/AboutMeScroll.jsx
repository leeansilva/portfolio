import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Espher from "../../components/Espher/Espher";
import "./style.css";
import Name from "../../components/Name/Name";
import Button from "../../components/Button/Button";
import LinesAboutMe from "../../components/LinesAboutMe/LinesAboutMe";

const AboutMeScroll = ({ isActive }) => {
  const AboutMeContainer = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);
  const line5 = useRef(null);
  const line6 = useRef(null);
  const line7 = useRef(null);
  const nameRef = useRef(null);
  const espherRef = useRef(null);
  const textRef = useRef([]);
  const [fadeIn, setFadeIn] = useState(false);
  const [espherOcult, setespherOcult] = useState(true);

  const width = window.innerWidth;

  useEffect(() => {
    if (width > 950 && width < 1252) {
      //si el ancho es mayor a 950 y menor a 1252 se oculta
      setespherOcult(false);
    } else if (width < 951) {
      //sino, cuando fadeIn sea true se va a ver
      setespherOcult(!fadeIn);
    } else setespherOcult(true);
  }, [width, fadeIn]);

  //animations:
  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 950) {
      const aboutMeContainerAnimation = gsap.fromTo(
        AboutMeContainer.current,
        {
          translateX:
            isActive === "previous"
              ? "0px"
              : isActive === "next"
              ? "15%"
              : isActive === "next projects" && "10%",
          // gap:0,
        },
        {
          //translateX: isActive == 'next' ? "15vw" : '0px',
          translateX:
            isActive === "next"
              ? "15%"
              : isActive === "previous"
              ? "0px"
              : isActive === "previous projects" && "15%",
          ease: "none",
          duration: 0.5,
        }
      );

      function createLineAnimation(line, heightFrom, heightTo, xFrom, xTo) {
        return gsap.fromTo(
          line.current,
          {
            height: heightFrom,
            translateX: xFrom,
          },
          {
            height: heightTo,
            translateX: xTo,
            ease: "none",
            duration: 0.5,
          }
        );
      }

      function createAnimationContent(element, opacityTo, xFrom, xTo) {
        return gsap.fromTo(
          element.current,
          {
            opacity: 0,
            translateX: xFrom,
          },
          {
            opacity: opacityTo,
            translateX: xTo,
            ease: "none",
            duration: 0.5,
          }
        );
      }

      const animationText = gsap.fromTo(
        textRef.current,
        {
          opacity:
            isActive == "next" || isActive == "previous projects" ? 0 : 1,
        },
        {
          opacity:
            isActive == "next" || isActive == "previous projects" ? 1 : 0,
          duration: 0.2,
          width: "600px",
          ease: "none",
        }
      );
      const nameAnimation = createAnimationContent(
        nameRef,
        isActive == "next" || isActive == "previous projects" ? 1 : 0,
        "100px",
        "0px"
      );
      const espherAnimation = createAnimationContent(
        espherRef,
        isActive == "next" || isActive == "previous projects" ? 1 : 0,
        "20px",
        "0px"
      );

      const line1Animation = createLineAnimation(
        line1,
        isActive == "next"
          ? "20%"
          : isActive == "previous" ||
              (isActive == "previous projects" && "-20%"),
        isActive == "next"
          ? "20%"
          : isActive == "previous" ||
              (isActive == "previous projects" && "-20%"),
        0,
        0
      );
      const line2Animation = createLineAnimation(
        line2,
        isActive == "next"
          ? "20%"
          : isActive == "previous" ||
              (isActive == "previous projects" && "-20%"),
        isActive == "next"
          ? "20%"
          : isActive == "previous" ||
              (isActive == "previous projects" && "-20%"),
        0,
        isActive === "next" || isActive == "previous projects"
          ? "-20px"
          : isActive === "previous" && "0"
      );
      const line3Animation = createLineAnimation(
        line3,
        isActive == "next"
          ? "20%"
          : isActive == "previous" ||
              (isActive == "previous projects" && "-20%"),
        isActive == "next"
          ? "20%"
          : isActive == "previous" ||
              (isActive == "previous projects" && "-20%"),
        0,
        isActive === "next" || isActive == "previous projects"
          ? "-20px"
          : isActive === "previous" && "0"
      );
      const line4Animation = createLineAnimation(
        line4,
        isActive == "next"
          ? "20%"
          : isActive == "previous" ||
              (isActive == "previous projects" && "-20%"),
        isActive == "next"
          ? "20%"
          : isActive == "previous" ||
              (isActive == "previous projects" && "-20%"),
        0,
        isActive === "next" || isActive == "previous projects"
          ? "-20px"
          : isActive === "previous" && "0"
      );
      const line5Animation = createLineAnimation(
        line5,
        isActive == "next"
          ? "20%"
          : isActive == "previous" ||
              (isActive == "previous projects" && "-20%"),
        isActive == "next"
          ? "20%"
          : isActive == "previous" ||
              (isActive == "previous projects" && "-20%"),
        0,
        isActive === "next" || isActive == "previous projects"
          ? "80px"
          : isActive === "previous" && "0"
      );
      const line6Animation = createLineAnimation(
        line6,
        isActive == "next"
          ? "20%"
          : isActive == "previous" ||
              (isActive == "previous projects" && "-20%"),
        isActive == "next"
          ? "20%"
          : isActive == "previous" ||
              (isActive == "previous projects" && "-20%"),
        0,
        isActive === "next" || isActive == "previous projects"
          ? "180px"
          : isActive === "previous" && "0"
      );
      const line7Animation = createLineAnimation(
        line7,
        isActive == "next"
          ? "20%"
          : isActive == "previous" ||
              (isActive == "previous projects" && "-20%"),
        isActive == "next"
          ? "20%"
          : isActive == "previous" ||
              (isActive == "previous projects" && "-20%"),
        0,
        isActive === "next" || isActive == "previous projects"
          ? "300px"
          : isActive === "previous" && "0"
      );

      return () => {
        aboutMeContainerAnimation.kill();
        line1Animation.kill();
        line2Animation.kill();
        line3Animation.kill();
        line4Animation.kill();
        line5Animation.kill();
        line6Animation.kill();
        line7Animation.kill();
        nameAnimation.kill();
        espherAnimation.kill();
        animationText.kill();
      };
    }
  }, [isActive]);

  console.log(fadeIn);

  return (
    <div className="sections aboutMe_container" ref={AboutMeContainer}>
      <LinesAboutMe
        fadeIn={fadeIn}
        line1={line1}
        line2={line2}
        line3={line3}
        line4={line4}
        line5={line5}
        line6={line6}
        nameRef={nameRef}
        textRef={textRef}
      />

      <div ref={line7} className="flexBlocks_line line7">
        <div onClick={() => setFadeIn(!fadeIn)} className="button_container">
          <Button
            color={"dark"}
            title={fadeIn == true ? "Sobre mi" : "Experiencia"}
          />
        </div>
      </div>

      {espherOcult === true && (
        <div
          ref={espherRef}
          className="espher_container animate__animated animate__fadeIn"
        >
          <Espher />
        </div>
      )}
    </div>
  );
};

export default AboutMeScroll;
