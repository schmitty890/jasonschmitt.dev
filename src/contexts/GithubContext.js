import React, { Component } from "react"
import { listGithubRepos } from "../api/github"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class GithubProvider extends Component {
  state = {
    uiRepoLastUpdated: "test",
    apiRepoLastUpdated: null,
  }

  componentDidMount() {
    console.log("ehre")
    // const lastUpdated = listGithubRepos()
    listGithubRepos()
    // console.log(lastUpdated)
  }
  getGithubData = () => {
    this.setState({ uiRepoLastUpdated: "Bob" })
  }

  render() {
    return (
      <Provider
        value={{
          uiRepoLastUpdated: this.state.uiRepoLastUpdated,
          apiRepoLastUpdated: this.state.apiRepoLastUpdated,
          getGithubData: this.getGithubData,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { GithubProvider, Consumer as GithubConsumer }
