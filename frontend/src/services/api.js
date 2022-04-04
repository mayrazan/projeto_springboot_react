import axios from "axios";

const api = axios.create({
  baseURL: "https://heroes-api-unoesc.herokuapp.com/api/",
});

export default api;