import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Desenvolvimento Web",
    text: `Desenvolvimento de web sites com foco nas melhores práticas e tecnologias. Pensando sempre na usabilidade e performance.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Seu layout adaptado para web, design responsivo, um layout para qualquer dispositivo.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "web app / PWA",
    text: `Aposte no que há de mais moderno na web. Sites com comportamentos de apps nativos, com notificações e muito mais`,
  },
]
