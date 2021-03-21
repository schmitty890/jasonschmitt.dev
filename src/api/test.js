import axios from "axios"

export const getTestRoute = async () => {
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://jasonschmitt-dev-api-9w29o.ondigitalocean.app"
    // fetch data from a url endpoint
    const response = await axios.get(`${baseURL}/test`)
    console.log(response)
  } catch (error) {
    console.log(error) // catches both errors
  }
}

export const postTestRoute = async data => {
  // console.log(data)
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://jasonschmitt-dev-api-9w29o.ondigitalocean.app"
    // post data to a url endpoint
    const response = await axios.post(`${baseURL}/test`, data)
    console.log(response)
  } catch (error) {
    console.log(error) // catches both errors
  }
}
