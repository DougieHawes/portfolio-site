// import dependencies
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";

// redux
import { postWorkItem } from "../../../redux/work/workReducer";

// import components
// utils
import { Button1 } from "../../utils/buttons";
import { Input1, Input2, Input3, Input4, Input5 } from "../../utils/inputs";
import { Navlink4 } from "../../utils/links.js";
import PrivateRoute from "../../utils/PrivateRoute.js";

// import helpers
import { getHeight } from "../../helpers";

const CreateWork = () => {
  const [formData, setFormData] = useState({
    category: "",
    codeLink: "",
    image: "",
    logos: [],
    siteLink: "",
    subtitle: "",
    text: "",
    title: "",
  });
  const [state, setState] = useState({
    btnDisabled: false,
  });

  const {
    codeLink,
    category,
    image,
    logos,
    siteLink,
    subtitle,
    text,
    title,
  } = formData;

  useEffect(() => {
    if (
      codeLink === "" ||
      category === "" ||
      image === "" ||
      logos === "" ||
      siteLink === "" ||
      subtitle === "" ||
      text === "" ||
      title === ""
    ) {
      setState({ ...state, btnDisabled: true });
    }
  }, [codeLink, category, image, logos, siteLink, subtitle, text, title]);

  const handleChange = (name) => (e) =>
    setFormData({ ...formData, [name]: e.target.value });

  const handleCheckClick = (i) => {
    let currentArray = logos;

    if (currentArray.includes(i)) {
      const index = currentArray.indexOf(i);

      currentArray.splice(index, 1);
    } else {
      currentArray.push(i);

      setFormData({ ...formData, logos: currentArray });
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postWorkItem(formData));
  };

  const content = (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-body" style={{ maxHeight: getHeight(130, 175) }}>
          <Input1
            label="Title"
            onChange={handleChange("title")}
            value={title}
          />
          <Input1
            label="Subtitle"
            onChange={handleChange("subtitle")}
            value={subtitle}
          />
          <Input5
            defaultValue={category}
            onChange={handleChange("category")}
            options={["site", "app", "game", "misc"]}
            selected={category}
          />
          <Input1
            label="CodeLink"
            onChange={handleChange("codeLink")}
            value={codeLink}
          />
          <Input1
            label="SiteLink"
            onChange={handleChange("siteLink")}
            value={siteLink}
          />
          <Input2 label="Text" onChange={handleChange("text")} value={text} />
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
          />
          <div className="checkboxes">
            <Input4
              onChange={() => {
                handleCheckClick("html");
              }}
              selected={logos.includes("html")}
              text="HTML"
            />
            <Input4
              onChange={() => {
                handleCheckClick("css");
              }}
              selected={logos.includes("css")}
              text="CSS"
            />
            <Input4
              onChange={() => {
                handleCheckClick("sass");
              }}
              selected={logos.includes("sass")}
              text="SCSS"
            />
            <Input4
              onChange={() => {
                handleCheckClick("less");
              }}
              selected={logos.includes("less")}
              text="Less"
            />
            <Input4
              onChange={() => {
                handleCheckClick("bootstrap");
              }}
              selected={logos.includes("bootstrap")}
              text="Bootstrap"
            />
            <Input4
              onChange={() => {
                handleCheckClick("psql");
              }}
              selected={logos.includes("psql")}
              text="PSQL"
            />
            <Input4
              onChange={() => {
                handleCheckClick("mongo");
              }}
              selected={logos.includes("mongo")}
              text="MongoDB"
            />
            <Input4
              onChange={() => {
                handleCheckClick("express");
              }}
              selected={logos.includes("express")}
              text="Express"
            />
            <Input4
              onChange={() => {
                handleCheckClick("react");
              }}
              selected={logos.includes("react")}
              text="React"
            />
            <Input4
              onChange={() => {
                handleCheckClick("react-native");
              }}
              selected={logos.includes("react-native")}
              text="React-Native"
            />
            <Input4
              onChange={() => {
                handleCheckClick("node");
              }}
              selected={logos.includes("node")}
              text="Node"
            />
            <Input4
              onChange={() => {
                handleCheckClick("python");
              }}
              selected={logos.includes("python")}
              text="Python"
            />
            <Input4
              onChange={() => {
                handleCheckClick("redux");
              }}
              selected={logos.includes("redux")}
              text="Redux"
            />
            <Input4
              onChange={() => {
                handleCheckClick("webpack");
              }}
              selected={logos.includes("webpack")}
              text="Webpack"
            />
          </div>
        </div>
        <Button1 text="SUBMIT" />
      </form>
      <Navlink4 link="/dashboard" text="&#9756; return to dashboard" />
    </>
  );

  return <PrivateRoute content={content} />;
};

export default CreateWork;
