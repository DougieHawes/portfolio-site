// import dependencies
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// import components
// layout
import Header from "./components/layout/Header.js";
import Landing from "./components/layout/Landing.js";
// auth
import SignIn from "./components/routes/auth/SignIn.js";
// public
import About from "./components/routes/public/About.js";
import Blog from "./components/routes/public/Blog.js";
import Contact from "./components/routes/public/Contact.js";
import Skills from "./components/routes/public/Skills.js";
import Work from "./components/routes/public/Work.js";
import BlogItem from "./components/routes/public/BlogItem.js";
import WorkItem from "./components/routes/public/WorkItem.js";
// Private
import CreateBlog from "./components/routes/private/CreateBlog.js";
import CreateSkill from "./components/routes/private/CreateSkill.js";
import CreateWork from "./components/routes/private/CreateWork.js";
import Dashboard from "./components/routes/private/Dashboard.js";
import UpdateProfile from "./components/routes/private/UpdateProfile.js";

// import styles
import "./style.min.css";

const App = () => {
  const [landing, showLanding] = useState(true);
  const [fadeOut, triggerFadeOut] = useState(false);

  return (
    <div className="app">
      {landing ? (
        <Landing
          onClick={() => {
            triggerFadeOut(true);
            setTimeout(() => {
              showLanding(false);
            }, 400);
          }}
          slideOut={fadeOut}
        />
      ) : (
        <>
          <Routes>
            {/* auth routes */}
            <Route exact path="/secret" element={<SignIn />} />
            {/* public routes */}
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/" element={<Work />} />
            {/* individual item routes */}
            <Route path="/blog/:id" element={<BlogItem />} />
            <Route path="/work/:id" element={<WorkItem />} />
            {/* auth routes */}
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/newblog" element={<CreateBlog />} />
            <Route exact path="/newskill" element={<CreateSkill />} />
            <Route exact path="/newwork" element={<CreateWork />} />
            <Route exact path="/updateprofile" element={<UpdateProfile />} />
          </Routes>
          <Header />
        </>
      )}
    </div>
  );
};

export default App;
