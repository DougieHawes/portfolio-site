// import dependencies
import { useEffect } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// import helpers
import { capitalise, getDate, getHeight, getLogo } from "../helpers";

// import components
import { Button1, Button2 } from "./buttons";

// import styles
import "./style.min.css";

// card for work grid
export const Card1 = ({ category, codeLink, id, image, siteLink, title }) => (
  <motion.div
    layout
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    className="card card1"
  >
    <Link to={`/work/${id}`}>
      <div className="card1-image-container">
        <img
          className="card1-image"
          src={image}
          alt={`display image for ${title}`}
        />
        <div className="card1-veneer">
          <p className="card1-veneer-text">MORE</p>
          <p className="card1-veneer-text">INFO</p>
        </div>
      </div>
    </Link>
    <div className="card1-text-container">
      <h3 className="card1-title">{capitalise(title)}</h3>
      <p className="card1-subtitle">{category}</p>
      <Button1 to={siteLink} text="VIEW PAGE" />
      <Button2 to={codeLink} text="VIEW CODE" />
    </div>
  </motion.div>
);

// card for skill grid
export const Card2 = ({ bulletPoints = [], logo, name }) => (
  <div className="card card2">
    <div className="card2-logo-container">
      <img className="card2-logo" src={logo} alt={`logo for ${name}`} />
    </div>
    <div className="card2-body">
      <h4 className="card2-name">{name}</h4>
      <div className="card2-bulletpoints">
        {bulletPoints.map((i) => (
          <div key={i} className="card2-bullepoint">
            <span className="card2-bullepoint-marker">&#9679;</span>{" "}
            {capitalise(i)}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// card for individual workpiece
export const Card3 = ({
  codeLink,
  image,
  logos = [],
  siteLink,
  subtitle,
  text,
  title,
}) => {
  if (text) {
    const textContainer = document.querySelector(".card3-text-container");

    textContainer.innerHTML = text;
  }

  return (
    <div className="card card3" style={{ height: getHeight(100, 140) }}>
      <div className="card3-header">
        <h3 className="card3-title">{title}</h3>
        <p className="card3-subtitle">{subtitle}</p>
        <div className="card3-logos">
          {logos.map((l) => (
            <img
              className="card3-logo"
              key={l}
              src={getLogo(l)}
              alt={`logo for ${title}`}
            />
          ))}
        </div>
      </div>
      <div className="card3-body">
        <div
          className="card3-body-left"
          style={{ maxHeight: getHeight(380, 200) }}
        >
          <div className="card3-text-container"></div>
        </div>
        <div className="card3-body-right">
          <img className="card3-image" src={image} alt={`image for ${title}`} />
          <Button1 to={siteLink} text="VIEW PAGE" />
          <Button2 to={codeLink} text="VIEW CODE" />
        </div>
      </div>
    </div>
  );
};

// card for blog page
export const Card4 = ({
  createdAt,
  image,
  link,
  subtitle,
  tags = [],
  text = "",
  title,
}) => {
  useEffect(() => {
    const textContainer = document.querySelector(".card4-text-container");

    textContainer.innerHTML = text;
  }, []);

  return (
    <div className="card4">
      <Link to={`/blog/${link}`}>
        <div className="card4-image-container">
          <img className="card4-image" src={image} alt={`image for ${title}`} />
        </div>
        <div className="card4-details-container">
          <h3 className="card4-title">{title}</h3>
          <p className="card4-subtitle">{subtitle}</p>
          <p className="card4-date">{getDate(createdAt)}</p>
        </div>
        <div className="card4-text-container"></div>
      </Link>
      <div className="card4-tags">
        {tags.map((t) => (
          <a className="card4-tag" key={t}>
            #{t}
          </a>
        ))}
      </div>
    </div>
  );
};

// card for single blog page
export const Card5 = ({
  createdAt,
  image,
  subtitle,
  tags = [],
  text,
  title,
}) => {
  if (text) {
    const textContainer = document.querySelector(".card5-text-container");

    textContainer.innerHTML = text;
  }

  return (
    <div className="card5" style={{ maxHeight: getHeight(100, 140) }}>
      <div className="card5-image-container">
        <img className="card5-image" src={image} alt={`image for ${title}`} />
      </div>
      <div className="card5-tags">
        {tags.map((t) => (
          <a className="card5-tag" key={t}>
            #{t}
          </a>
        ))}
      </div>
      <div className="card5-details-container">
        <h3 className="card5-title">{title}</h3>
        <p className="card5-subtitle">{subtitle}</p>
      </div>
      <div className="card5-text-container"></div>
    </div>
  );
};
