import http from "../services/axiosService";

const KEY = process.env.REACT_APP_NASA_API_KEY;
const TEMPORATY_KEY= 'z02Vg0igPVZgPx922AstvJzabTD4ol5nIaSXw7TA';

const dateSearch = async (queryDate) => {
  let res;
  res = await http.get(`planetary/apod?api_key=${TEMPORATY_KEY}&date=${queryDate}`);
  return res;
};

export default dateSearch;
