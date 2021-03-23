import React, { Component } from "react"
// import { listGithubRepos, test } from "../api/github"
import { getFish } from "../api/animalCrossingAPICalls"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class AnimalCrossingFishProvider extends Component {
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

  logOutTheState = () => {
    console.log(this.state)
  }

  render() {
    return (
      <Provider
        value={{
          fish: this.state.fish,
          logOutTheState: this.logOutTheState,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { AnimalCrossingFishProvider, Consumer as AnimalCrossingFishConsumer }
