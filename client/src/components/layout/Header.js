import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Slide from "react-reveal/Slide";

import "./style.min.css";

import { Navlink1, Navlink3 } from "../utils/links.js";

import nameLogo from "../../media/name-logo.svg";

const Header = () => {
  const [menu, toggleMenu] = useState(false);

  const location = useLocation();

  const page = location.pathname.substring(1, 5);

  return (
    <Slide down>
      <header className="header">
        <div className="header-container">
          <div className="title-box" onClick={() => toggleMenu(false)}>
            <Link to="/dashboard">
              <img className="title-image" src={nameLogo} alt="" />
            </Link>
          </div>
          <div className="navbar-container">
            <nav className="navbar-wide" id="navbar">
              <div className="navbar-wide-container">
                <Navlink1 link="/" text="work" />
                <Navlink1 link="/skills" text="skills" />
                <Navlink1 link="/about" text="about" />
                <Navlink1 link="/blog" text="blog" />
                <Navlink1 link="/contact" text="contact" />
              </div>
            </nav>
            <nav className="navbar-narrow">
              <div
                className={`navbar-icon ${menu && "navbar-icon-open"}`}
                onClick={() => toggleMenu(!menu)}
              >
                <div className="navbar-icon-bar" id="bar1"></div>
                <div className="navbar-icon-bar" id="bar2"></div>
                <div className="navbar-icon-bar" id="bar3"></div>
              </div>
              <div className={`navbar-body ${menu && "navbar-body-open"}`}>
                <Navlink3
                  handleClick={() => {
                    page === "" ? toggleMenu(close) : null;
                  }}
                  link="/"
                  text="work"
                />
                <Navlink3
                  handleClick={() => {
                    page === "skil" ? toggleMenu(close) : null;
                  }}
                  link="/skills"
                  text="skills"
                />
                <Navlink3
                  handleClick={() => {
                    page === "abou" ? toggleMenu(close) : null;
                  }}
                  link="/about"
                  text="about"
                />
                <Navlink3
                  handleClick={() => {
                    page === "blog" ? toggleMenu(close) : null;
                  }}
                  link="/blog"
                  text="blog"
                />
                <Navlink3
                  handleClick={() => {
                    page === "cont" ? toggleMenu(close) : null;
                  }}
                  link="/contact"
                  text="contact"
                />
              </div>
            </nav>
          </div>
        </div>
      </header>
    </Slide>
  );
};

export default Header;
