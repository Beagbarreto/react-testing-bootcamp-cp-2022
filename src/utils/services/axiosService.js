import axios from "axios";

const baseURL = process.env.REACT_APP_NASA_ENDPOINT;
const TEMP_URL = 'https://api.nasa.gov'

const http = axios.create({
  baseURL: TEMP_URL,
});

export default http;
