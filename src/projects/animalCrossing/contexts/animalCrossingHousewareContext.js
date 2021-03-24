import React, { Component } from "react"
// import { listGithubRepos, test } from "../api/github"
import { getHouseware } from "../api/animalCrossingAPICalls"
import { get, set } from "../services/localStorage"
import housewareJSONData from "../data/houseware.json"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class AnimalCrossingHousewareProvider extends Component {
  state = {
    houseware: [],
  }

  componentDidMount() {
    // check if storage is there, if not, fetch data
    // const housewareLocalStorage = get("houseware")
    // console.log(housewareLocalStorage == undefined)
    // if (housewareLocalStorage == undefined) {
    this.getHouseware()
    // } else {
    // this.setState({ houseware: housewareLocalStorage })
    // }
  }

  getHouseware = async () => {
    const houseware = await getHouseware()
    // console.log(houseware.data)
    const flattenData = houseware.data.flat(1)

    this.setState({ houseware: flattenData })
    // set("houseware", flattenData)
  }

  logOutTheState = () => {
    console.log(this.state)
  }

  render() {
    return (
      <Provider
        value={{
          houseware: this.state.houseware,
          logOutTheState: this.logOutTheState,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export {
  AnimalCrossingHousewareProvider,
  Consumer as AnimalCrossingHousewareConsumer,
}
