import React, { Component } from "react"
// import { listGithubRepos, test } from "../api/github"
import { getArt } from "../api/animalCrossingAPICalls"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class AnimalCrossingArtProvider extends Component {
  state = {
    art: [],
  }

  componentDidMount() {
    this.getArt()
  }

  getArt = async () => {
    const art = await getArt()
    console.log(art.data)
    this.setState({ art: art.data })
  }

  logOutTheState = () => {
    console.log(this.state)
  }

  render() {
    return (
      <Provider
        value={{
          art: this.state.art,
          logOutTheState: this.logOutTheState,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { AnimalCrossingArtProvider, Consumer as AnimalCrossingArtConsumer }
