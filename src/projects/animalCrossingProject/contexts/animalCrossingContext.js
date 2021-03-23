import React, { Component } from "react"
// import { listGithubRepos, test } from "../api/github"
import { getFish } from "../api/animalCrossingAPICalls"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class AnimalCrossingProvider extends Component {
  state = {
    fish: [],
  }

  componentDidMount() {
    this.getFish()
  }

  getFish = async () => {
    const fish = await getFish()
    console.log(fish.data)
    this.setState({ fish: fish.data })
  }

  render() {
    return (
      <Provider
        value={{
          // uiRepoLastUpdated: this.state.uiRepoLastUpdated,
          // apiRepoLastUpdated: this.state.apiRepoLastUpdated,
          fish: this.state.fish,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { AnimalCrossingProvider, Consumer as AnimalCrossingConsumer }
