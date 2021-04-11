import React, { Component } from "react"
import { getSchedule } from "../api/hockeyAPI"

import axios from "axios"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class ScheduleProvider extends Component {
  state = {
    schedule: null,
    viewMoreData: false,
    loading: true,
  }

  componentDidMount() {
    this.getData()
    // this.getGithubData()
    // this.submitNewUser()
    this.getDataAgain()
  }

  getData = async () => {
    const schedule = await getSchedule()
    console.log(schedule.data)
    // schedule.data.dates[0].games.forEach(arrayItem => {
    //   console.log(arrayItem)
    // })
    this.setState({ schedule: schedule.data })

    setTimeout(() => {
      this.setState({ loading: false })
      console.log(this.state)
    }, 500)
  }

  getDataAgain = async () => {
    setInterval(() => {
      console.log("get new data")
      this.setState({ loading: true })
      this.getData()
    }, 60000)
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
