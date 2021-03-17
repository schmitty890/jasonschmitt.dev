import React, { Component } from "react"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class UserProvider extends Component {
  state = {
    currentUser: "Jason",
    toggleCheck: false,
    selectOption: null,
    radioOption: null,
  }

  changeCurrentUser = () => {
    this.setState({ currentUser: "Bob" })
  }

  getSwitchValue = e => {
    const isChecked = e.nativeEvent.target.checked
    this.setState({ toggleCheck: isChecked })
  }

  selectChange = e => {
    // console.log(e)
    const option = e.nativeEvent.target.value
    this.setState({ selectOption: option })
  }

  radioChange = e => {
    console.log(e)
    // const option = e.nativeEvent.target.value
    this.setState({ radioOption: e })
  }

  testInsideComponent = () => {
    console.log("using within func in component")
  }

  logOutTheState = () => {
    console.log(this.state)
  }

  render() {
    return (
      <Provider
        value={{
          user: this.state.currentUser,
          changeCurrentUser: this.changeCurrentUser,
          testInsideComponent: this.testInsideComponent,
          logOutTheState: this.logOutTheState,
          toggleCheck: this.getSwitchValue,
          selectChange: this.selectChange,
          radioChange: this.radioChange,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { UserProvider, Consumer as UserConsumer }
