import React, { Component } from "react"
// import { listGithubRepos, test } from "../api/github"
import { getFish, getSeaCreatures } from "../api/animalCrossingAPICalls"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class AnimalCrossingSeaCreatureProvider extends Component {
  state = {
    seaCreatures: [],
  }

  componentDidMount() {
    this.getSeaCreatures()
  }

  getSeaCreatures = async () => {
    const seaCreatures = await getSeaCreatures()
    console.log(seaCreatures.data)
    this.setState({ seaCreatures: seaCreatures.data })
  }

  logOutTheState = () => {
    console.log(this.state)
  }

  render() {
    return (
      <Provider
        value={{
          // uiRepoLastUpdated: this.state.uiRepoLastUpdated,
          // apiRepoLastUpdated: this.state.apiRepoLastUpdated,
          seaCreatures: this.state.seaCreatures,
          logOutTheState: this.logOutTheState,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export {
  AnimalCrossingSeaCreatureProvider,
  Consumer as AnimalCrossingSeaCreatureConsumer,
}
