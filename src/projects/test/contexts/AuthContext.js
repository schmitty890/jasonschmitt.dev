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
    loading: true,
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
    this.setState({ user: user, loading: false })
    console.log(this.state)
  }

  render() {
    return (
      <Provider
        value={{
          email: this.state.email,
          password: this.state.password,
          authTest: this.state.authTest,
          user: this.state.user,
          loading: this.state.loading,
          // displayPage: this.state.displayPage,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { AuthProvider, Consumer as AuthConsumer }
