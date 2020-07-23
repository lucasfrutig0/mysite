import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "sobre",
    url: "/sobre/",
  },
  {
    id: 3,
    text: "projetos",
    url: "/projetos/",
  },
  /*   {
    id: 4,
    text: "blog",
    url: "/blog/",
  }, */
  {
    id: 4,
    text: "contato",
    url: "/contato/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
