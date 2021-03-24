import React, { Component } from "react"
// import { listGithubRepos, test } from "../api/github"
import { getFossils } from "../api/animalCrossingAPICalls"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class AnimalCrossingFossilProvider extends Component {
  state = {
    fossils: [],
  }

  componentDidMount() {
    this.getFossils()
  }

  getFossils = async () => {
    const fossils = await getFossils()
    console.log(fossils.data)
    this.setState({ fossils: fossils.data })
  }

  logOutTheState = () => {
    console.log(this.state)
  }

  render() {
    return (
      <Provider
        value={{
          fossils: this.state.fossils,
          logOutTheState: this.logOutTheState,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export {
  AnimalCrossingFossilProvider,
  Consumer as AnimalCrossingFossilConsumer,
}
