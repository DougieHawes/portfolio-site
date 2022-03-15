// import dependencies
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// import redux
import { getProfile } from "../../../redux/profile/profileReducer";

// import components
// utils
import PublicRoute from "../../utils/PublicRoute";
import { Link1 } from "../../utils/links";

// import helpers
import { getHeight } from "../../helpers";

// import media
import loader from "../../../media/loader.svg";

import envelopeLogo from "../../../media/envelope.svg";
import phoneLogo from "../../../media/phone.svg";

import codepenLogo from "../../../media/codepen-logo.svg";
import facebookLogo from "../../../media/facebook-logo.svg";
import githubLogo from "../../../media/github-logo.svg";
import linkedinLogo from "../../../media/linkedin-logo.svg";
import twitterLogo from "../../../media/twitter-logo.svg";
import youtubeLogo from "../../../media/youtube-logo.svg";

const About = () => {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile.profile);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const content =
    profile.length > 0 ? (
      <div className="about" style={{ maxHeight: getHeight(60, 100) }}>
        <div className="about-header">
          <div className="about-header-left">
            <img
              className="about-avatar"
              src={profile[0].avatar}
              alt="profile avatar"
            />
          </div>
          <div className="about-header-right">
            <div className="about-header-row">
              <p className="about-key">Name</p>
              <p className="about-detail">{profile[0].name}</p>
            </div>
            <div className="about-header-row">
              <p className="about-key">Location</p>
              <p className="about-detail">{profile[0].location}</p>
            </div>
            <div className="about-header-row">
              <p className="about-key">Email</p>
              <p className="about-detail">
                <Link to="/contact">{profile[0].email}</Link>
              </p>
            </div>
            <div className="about-header-row">
              <p className="about-key">Phone</p>
              <a
                className="about-detail"
                href={`tel:+44${
                  profile[0].phone &&
                  profile[0].phone.substring(1, profile[0].phone.length)
                }`}
              >
                {profile[0].phone}
              </a>
            </div>
          </div>
        </div>
        <div className="about-social">
          <Link1 image={githubLogo} sitename="GitHub" to={profile[0].github} />
          <Link1
            image={linkedinLogo}
            sitename="Linkedin"
            to={profile[0].linkedin}
          />
          <Link1
            image={twitterLogo}
            sitename="Twitter"
            to={profile[0].twitter}
          />
          <Link1
            image={codepenLogo}
            sitename="Codepen"
            to={profile[0].codepen}
          />
          <Link1
            image={youtubeLogo}
            sitename="YouTube"
            to={profile[0].youtube}
          />
          <Link1
            image={facebookLogo}
            sitename="Facebook"
            to={profile[0].facebook}
          />
        </div>
        <div className="about-bio-container">
          <h4 className="about-bio-title">BIO</h4>
          <p className="about-bio">{profile[0].bio}</p>
        </div>
      </div>
    ) : (
      <img className="loader" src={loader} alt="" />
    );

  return <PublicRoute content={content} />;
};

export default About;
