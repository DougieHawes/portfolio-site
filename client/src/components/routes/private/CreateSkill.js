// import dependencies
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";

// redux
import { postSkillsItem } from "../../../redux/skills/skillsReducer";

// import components
// utils
import { Button1 } from "../../utils/buttons";
import { Input1, Input3 } from "../../utils/inputs";
import { Navlink4 } from "../../utils/links.js";
import PrivateRoute from "../../utils/PrivateRoute.js";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    bulletpoints: "",
    logo: "",
    name: "",
  });

  const { bulletpoints, image, name } = formData;

  const handleChange = (name) => (e) =>
    setFormData({ ...formData, [name]: e.target.value });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postSkillsItem(formData));
  };

  const content = (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-body">
          <Input1 label="Title" onChange={handleChange("name")} value={name} />
          <Input1
            label="Bulletpoints"
            onChange={handleChange("bulletpoints")}
            value={bulletpoints}
          />
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setFormData({ ...formData, logo: base64 })}
          />
        </div>
        <Button1 text="SUBMIT" />
      </form>
      <Navlink4 link="/dashboard" text="&#9756; return to dashboard" />
    </>
  );

  return <PrivateRoute content={content} title="Add Skill" />;
};

export default CreateBlog;
