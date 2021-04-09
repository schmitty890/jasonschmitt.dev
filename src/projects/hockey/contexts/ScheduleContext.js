import React, { Component } from "react"
import { getSchedule } from "../api/hockeyAPI"

import axios from "axios"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class ScheduleProvider extends Component {
  state = {
    schedule: null,
    loading: true,
  }

  componentDidMount() {
    this.getData()
    // this.getGithubData()
    // this.submitNewUser()
  }

  getData = async () => {
    const schedule = await getSchedule()
    console.log(schedule.data)
    // schedule.data.dates[0].games.forEach(arrayItem => {
    //   console.log(arrayItem)
    // })
    this.setState({ schedule: schedule.data })
    this.setState({ loading: false })
    setTimeout(() => {
      console.log(this.state)
    }, 3000)
  }

  render() {
    return (
      <Provider
        value={{
          schedule: this.state.schedule,
          loading: this.state.loading,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { ScheduleProvider, Consumer as ScheduleConsumer }
