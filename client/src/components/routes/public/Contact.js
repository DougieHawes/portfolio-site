// import dependencies
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// import redux
import { getProfile } from "../../../redux/profile/profileReducer";

// import utils
import PublicRoute from "../../utils/PublicRoute.js";
import { Button3 } from "../../utils/buttons";
import { Input1, Input2 } from "../../utils/inputs";
import { Link1 } from "../../utils/links";

// import helpers
import { getHeight, isEmail, isPhoneNumber } from "../../helpers";

// media imports
import codepenLogo from "../../../media/codepen-logo.svg";
import facebookLogo from "../../../media/facebook-logo.svg";
import githubLogo from "../../../media/github-logo.svg";
import linkedinLogo from "../../../media/linkedin-logo.svg";
import twitterLogo from "../../../media/twitter-logo.svg";
import youtubeLogo from "../../../media/youtube-logo.svg";

// import styles
import "./style.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    linkedin: "",
    name: "",
    phone: "",
    text: "",
    title: "",
    twitter: "",
  });
  const [state, setState] = useState({
    btnDisabled: false,
    btnText: "submit",
    message: "",
    showMessage: false,
  });

  const { email, name, linkedin, phone, text, title, twitter } = formData;
  const { btnDisabled, btnText, message, showMessage } = state;

  useEffect(() => {
    if (
      email === "" ||
      name === "" ||
      phone === "" ||
      text === "" ||
      title === ""
    ) {
      setState({ ...state, message: "please complete all mandatory fields" });
    } else if (!isEmail(email)) {
      setState({ ...state, message: "please enter a valid email" });
    } else if (!isPhoneNumber(phone)) {
      setState({ ...state, message: "please enter a valid phone number" });
    } else {
      setState({ ...state, btnDisabled: false, message: "" });
    }
  }, [email, name, linkedin, phone, text, title, twitter]);

  const handleChange = (name) => (e) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.length > 0) {
      setState({ ...state, showMessage: true });

      setTimeout(() => {
        setState({ ...state, showMessage: false });
      }, 3000);
    } else {
      try {
        setState({ ...state, btnDisabled: true, btnText: "submitting..." });

        axios.post(`${process.env.REACT_APP_API_URL}/mail`, formData);

        setState({
          ...state,
          btnText: "submitted",
          message: "thank you for getting in touch",
          showMessage: true,
        });

        setTimeout(() => {
          setState({
            ...state,
            btnDisabled: false,
            btnText: "submit",
            message: "",
            showMessage: false,
          });

          setFormData({
            email: "",
            name: "",
            linkedin: "",
            phone: "",
            text: "",
            title: "",
            twitter: "",
          });
        }, 2000);
      } catch (e) {
        setState({
          ...state,
          btnDisabled: false,
          btnText: "submit",
          message: "message error",
          showMessage: true,
        });

        setTimeout(() => {
          setState({
            ...state,
            message: "",
            showMessage: false,
          });
        }, 2000);
      }
    }
  };

  const dispatch = useDispatch();

  let profile = useSelector((state) => state.profile);
  profile = profile.profile[0];

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const content = (
    <div className="contact">
      <div className="contact-links">
        <Link1
          image={linkedinLogo}
          sitename="Linkedin"
          to={profile && profile.linkedin}
        />
        <Link1
          image={twitterLogo}
          sitename="Twitter"
          to={profile && profile.twitter}
        />
        <Link1
          image={facebookLogo}
          sitename="Facebook"
          to={profile && profile.facebook}
        />
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div
          className="contact-inputs"
          style={{ maxHeight: getHeight(180, 170) }}
        >
          <div className="contact-details">
            <div className="contact-details-column">
              <Input1
                label="Your name"
                onChange={handleChange("name")}
                placeholder="enter name"
                value={name}
              />
              <Input1
                label="Email title"
                onChange={handleChange("title")}
                placeholder="enter title"
                value={title}
              />
              <Input1
                label="Your email address"
                onChange={handleChange("email")}
                placeholder="enter email"
                value={email}
              />
            </div>
            <div className="contact-details-column">
              <Input1
                label="Your phone number"
                onChange={handleChange("phone")}
                placeholder="enter phone number"
                value={phone}
              />
              <Input1
                label="Your Linkedin"
                onChange={handleChange("linkedin")}
                placeholder="optional"
                value={linkedin}
              />
              <Input1
                label="Your Twitter"
                onChange={handleChange("twitter")}
                placeholder="optional"
                value={twitter}
              />
            </div>
          </div>
          <Input2
            label="Email body"
            onChange={handleChange("text")}
            placeholder="enter email text"
            value={text}
          />
        </div>
        <Button3
          disabled={btnDisabled}
          message={message}
          showMessage={showMessage}
          text={btnText}
        />
      </form>
    </div>
  );

  return <PublicRoute content={content} title="contact" />;
};

export default Contact;
