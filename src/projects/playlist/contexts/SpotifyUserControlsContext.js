import React, { Component } from "react"
import { updateUserCanEditBoolean, getUserCanEditBoolean } from "../api/spotify"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class SpotifyUserControlsProvider extends Component {
  state = {
    userCanEdit: Boolean,
  }

  componentDidMount() {
    this.getuserCanEditValue()
  }

  getuserCanEditValue = async () => {
    // get value if user can edit from db and set it to the state
    setInterval(async () => {
      const usersCanEdit = await getUserCanEditBoolean()
      console.log(usersCanEdit.data[0].canEdit)

      this.setState({ userCanEdit: usersCanEdit.data[0].canEdit })
    }, 1000)
  }

  toggleUserCanEdit = value => {
    const isChecked = value.nativeEvent.target.checked
    console.log(isChecked)
    this.setState({ userCanEdit: isChecked })
    updateUserCanEditBoolean(isChecked)
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
