// import dependencies
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";

// import helpers
import { capitalise } from "../helpers";

import "./style.min.css";

const PrivateRoute = ({ content, title }) => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Fade>
      <div className="route">
        <h3 className="route-title private-title">
          {title ? capitalise(title) : null}
        </h3>
        <div className="route-content private-content">{content}</div>
      </div>
    </Fade>
  );
};

export default PrivateRoute;
