// import dependencies
import { Link, useLocation } from "react-router-dom";

import { capitalise } from "../helpers";

export const Link1 = ({ image, sitename, to }) => (
  <a className="link" href={to} target="_blank">
    <img className="link-icon" src={image} alt={`image for ${sitename}`} />
    <div className="link-hover">Visit my {sitename} page</div>
  </a>
);

export const Navlink1 = ({ link, text }) => {
  const page = location.pathname.substring(1, 5);
  const activePage =
    page === text.substring(0, 4) || (text === "work" && page === "");

  return (
    <Link className={`nav-link ${activePage && "nav-link-active"}`} to={link}>
      {capitalise(text)}
      <div className="nav-link-underline"></div>
    </Link>
  );
};

export const Navlink2 = ({ link, text }) => (
  <Link className="nav-link nav-link2" to={link}>
    {text}
  </Link>
);

export const Navlink3 = ({ handleClick, link, text }) => {
  const page = location.pathname.substring(1, 5);
  const activePage =
    page === text.substring(0, 4) || (text === "work" && page === "");

  return (
    <Link
      className={` nav-link nav-link3 ${activePage && "nav-link-active"}`}
      onClick={handleClick}
      to={link}
    >
      {capitalise(text)}
    </Link>
  );
};

export const Navlink4 = ({ link, text }) => (
  <Link className="nav-link nav-link4" to={link}>
    {text}
  </Link>
);
