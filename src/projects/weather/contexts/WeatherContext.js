import React, { Component } from "react"
import { getZipCode } from "../../../projects/weather/api/weatherAPI"

import axios from "axios"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class WeatherProvider extends Component {
  state = {
    zipCode: "27606",
    loading: true,
  }

  componentDidMount() {
    this.getData()
    // this.getGithubData()
    // this.submitNewUser()
  }

  getData = async () => {
    const currentZip = await getZipCode()
    console.log(currentZip)
    if (currentZip) {
      this.setState({ zipCode: currentZip })
    }
    this.setState({ loading: false })
  }

  render() {
    return (
      <Provider
        value={{
          zipCode: this.state.zipCode,
          loading: this.state.loading,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { WeatherProvider, Consumer as WeatherConsumer }
