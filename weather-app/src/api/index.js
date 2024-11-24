const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=14aa8a7f95ff4a35a63185016242411&q=London&aqi=no";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};