import React, { Component } from "react"
import { test } from "../../../projects/test/api/login"

import axios from "axios"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class LogInProvider extends Component {
  state = {
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
  }

  render() {
    return (
      <Provider
        value={{
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

export { LogInProvider, Consumer as LogInConsumer }
