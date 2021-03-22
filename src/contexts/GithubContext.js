import React, { Component } from "react"
import { listGithubRepos, test } from "../api/github"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class GithubProvider extends Component {
  state = {
    uiRepoLastUpdated: "a day ago",
    apiRepoLastUpdated: "a day ago",
    test: "ourTextExample",
  }

  componentDidMount() {
    this.getData()
    this.getGithubData()
  }

  getData = async () => {
    const testHere = await test()
    console.log(testHere)
    this.setState({ test: testHere.data })
  }

  getGithubData = async () => {
    const githubData = await listGithubRepos()

    let URLsForPorfolioUiAndAPI = ["jasonschmitt.dev", "jasonschmitt.dev-api"]

    const dataObj = {
      uiRepoLastUpdated: "",
      apiRepoLastUpdated: "",
    }
    if (githubData != undefined) {
      githubData.data.forEach(arrayItem => {
        if (arrayItem.name == URLsForPorfolioUiAndAPI[0]) {
          dataObj.uiRepoLastUpdated = dayjs(arrayItem.updated_at).fromNow()
        } else if (arrayItem.name == URLsForPorfolioUiAndAPI[1]) {
          dataObj.apiRepoLastUpdated = dayjs(arrayItem.updated_at).fromNow()
        }
      })
      console.log(dataObj)
      this.setState({ uiRepoLastUpdated: dataObj.uiRepoLastUpdated })
      this.setState({ apiRepoLastUpdated: dataObj.apiRepoLastUpdated })
    }

    // console.log(githubData)
  }

  render() {
    return (
      <Provider
        value={{
          uiRepoLastUpdated: this.state.uiRepoLastUpdated,
          apiRepoLastUpdated: this.state.apiRepoLastUpdated,
          test: this.state.test,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { GithubProvider, Consumer as GithubConsumer }
