// import dependencies
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// import redux
import { getProfile } from "../../redux/profile/profileReducer";

// imports components
// utils
import { Link1 } from "../utils/links";

// import media
import envelopeLogo from "../../media/envelope.svg";
import phoneLogo from "../../media/phone.svg";

import expressLogo from "../../media/express-logo.svg";
import mongoLogo from "../../media/mongo-logo.svg";
import nodeLogo from "../../media/node-logo.svg";
import phpLogo from "../../media/php-logo.svg";
import pythonLogo from "../../media/python-logo.svg";
import psqlLogo from "../../media/psql-logo.svg";
import reactLogo from "../../media/react-logo.svg";

import githubLogo from "../../media/github-logo.svg";
import linkedinLogo from "../../media/linkedin-logo.svg";
import youtubeLogo from "../../media/youtube-logo.svg";

// import styles
import "./style.min.css";

const Landing = ({ onClick, slideOut }) => {
  const dispatch = useDispatch();

  let profile = useSelector((state) => state.profile);
  profile = profile.profile[0];

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <div className={`landing ${slideOut && "landing-close"}`}>
      <div className="landing-container">
        <img className="avatar" src={profile && profile.avatar} alt="" />
        <div className="landing-text">
          <h1 className="landing-title">
            Dougie <span className="surname">Hawes</span>
          </h1>
          <p className="landing-subtitle">FullStack Web Developer</p>
          <div className="landing-skill-grid">
            <img className="landing-skill-logo" src={psqlLogo} alt="" />
            <img className="landing-skill-logo" src={mongoLogo} alt="" />
            <img className="landing-skill-logo" src={expressLogo} alt="" />
            <img className="landing-skill-logo" src={reactLogo} alt="" />
            <img className="landing-skill-logo" src={nodeLogo} alt="" />
            <img className="landing-skill-logo" src={pythonLogo} alt="" />
            <img className="landing-skill-logo" src={phpLogo} alt="" />
          </div>
          <div className="landing-lower-container">
            <div className="landing-contacts-grid">
              <div className="landing-contacts-logo">
                <Link to="/contact">
                  <img onClick={onClick} src={envelopeLogo} alt="" />
                </Link>
              </div>
              <div className="landing-contacts-logo">
                <a
                  href={`tel:+44${
                    profile && profile.phone.substring(1, profile.phone.length)
                  }`}
                  alt="phone me"
                >
                  <img src={phoneLogo} alt="" />
                </a>
              </div>
            </div>
            <button className="enter-button" onClick={onClick}>
              ENTER
            </button>
            <div className="landing-social-grid">
              <Link1
                image={githubLogo}
                sitename="GitHub"
                to={profile && profile.github}
              />
              <Link1
                image={linkedinLogo}
                sitename="linkedin"
                to={profile && profile.linkedin}
              />
              <Link1
                image={youtubeLogo}
                sitename="youtube"
                to={profile && profile.youtube}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
