import axios from "axios";

const apiUrl = "http://localhost:5000/api/";

export const singleFileUpload = async (data, options) => {
  try {
    await axios.post(apiUrl + "fileUpload", data, options);
  } catch (error) {
    throw error;
  }
};
export const getSingleFiles = async () => {
  try {
    const { data } = await axios.get(apiUrl + "fileUpload");
    return data;
  } catch (error) {
    throw error;
  }
};
