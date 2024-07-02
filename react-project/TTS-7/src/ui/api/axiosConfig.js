// const axios = require("axios") //
import axios from "axios"; // es6

export let APIinstance = axios.create({
  baseURL: "http://localhost:9999",
});
