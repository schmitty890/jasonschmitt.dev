import React, { Component } from "react"
import { test, checkLoggedInStatus } from "../../../projects/test/api/auth"

import axios from "axios"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class AuthProvider extends Component {
  state = {
    email: "",
    password: "",
    authTest: "ourTextExample",
    user: null,
    // displayPage: "none",
  }

  componentDidMount() {
    this.getData()
    // this.getGithubData()
    // this.submitNewUser()
    this.isUserLoggedIn()
  }

  getData = async () => {
    const testHere = await test()
    console.log(testHere)
    this.setState({ authTest: testHere.data })
  }

  isUserLoggedIn = async () => {
    const user = await checkLoggedInStatus()
    console.log(user)
    this.setState({ user: user })
    console.log(this.state)
    // var checkURL = ["/projects/test/login/"]

    // if (this.state.user) {
    //   for (var i = 0; i < checkURL.length; i++) {
    //     if (window.location.href.indexOf(checkURL[i]) > -1) {
    //       console.log("your url contains the string " + checkURL[i])
    //       window.location.href = "/projects/test"
    //     }
    //   }
    // } else {
    //   this.setState({ displayPage: "block" })
    // }
  }

  render() {
    return (
      <Provider
        value={{
          email: this.state.email,
          password: this.state.password,
          authTest: this.state.authTest,
          user: this.state.user,
          // displayPage: this.state.displayPage,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { AuthProvider, Consumer as AuthConsumer }
