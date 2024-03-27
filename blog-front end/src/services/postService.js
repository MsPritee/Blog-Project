import axios from "axios";

const baseUrl = "http://localhost:5000/api/posts/";

export const getPosts = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Show error
  }
};

export const createPost = async (newPost) => {
  try {
    const response = await axios.post(`${baseUrl}add`, newPost);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Show error
  }
};

export const updatePost = async (updatedPost) => {
  const { _id, ...data } = updatedPost;

  try {
    const response = await axios.put(`${baseUrl}${_id}`, data);
    console.log("Update post response:", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
