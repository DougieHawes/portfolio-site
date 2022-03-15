// import dependencies
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// import redux
import { getBlog } from "../../../redux/blog/blogReducer";

// import components
// utils
import PublicRoute from "../../utils/PublicRoute.js";
import { Card4 } from "../../utils/cards";

// import helpers
import { getHeight } from "../../helpers";

// import media
import loader from "../../../media/loader.svg";

const Blog = () => {
  const dispatch = useDispatch();

  let blog = useSelector((state) => state.blog);
  blog = blog.blog;

  useEffect(() => {
    dispatch(getBlog());
  }, []);

  const content =
    blog.length > 0 ? (
      <div
        className="blog-grid"
        style={{ maxHeight: `${getHeight(70, 100)}px` }}
      >
        {blog.map((i) => (
          <Card4
            createdAt={i.createdAt}
            image={i.image}
            key={i._id}
            link={i._id}
            subtitle={i.subtitle}
            tags={i.tags}
            text={i.text}
            title={i.title}
          />
        ))}
      </div>
    ) : (
      <img className="loader" src={loader} alt="" />
    );

  return <PublicRoute content={content} />;
};

export default Blog;
