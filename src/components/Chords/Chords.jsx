import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Soundfont from "soundfont-player";

export default function Chords() {
  const chords = useRef([]);

  useEffect(() => {
    // Crea un reproductor de muestras de piano dentro de useEffect
    const initAudioContext = () => {
      const audioContext = new AudioContext();
      const instrumentName = "acoustic_grand_piano"; // Cambia esto según tus preferencias

      Soundfont.instrument(audioContext, instrumentName).then((player) => {
        const scale = ["B3", "C4", "E4", "B3", "C4", "E4"];

        const handleHover = (e) => {
          gsap.killTweensOf(e.target);
          const tl1 = gsap
            .timeline()
            .to(e.target, {
              duration: 0.2,
              borderTopLeftRadius: "50%",
              width: "10px",
            })
            .to(e.target, {
              borderTopLeftRadius: 0,
              width: "5px",
              duration: 0.2,
            });

          const lineIndex = chords.current.indexOf(e.target);
          player.play(scale[lineIndex]);
        };

        // Asigna los manejadores de eventos a los elementos aquí
        chords.current.forEach((chord, index) => {
          chord.addEventListener("mouseenter", handleHover);
        });
      });
    };

    // Llama a la función para inicializar el AudioContext al cargar el componente
    initAudioContext();
  }, []);

  return (
    <div className="flexCuerdas">
      <div
        ref={(el) => (chords.current[0] = el)}
        className="chord1 chord"
      ></div>
      <div
        ref={(el) => (chords.current[1] = el)}
        className="chord2 chord"
      ></div>
      <div
        ref={(el) => (chords.current[2] = el)}
        className="chord3 chord"
      ></div>
      <div
        ref={(el) => (chords.current[3] = el)}
        className="chord4 chord"
      ></div>
      <div
        ref={(el) => (chords.current[4] = el)}
        className="chord5 chord"
      ></div>
      <div
        ref={(el) => (chords.current[5] = el)}
        className="chord6 chord"
      ></div>
    </div>
  );
}
