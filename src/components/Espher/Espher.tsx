import React from 'react'
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import './style.css'

const Espher = () => {
  console.log(window.innerWidth)
  return (
    <TagCloud
        className='esferita'
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(800, w.innerWidth, w.innerHeight) / (window.innerWidth < 1535 ? 3 : 2),
            maxSpeed: "fast",
        })}

    >
        {[
            "VSCode",
            "TypeScript",
            "React",
            "Bootstrap",
            "Tailwind",
            "Material UI",
            "npm",
            "CSS",
            "HTML",
            "Node",
            "Java",
            "JS",
            "Redux",
            "Gsap",
            "JSON",
            "BEM",
            "Three.js"
        ]}
    </TagCloud>
  )
}

export default Espher