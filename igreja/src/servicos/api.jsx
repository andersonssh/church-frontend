import axios from "axios";

const api = axios.create({
  baseURL: "https://site-igreja-backend-v1.herokuapp.com",
});

export default api;