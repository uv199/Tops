import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:9999",
});
