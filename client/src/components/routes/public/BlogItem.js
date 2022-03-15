// import dependencies
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// import redux
import { getBlogItem } from "../../../redux/blog/blogReducer";

// import components
// utils
import { Card5 } from "../../utils/cards.js";
import { Navlink2 } from "../../utils/links.js";
import PublicRoute from "../../utils/PublicRoute.js";

// import helpers
import { getHeight } from "../../helpers";

// import media
import loader from "../../../media/loader.svg";

const BlogItem = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  let blogItem = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogItem(id));
  }, []);

  blogItem = blogItem.blog;

  const content = (
    <div
      className="blog-item"
      style={{
        maxHeight: getHeight(60, 100),
      }}
    >
      {blogItem ? (
        <>
          <Navlink2 colour="#d0491e" link="/" text="&#9756; return to blog" />
          <Card5
            createdAt={blogItem.createdAt}
            image={blogItem.image}
            subtitle={blogItem.subtitle}
            tags={blogItem.tags}
            text={blogItem.text}
            title={blogItem.title}
          />
        </>
      ) : (
        <img className="loader" src={loader} alt="" />
      )}
    </div>
  );

  return <PublicRoute content={content} />;
};

export default BlogItem;
