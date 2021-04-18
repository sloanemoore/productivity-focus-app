const axios = require("axios");

const handler = async (event) => {
  const {weatherCity, weatherState}  = event.queryStringParameters
  const OPENWEATHER_API_SECRET = process.env.OPENWEATHER_API_SECRET;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${weatherCity},${weatherState},us&units=imperial&appid=${OPENWEATHER_API_SECRET}`
  try {
    const {data} = await axios.get(url)
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
  
  module.exports = { handler }