// import dependencies
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// import redux
import { getWorkItem } from "../../../redux/work/workReducer";

// import components
// utils
import { Card3 } from "../../utils/cards.js";
import { Navlink2 } from "../../utils/links.js";
import PublicRoute from "../../utils/PublicRoute.js";

// import helpers
import { getHeight } from "../../helpers";

// import media
import loader from "../../../media/loader.svg";

const WorkItem = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  let workItem = useSelector((state) => state.work);

  useEffect(() => {
    dispatch(getWorkItem(id));
  }, []);

  workItem = workItem.work;

  const content = (
    <div className="work-item">
      {workItem ? (
        <>
          <Navlink2
            colour="#d0491e"
            link="/"
            text="&#9756; return to all work"
          />
          <Card3
            codeLink={workItem.codeLink}
            image={workItem.image}
            logos={workItem.logos}
            siteLink={workItem.siteLink}
            subtitle={workItem.subtitle}
            text={workItem.text}
            title={workItem.title}
          />
        </>
      ) : (
        <img className="loader" src={loader} alt="" />
      )}
    </div>
  );

  return <PublicRoute content={content} />;
};

export default WorkItem;
