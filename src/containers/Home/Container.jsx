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

const Container = () => {
  const [clickOut, setClickOut] = useState(true);
  const [section1, setSection1] = useState("");
  const [section2, setSection2] = useState("");
  const [section3, setSection3] = useState("");
  const sections = useRef([]);
  const homeContainer = useRef(null);
  const contactMeContainer = useRef(null);

  const touchStartY = useRef(null);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (touchStartY.current !== null) {
      const deltaY = e.touches[0].clientY - touchStartY.current;

      if (deltaY > 5) {
        // Deslizamiento hacia abajo
        previousSection();
      } else if (deltaY < -5) {
        // Deslizamiento hacia arriba
        nextSection();
      }
      touchStartY.current = null;
    }
  };

  const handleClickOut = () => {
    setClickOut(true);
  };

  const nextSection = (index) => {
    let currentIndex
    index != undefined ?  currentIndex = index :  currentIndex = Math.floor(
      -homeContainer.current.getBoundingClientRect().x / window.innerWidth
    );

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
    gsap.registerPlugin(Observer);

    const observer = Observer.create({
      target: window,
      type: "wheel",
      wheelSpeed: 0.5,
      onWheel: (e) => {
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
  }, []);

  return (
    <div
      className="main_container"
      ref={homeContainer}
      onClick={() => setClickOut(!clickOut)}
    >
      <section ref={(el) => (sections.current[0] = el)}>
        <NavBar clickOut={clickOut} handleClickOut={handleClickOut} />

        <div className="home_about_container">
          <div className="home__Name_container">
            <h1 className="Name_container_text">Hola, soy</h1>
            <div className="name_flex">
              <Name fontSize={"90px"} color={"white"} text="Leandro" />
              <Name fontSize={"90px"} color={"white"} text="Silva," />
            </div>
            <div className="developer_flex">
              <Name fontSize={"60px"} color={"white"} text="desarrollador " />
              <Name fontSize={"60px"} color={"white"} text="web. " />
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
