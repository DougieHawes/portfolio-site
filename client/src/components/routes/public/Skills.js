// import dependencies
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// import redux
import { getSkills } from "../../../redux/skills/skillsReducer";

// import components
// utils
import PublicRoute from "../../utils/PublicRoute.js";
import { Card2 } from "../../utils/cards.js";

// import helpers
import { getBulletPoints, getHeight, shuffle } from "../../helpers";

// import media
import loader from "../../../media/loader.svg";

const Skills = () => {
  const dispatch = useDispatch();

  const skills = useSelector((state) => state.skills);

  useEffect(() => {
    dispatch(getSkills());
  }, []);

  const shuffledItems = skills.skills;

  const content =
    shuffledItems.length > 0 ? (
      <div
        className="skills-grid"
        style={{
          maxHeight: getHeight(55, 100),
          minHeight: getHeight(55, 100),
        }}
      >
        {shuffledItems.map((i) => (
          <Card2
            bulletPoints={getBulletPoints(i.bulletpoints)}
            key={i._id}
            logo={i.logo}
            name={i.name}
          />
        ))}
      </div>
    ) : (
      <img className="loader" src={loader} alt="" />
    );

  return <PublicRoute content={content} />;
};

export default Skills;
