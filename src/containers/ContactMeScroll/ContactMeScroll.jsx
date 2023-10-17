import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import "./style.css";
import Name from "../../components/Name/Name";
import LinesContactMe from "../../components/LinesContactMe/LinesContactMe";
import Map from "../../components/Map/Map";
import Social from "../../components/Social/Social";
import LinkedinIcon from "../../icons/LinkedinIcon";
import Instagram from "../../icons/Instagram";
import FacebookIcon from "../../icons/FacebookIcon";
import WhatsappIcon from "../../icons/WhatsappIcon";
import GitHubIcon from "../../icons/GitHubIcon";
import Alert from "../../components/Alert/Alert";
import Chords from "../../components/Chords/Chords";

const ContactMeScroll = ({ isActive }) => {
  const contactMeContainer = useRef(null);
  const rectangulo = useRef(null);

  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 950) {
      const RectanguloAnimation = gsap.fromTo(
        rectangulo.current,
        {
          width: isActive == "next" && "50%",
          right: isActive == "next" && "100%",
        },
        {
          width: isActive == "next" && "15%",
          right: isActive == "next" && 0,
          duration: 0.5,
          ease: "none",
        }
      );
      return () => {
        RectanguloAnimation.kill();
      };
    }
  }, [isActive]);

  return (
    <div
      ref={contactMeContainer}
      id="Contáctame"
      className="sections contact_container"
    >
      {isSent ? <Alert isSent={isSent} setIsSent={setIsSent} /> : <></>}
      <div ref={rectangulo} className="rectangulo">
        <Social>
          <a target="_blank" href="https://www.linkedin.com/in/leandrosilva-/">
            <LinkedinIcon />
          </a>
        </Social>

        <Social>
          <a target="_blank" href="https://github.com/leeansilva">
            <GitHubIcon />
          </a>
        </Social>

        <Social>
          <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B541135654619&text=Hola%20+Lean!%20+me+gustó%20tu%20portfolio!...+&type=phone_number&app_absent=0">
            <WhatsappIcon />
          </a>
        </Social>
        <Social>
          <a target="_blank" href="https://www.facebook.com/lean.silva.92/">
            <FacebookIcon />
          </a>
        </Social>
        <Social>
          <a target="_blank" href="https://www.instagram.com/leeansilva_/">
            <Instagram />
          </a>
        </Social>
        <p style={{ color: "white" }}>Desing & Built by Leandro Silva.</p>
      </div>

      <LinesContactMe isSent={isSent} setIsSent={setIsSent} />

      <Chords />

      <footer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            margin: "10px 0 10px 0",
          }}
        >
          <Social>
            <a target="_blank" href="https://www.linkedin.com/in/leandrosilva-/">
              <LinkedinIcon />
            </a>
          </Social>

          <Social>
            <a target="_blank" href="https://github.com/leeansilva">
              <GitHubIcon />
            </a>
          </Social>

          <Social>
            <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B541135654619&text=Hola%20+Lean!%20+me+gustó%20tu%20portfolio!...+&type=phone_number&app_absent=0">
              <WhatsappIcon />
            </a>
          </Social>
          <Social>
            <a target="_blank" href="https://www.facebook.com/lean.silva.92/">
              <FacebookIcon />
            </a>
          </Social>
          <Social>
            <a target="_blank" href="https://www.instagram.com/leeansilva_/">
              <Instagram />
            </a>
          </Social>
        </div>
        <p style={{ paddingBottom: "10px" }}>
          Desing & Built by Leandro Silva.
        </p>
      </footer>
    </div>
  );
};

export default ContactMeScroll;
