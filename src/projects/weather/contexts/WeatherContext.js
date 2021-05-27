import React, { Component } from "react"
import {
  getZipCode,
  postZipCode,
} from "../../../projects/weather/api/weatherAPI"

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

  addZipCode = async () => {
    var zip = document.getElementById("zip").value
    console.log(zip)
    const zipCodeDataObj = { zipCode: zip }
    const newZip = await postZipCode(zipCodeDataObj)
    console.log(newZip)
    if (newZip.status === 200) {
      this.setState({ zipCode: newZip.data.zipCode })
    }
  }

  render() {
    return (
      <Provider
        value={{
          zipCode: this.state.zipCode,
          loading: this.state.loading,
          addZipCode: this.addZipCode,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { WeatherProvider, Consumer as WeatherConsumer }
