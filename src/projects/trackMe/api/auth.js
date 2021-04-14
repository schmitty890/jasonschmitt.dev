import axios from "axios"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

export const test = async () => {
  const dataObj = {
    data: "auth test",
  }
  return dataObj
}

export const redirectToHome = () => {
  console.log("redirect to home")
  window.location.href = "/projects"
}

export const checkLoggedInStatus = async () => {
  const isAuthenticated = localStorage.getItem("token")
  if (isAuthenticated) {
    // this.setState({ isLoggedIn: true })
    const token = localStorage.getItem("token")
    const user_id = localStorage.getItem("_id")

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `JWT ${token}`,
    }

    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://jasonschmitt-dev-api-9w29o.ondigitalocean.app"

    try {
      const resp = await axios.get(`${baseURL}/hockey/user/${user_id}`, {
        headers: headers,
      })
      console.log(resp.data)
      return resp.data
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }

    // await axios
    //   .get(`${baseURL}/user/${user_id}`, {
    //     headers: headers,
    //   })
    //   .then(response => {
    //     console.log(response.data)
    //     // this.setState({ user: response.data })
    //     return response.data
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //     return error
    //   })
  }
}
