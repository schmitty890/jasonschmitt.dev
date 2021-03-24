import React, { Component } from "react"
// import { listGithubRepos, test } from "../api/github"
import { getVillagers } from "../api/animalCrossingAPICalls"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class AnimalCrossingVillagersProvider extends Component {
  state = {
    villagers: [],
  }

  componentDidMount() {
    this.getVillagers()
  }

  getVillagers = async () => {
    const villagers = await getVillagers()
    console.log(villagers.data)
    this.setState({ villagers: villagers.data })
  }

  logOutTheState = () => {
    console.log(this.state)
  }

  render() {
    return (
      <Provider
        value={{
          villagers: this.state.villagers,
          logOutTheState: this.logOutTheState,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export {
  AnimalCrossingVillagersProvider,
  Consumer as AnimalCrossingVillagersConsumer,
}
