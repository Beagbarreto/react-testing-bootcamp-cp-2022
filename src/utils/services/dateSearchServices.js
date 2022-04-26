import http from "./axiosService";

const KEY = process.env.REACT_APP_NASA_API_KEY;

const dateSearchServices = async (queryDate) => {
  let res;
  res = await http.get(`planetary/apod?api_key=${KEY}&date=${queryDate}`);
  return res;
};

export default dateSearchServices;
