import Fade from "react-reveal/Fade";

// import helpers
import { capitalise } from "../helpers";

import "./style.min.css";

const PublicRoute = ({ content, title }) => {
  return (
    <Fade>
      <div className="route">
        <h3 className="route-title">{title ? capitalise(title) : null}</h3>
        <div className="route-content">{content}</div>
      </div>
    </Fade>
  );
};

export default PublicRoute;
