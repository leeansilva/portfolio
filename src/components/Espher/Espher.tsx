import React from 'react'
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import './style.css'

const Espher = () => {
  return (
    <TagCloud
        className='esferita'
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(800, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "fast",
        })}
        onClick={(tag: string, ev: MouseEvent) => console.log(tag)}
        onClickOptions={{ passive: false }}
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