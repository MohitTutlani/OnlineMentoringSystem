import axios from "axios";

const check = axios.create({
  baseURL: "http://localhost:5000/api/student",
});

export default check;
