import axios from "axios"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

export const getZipCode = async () => {
  console.log("get current zip code from backend")
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://jasonschmitt-dev-api-9w29o.ondigitalocean.app"
    // post data to a url endpoint
    const response = await axios.get(`${baseURL}/getZipCode`)
    console.log(response)
    return response.data[0].zipCode
  } catch (error) {
    console.log(error) // catches both errors
  }
}

export const postZipCode = async zipCode => {
  console.log("post a new zip code to the backend")
  const dataObj = zipCode
  console.log(dataObj)
  console.log("VERIFY DATAOBJ OBJECT HERE")
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://jasonschmitt-dev-api-9w29o.ondigitalocean.app"
    // post data to a url endpoint
    const response = await axios.post(`${baseURL}/postZipCode`, dataObj)
    console.log(response.data)
    return response
  } catch (error) {
    // console.log(error) // catches both errors
  }
}
