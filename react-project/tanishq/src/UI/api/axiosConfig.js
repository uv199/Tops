import axios from "axios";

export const APIinstance = axios.create({
  baseURL: "http://localhost:9999",
});
