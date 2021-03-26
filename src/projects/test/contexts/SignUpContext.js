import React, { Component } from "react"
import { test } from "../../../projects/test/api/signup"

import axios from "axios"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class SignUpProvider extends Component {
  state = {
    firstName: "",
    email: "",
    password: "",
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
    console.log("new user submitted")
  }

  render() {
    return (
      <Provider
        value={{
          firstName: this.state.firstName,
          email: this.state.email,
          password: this.state.password,
          test: this.state.test,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { SignUpProvider, Consumer as SignUpConsumer }
