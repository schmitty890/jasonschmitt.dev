import React, { Component } from "react"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class SpotifyUserControlsProvider extends Component {
  state = {
    userCanEdit: true,
  }

  toggleUserCanEdit = value => {
    const isChecked = value.nativeEvent.target.checked
    console.log(isChecked)
    this.setState({ userCanEdit: isChecked })
  }

  render() {
    return (
      <Provider
        value={{
          toggleUserCanEdit: this.toggleUserCanEdit,
          userCanEdit: this.state.userCanEdit,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { SpotifyUserControlsProvider, Consumer as SpotifyUserControlsConsumer }
