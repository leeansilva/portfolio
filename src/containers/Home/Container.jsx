import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Name from "../../components/Name/Name";
import AboutMeScroll from "../AboutMeScroll/AboutMeScroll";
import ProjectsScroll from "../ProjectsScroll/ProjectsScroll";
import ContactMeScroll from "../ContactMeScroll/ContactMeScroll";
import "./style.css";
import { Observer } from "gsap/Observer";
import { gsap } from "gsap";
import Button from "../../components/Button/Button";
import ModalSwipe from "../../components/ModalSwipe/ModalSwipe";

const Container = () => {
  const [clickOut, setClickOut] = useState(true);
  const [section1, setSection1] = useState("");
  const [section2, setSection2] = useState("");
  const [section3, setSection3] = useState("");
  const [swipe, setSwipe] = useState(false);
  const sections = useRef([]);
  const homeContainer = useRef(null);
  const contactMeContainer = useRef(null);

  const touchStartX = useRef(null);
  const windowWidth = window.innerWidth;

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    if (!swipe) {
      e.preventDefault(); // Deshabilita el desplazamiento si swipe es false
      return;
    }

    if (touchStartX.current !== null) {
      const deltaX = e.touches[0].clientX - touchStartX.current;

      if (deltaX > 5) {
        // Deslizamiento hacia la derecha (aumenta la cantidad de 50 si es necesario)
        previousSection();
      } else if (deltaX < -5) {
        // Deslizamiento hacia la izquierda (disminuye la cantidad de -50 si es necesario)
        nextSection();
      }
      touchStartX.current = null;
    }
  };

  const handleClickOut = () => {
    setClickOut(true);
  };

  const nextSection = (index) => {
    let currentIndex;
    index != undefined
      ? (currentIndex = index)
      : (currentIndex = Math.floor(
          -homeContainer.current.getBoundingClientRect().x / window.innerWidth
        ));

    if (currentIndex < sections.current.length - 1) {
      const section = currentIndex + 1;
      gsap.to(homeContainer.current, {
        x: -section * window.innerWidth,
        duration: 0.5,
      });
      if (section === 1) {
        setSection1("next");
      } else if (section === 2) {
        setSection1("next projects");
        setSection2("next");
      } else if (section === 3) {
        setSection2("next contactme");
        setSection3("next");
      }
    }
  };

  const previousSection = () => {
    const currentIndex = Math.floor(
      -homeContainer.current.getBoundingClientRect().x / window.innerWidth
    );

    if (currentIndex > 0 && currentIndex <= 4) {
      const section = currentIndex - 1;
      gsap.to(homeContainer.current, {
        x: -section * window.innerWidth,
        duration: 0.5,
      });
      if (section === 0) {
        setSection1("previous");
      } else if (section === 1) {
        setSection1("previous projects");
        setSection2("previous");
      } else if (section === 2) {
        setSection2("previous contactme");
        setSection3("previous");
      }
    }
  };

  useEffect(() => {
    windowWidth >= 950 && setSwipe(true)
    gsap.registerPlugin(Observer);

    const observer = Observer.create({
      target: window,
      type: "wheel",
      wheelSpeed: 0.5,
      onWheel: (e) => {
        if (!swipe) {
          e.preventDefault(); // Deshabilita el desplazamiento si swipe es false
          return;
        }

        const currentIndex = Math.floor(
          -homeContainer.current.getBoundingClientRect().x / window.innerWidth
        );
        if (e.deltaY > 0) {
          // Desplazamiento hacia abajo
          previousSection();
        } else {
          // Desplazamiento hacia arriba
          nextSection();
        }
      },
      tolerance: 200,
      preventDefault: true,
    });

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      observer.kill();
    };
  }, [swipe]);
  return (
    <div
      className="main_container"
      ref={homeContainer}
      onClick={() => setClickOut(!clickOut)}
    >
      {
        swipe == false ? 
        <ModalSwipe setSwipe={setSwipe} />
        :
        <></>
      }
      <section ref={(el) => (sections.current[0] = el)}>
        <NavBar clickOut={clickOut} handleClickOut={handleClickOut} />

        <div className="home_about_container">
          <div className="home__Name_container">
            <h1 className="Name_container_text">Hola, soy</h1>
            <div className="name_flex">
              <Name fontSize={"120px"} color={"white"} text="Leandro" />
              <Name fontSize={"120px"} color={"white"} text="Silva," />
            </div>
            <div className="developer_flex">
              <Name fontSize={"80px"} color={"white"} text="desarrollador " />
              <Name fontSize={"80px"} color={"white"} text="web. " />
            </div>
            <h1 className="Name_container_text2">
              Apasionado por crear experiencias digitales excepcionales.
            </h1>
          </div>
          <div onClick={() => nextSection(2)} className="button__container">
            <Button
              contactMeContainer={contactMeContainer}
              title={"Contáctame"}
              color={"light"}
            />
          </div>
        </div>
      </section>

      <section
        className="second_section"
        ref={(el) => (sections.current[1] = el)}
      >
        <AboutMeScroll isActive={section1} />
      </section>

      <section ref={(el) => (sections.current[2] = el)}>
        <ProjectsScroll isActiveProjects={section2} />
      </section>

      <section ref={(el) => (sections.current[3] = el)}>
        <ContactMeScroll isActive={section3} />
      </section>
    </div>
  );
};

export default Container;
