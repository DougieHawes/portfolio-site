import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/profile`;

const postProfileItem = async (profileItemData, token) => {
  const config = {
    headers: {
      authtoken: `${token}`,
    },
  };

  const response = await axios.post(API_URL, profileItemData, config);

  return response.data;
};

const getProfile = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const getProfileItem = async (userData) => {};

const profileService = { postProfileItem, getProfile, getProfileItem };

export default profileService;
