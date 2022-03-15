// import dependencies
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";

// redux
import { postProfileItem } from "../../../redux/profile/profileReducer";

// import components
// utils
import { Button1 } from "../../utils/buttons";
import { Input1, Input2, Input3 } from "../../utils/inputs";
import { Navlink4 } from "../../utils/links.js";
import PrivateRoute from "../../utils/PrivateRoute.js";

// import helpers
import { getHeight } from "../../helpers";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    avatar: "",
    bio: "",
    email: "",
    location: "",
    name: "",
    phone: "",
    linkedin: "",
    github: "",
    youtube: "",
    codepen: "",
    twitter: "",
    facebook: "",
  });
  const [state, setState] = useState({
    btnDisabled: false,
  });

  const {
    avatar,
    bio,
    email,
    location,
    name,
    phone,
    linkedin,
    github,
    youtube,
    codepen,
    twitter,
    facebook,
  } = formData;
  const { btnDisabled } = state;

  useEffect(() => {
    if (
      avatar === "" ||
      bio === "" ||
      email === "" ||
      location === "" ||
      name === "" ||
      phone === "" ||
      linkedin === "" ||
      github === "" ||
      youtube === "" ||
      codepen === "" ||
      twitter === "" ||
      facebook === ""
    ) {
      setState({ ...state, btnDisabled: true });
    } else {
      setState({ ...state, btnDisabled: false });
    }
  }, [
    avatar,
    bio,
    email,
    location,
    name,
    phone,
    linkedin,
    github,
    youtube,
    codepen,
    twitter,
    facebook,
  ]);

  const handleChange = (name) => (e) =>
    setFormData({ ...formData, [name]: e.target.value });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postProfileItem(formData));
  };

  const content = (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div
          className="form-body"
          style={{ maxHeight: `${getHeight(130, 165)}px` }}
        >
          <div className="profile-inputs">
            <div className="profile-details">
              <div>
                <Input1
                  label="Name"
                  onChange={handleChange("name")}
                  value={name}
                />
              </div>
              <div>
                <Input1
                  label="Location"
                  onChange={handleChange("location")}
                  value={location}
                />
              </div>
            </div>
            <div className="profile-details">
              <div>
                <Input1
                  label="Email"
                  onChange={handleChange("email")}
                  value={email}
                />
              </div>
              <div>
                <Input1
                  label="Phone"
                  onChange={handleChange("phone")}
                  value={phone}
                />
              </div>
            </div>
          </div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setFormData({ ...formData, avatar: base64 })
            }
          />
          <Input2 label="Bio" onChange={handleChange("bio")} value={bio} />
          <div className="profile-inputs">
            <div className="profile-details">
              <div>
                <Input1
                  label="Linkedin"
                  onChange={handleChange("linkedin")}
                  value={linkedin}
                />
              </div>
              <div>
                <Input1
                  label="GitHub"
                  onChange={handleChange("github")}
                  value={github}
                />
              </div>
              <div>
                <Input1
                  label="YouTube"
                  onChange={handleChange("youtube")}
                  value={youtube}
                />
              </div>
              <div>
                <Input1
                  label="Codepen"
                  onChange={handleChange("codepen")}
                  value={codepen}
                />
              </div>
              <div>
                <Input1
                  label="Twitter"
                  onChange={handleChange("twitter")}
                  value={twitter}
                />
              </div>
              <div>
                <Input1
                  label="Facebook"
                  onChange={handleChange("facebook")}
                  value={facebook}
                />
              </div>
            </div>
          </div>
        </div>
        <Button1 disabled={btnDisabled} text="SUBMIT" />
      </form>
      <Navlink4 link="/dashboard" text="&#9756; return to dashboard" />
    </>
  );

  return <PrivateRoute content={content} />;
};

export default CreateBlog;
