const axios = require("axios");

const handler = async (event) => {
  const UNSPLASH_API_SECRET = process.env.UNSPLASH_API_SECRET
  const url = `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API_SECRET}&orientation=landscape&query=nature,landscape`
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