import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <div className="logo-container--flex">
              <h3 class="logo">
                lfrutig<span>DEV</span>
              </h3>
              <small>DESENVOLVEDOR FRONT-END</small>
            </div>
            <button
              type="button"
              className="toggle-btn"
              onClick={toggleSidebar}
            >
              <FaAlignRight></FaAlignRight>
            </button>
          </div>
          <PageLinks styleClass="nav-links"></PageLinks>
        </div>
      </nav>
    </>
  )
}

export default Navbar
