import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/blog`;

const postBlogItem = async (blogItemData, token) => {
  const config = {
    headers: {
      authtoken: `${token}`,
    },
  };

  const response = await axios.post(API_URL, blogItemData, config);

  return response.data;
};

const getBlog = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const getBlogItem = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);

  return response.data;
};

const blogService = { postBlogItem, getBlog, getBlogItem };

export default blogService;
