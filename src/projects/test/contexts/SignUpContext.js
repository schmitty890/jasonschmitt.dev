import React, { Component } from "react"
import { test } from "../../../projects/test/api/signup"

import axios from "axios"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class SignUpProvider extends Component {
  state = {
    uiRepoLastUpdated: "a day ago",
    apiRepoLastUpdated: "a day ago",
    test: "ourTextExample",
  }

  componentDidMount() {
    this.getData()
    // this.getGithubData()
    // this.submitNewUser()
  }

  getData = async () => {
    const testHere = await test()
    console.log(testHere)
    this.setState({ test: testHere.data })
    this.submitNewUser()
    console.log("new user submitted")
  }

  submitNewUser = async () => {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://jasonschmitt-dev-api-9w29o.ondigitalocean.app/"

    const dataObj = {
      firstName: "Jason",
      email: "test@gmail.com",
      password: "mypassword",
    }
    axios
      .post(`${baseURL}/auth/register`, dataObj)
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

  // getGithubData = async () => {
  //   const githubData = await listGithubRepos()

  //   let URLsForPorfolioUiAndAPI = ["jasonschmitt.dev", "jasonschmitt.dev-api"]

  //   const dataObj = {
  //     uiRepoLastUpdated: "",
  //     apiRepoLastUpdated: "",
  //   }
  //   if (githubData != undefined) {
  //     githubData.data.forEach(arrayItem => {
  //       if (arrayItem.name == URLsForPorfolioUiAndAPI[0]) {
  //         dataObj.uiRepoLastUpdated = dayjs(arrayItem.updated_at).fromNow()
  //       } else if (arrayItem.name == URLsForPorfolioUiAndAPI[1]) {
  //         dataObj.apiRepoLastUpdated = dayjs(arrayItem.updated_at).fromNow()
  //       }
  //     })
  //     console.log(dataObj)
  //     this.setState({ uiRepoLastUpdated: dataObj.uiRepoLastUpdated })
  //     this.setState({ apiRepoLastUpdated: dataObj.apiRepoLastUpdated })
  //   }

  //   // console.log(githubData)
  // }

  render() {
    return (
      <Provider
        value={{
          test: this.state.test,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { SignUpProvider, Consumer as SignUpConsumer }
