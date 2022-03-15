// import dependencies
import axios from "axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

// import redux
import { getWork } from "../../../redux/work/workReducer";

// import helpers
import { getHeight, shuffle } from "../../helpers";

// import components
// utils
import PublicRoute from "../../utils/PublicRoute.js";
import { Card1 } from "../../utils/cards.js";

// import media
import loader from "../../../media/loader.svg";

// import styles
import "./style.min.css";

const Work = () => {
  const dispatch = useDispatch();

  const work = useSelector((state) => state.work);

  useEffect(() => {
    dispatch(getWork());
  }, []);

  const shuffledWork = work.work;
  // const shuffledWork = shuffle(work.work);

  // select functionality
  const [state, setState] = useState({
    sitesActive: true,
    appsActive: true,
    gamesActive: true,
    miscActive: true,
  });

  const { sitesActive, appsActive, gamesActive, miscActive } = state;

  const sitesClick = () => {
    if (sitesActive && (appsActive || gamesActive || miscActive)) {
      setState({
        sitesActive: true,
        appsActive: false,
        gamesActive: false,
        miscActive: false,
      });
    } else if (sitesActive && !appsActive && !gamesActive && !miscActive) {
      setState({
        sitesActive: true,
        appsActive: true,
        gamesActive: true,
        miscActive: true,
      });
    } else {
      setState({ ...state, sitesActive: true });
    }
  };
  const appsClick = () => {
    if (appsActive && (sitesActive || gamesActive || miscActive)) {
      setState({
        sitesActive: false,
        appsActive: true,
        gamesActive: false,
        miscActive: false,
      });
    } else if (!sitesActive && appsActive && !gamesActive && !miscActive) {
      setState({
        sitesActive: true,
        appsActive: true,
        gamesActive: true,
        miscActive: true,
      });
    } else {
      setState({ ...state, appsActive: true });
    }
  };
  const gamesClick = () => {
    if (gamesActive && (sitesActive || appsActive || miscActive)) {
      setState({
        sitesActive: false,
        appsActive: false,
        gamesActive: true,
        miscActive: false,
      });
    } else if (!sitesActive && !appsActive && gamesActive && !miscActive) {
      setState({
        sitesActive: true,
        appsActive: true,
        gamesActive: true,
        miscActive: true,
      });
    } else {
      setState({ ...state, gamesActive: true });
    }
  };
  const miscClick = () => {
    if (miscActive && (sitesActive || appsActive || gamesActive)) {
      setState({
        sitesActive: false,
        appsActive: false,
        gamesActive: false,
        miscActive: true,
      });
    } else if (!sitesActive && !appsActive && !gamesActive && miscActive) {
      setState({
        sitesActive: true,
        appsActive: true,
        gamesActive: true,
        miscActive: true,
      });
    } else {
      setState({ ...state, miscActive: true });
    }
  };

  const selectedWork = [];
  let selectedArray = [
    sitesActive ? "site" : null,
    appsActive ? "app" : null,
    gamesActive ? "game" : null,
    miscActive ? "misc" : null,
  ];

  const selectWork = () => {
    for (var i = 0; i < shuffledWork.length; i++) {
      for (var j = 0; j < selectedArray.length; j++) {
        if (shuffledWork[i].category === selectedArray[j]) {
          selectedWork.push(shuffledWork[i]);
        }
      }
    }
  };

  selectWork();

  const content = (
    <>
      <div className="work-options">
        <div
          className={`work-option ${sitesActive && "work-option-active"}`}
          onClick={sitesClick}
        >
          SITES
        </div>
        <div
          className={`work-option ${appsActive && "work-option-active"}`}
          onClick={appsClick}
        >
          APPS
        </div>
        <div
          className={`work-option ${gamesActive && "work-option-active"}`}
          onClick={gamesClick}
        >
          GAMES
        </div>
        <div
          className={`work-option ${miscActive && "work-option-active"}`}
          onClick={miscClick}
        >
          MISC
        </div>
      </div>
      <motion.div
        layout
        className="work-grid"
        style={{
          maxHeight: getHeight(70, 150),
          minHeight: getHeight(70, 150),
        }}
      >
        <AnimatePresence>
          {selectedWork.map((i) => (
            <Card1
              id={i._id}
              key={i._id}
              category={i.category}
              image={i.image}
              title={i.title}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );

  return <PublicRoute content={content} />;
};

export default Work;
