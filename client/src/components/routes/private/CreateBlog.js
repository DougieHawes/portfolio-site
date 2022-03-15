// import dependencies
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";

// redux
import { postBlogItem } from "../../../redux/blog/blogReducer";

// import components
// utils
import { Button1 } from "../../utils/buttons";
import { Input1, Input2, Input3 } from "../../utils/inputs";
import { Navlink4 } from "../../utils/links";
import PrivateRoute from "../../utils/PrivateRoute";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    text: "",
    image: "",
    subtitle: "",
    tags: "",
    title: "",
  });

  const { image, subtitle, tags, text, title } = formData;

  const handleChange = (name) => (e) =>
    setFormData({ ...formData, [name]: e.target.value });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postBlogItem(formData));
  };

  const content = (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-body">
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
          <Input2 label="Body" onChange={handleChange("text")} value={text} />
          <Input1 label="Tags" onChange={handleChange("tags")} value={tags} />
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
          />
        </div>
        <Button1 text="SUBMIT" />
      </form>
      <Navlink4 link="/dashboard" text="&#9756; return to dashboard" />
    </>
  );

  return <PrivateRoute content={content} />;
};

export default CreateBlog;
