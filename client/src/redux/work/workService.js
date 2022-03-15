import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/work`;

// import helpers
import { shuffle } from "../../components/helpers";

const postWorkItem = async (workItemData, token) => {
  const config = {
    headers: {
      authtoken: `${token}`,
    },
  };

  const response = await axios.post(API_URL, workItemData, config);

  return response.data;
};

const getWork = async () => {
  const response = await axios.get(API_URL);

  return shuffle(response.data);
};

const getWorkItem = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);

  return response.data;
};

const workService = { postWorkItem, getWork, getWorkItem };

export default workService;
