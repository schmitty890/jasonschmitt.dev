import React, { Component } from "react"
import { getSchedule } from "../api/hockeyAPI"

import axios from "axios"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class ScheduleProvider extends Component {
  state = {
    schedule: null,
    roster: null,
    viewMoreData: false,
    loading: true,
  }

  componentDidMount() {
    this.getData()
    // this.getGithubData()
    // this.submitNewUser()
    setTimeout(() => {
      this.getDataAgain()
    }, 10000)
  }

  getData = async () => {
    const schedule = await getSchedule()
    console.log(schedule.data)
    // schedule.data.dates[0].games.forEach(arrayItem => {
    //   console.log(arrayItem)
    // })
    setTimeout(() => {
      this.setState({ schedule: schedule.data })
    }, 5000)

    setTimeout(() => {
      this.setState({ loading: false })

      console.log("LOGGING STATE")
      console.log(this.state)
      console.log("LOGGING STATE")
    }, 5000)
  }

  getDataAgain = async () => {
    setInterval(() => {
      console.log("get new data")
      this.getData()
    }, 30000)
  }

  toggleMoreData = value => {
    const isChecked = value.nativeEvent.target.checked
    console.log(isChecked)
    this.setState({ viewMoreData: isChecked })
  }

  render() {
    return (
      <Provider
        value={{
          schedule: this.state.schedule,
          viewMoreData: this.state.viewMoreData,
          loading: this.state.loading,
          toggleMoreData: this.toggleMoreData,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { ScheduleProvider, Consumer as ScheduleConsumer }
