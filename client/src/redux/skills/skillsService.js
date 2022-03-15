import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/skills`;

// import helpers
import { shuffle } from "../../components/helpers";

const postSkillsItem = async (skillsItemData, token) => {
  const config = {
    headers: {
      authtoken: `${token}`,
    },
  };

  const response = await axios.post(API_URL, skillsItemData, config);

  return response.data;
};

const getSkills = async () => {
  const response = await axios.get(API_URL);

  return shuffle(response.data);
};

const getSkillsItem = async (userData) => {};

const skillsService = { postSkillsItem, getSkills, getSkillsItem };

export default skillsService;
