import GitHub from "github-api"
import axios from "axios"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

export const test = async () => {
  const dataObj = {
    data: "test",
  }
  return dataObj
}

export const signUp = async newUser => {
  console.log("sign up")
  console.log(newUser)
  let baseURL =
    window.location.hostname === "localhost"
      ? "http://localhost:8081"
      : "https://jasonschmitt-dev-api-9w29o.ondigitalocean.app"

  // const dataObj = {
  //   firstName: this.state.firstName,
  //   email: this.state.email,
  //   password: this.state.password,
  // }
  axios
    .post(`${baseURL}/trackMe/auth/register`, newUser)
    .then(function (response) {
      console.log(response)
      localStorage.setItem("token", response.data.token)
      console.log(typeof response.data._id)
      localStorage.setItem("_id", response.data._id)
      console.log("setExpirationInLocalStorage")
      var expiration = Date.now()
      var oneMinuteInMilliseconds = 60000
      // console.log(expiration + oneMinuteInMilliseconds);
      // console.log(expiration);
      expiration = expiration + oneMinuteInMilliseconds
      localStorage.setItem("expire", expiration)
      console.log("redirect to /dashboard")
      // window.location.href = '/dashboard'
    })
    .catch(function (error) {
      console.log(error)
    })
}
