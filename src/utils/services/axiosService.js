import axios from "axios";

const baseURL = process.env.REACT_APP_NASA_ENDPOINT;

const http = axios.create({
  baseURL: baseURL,
});

export default http;
