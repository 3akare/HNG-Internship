const axios = require("axios");
const { IPinfoWrapper } = require("node-ipinfo");

const getCityFromIP = async (ipAddress) => {
  const ipInfoWrapper = new IPinfoWrapper(process.env.IP_INFO_TOKEN);
  const res = await ipInfoWrapper.lookupIp(ipAddress);
  return res.region;
};

const getTemperatureFromCity = async (city) => {
  const URL = "https://api.weatherapi.com/v1/current.json";
  const res = await axios.get(URL, {
    params: { key: process.env.WEATHER_API_KEY, q: city },
  });
  return res;
};

module.exports = { getCityFromIP, getTemperatureFromCity };
