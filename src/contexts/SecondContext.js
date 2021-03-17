import React, { Component } from "react"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class SecondProvider extends Component {
  state = {
    anotherValue: "Test value",
  }

  logOutTheStateSecond = () => {
    console.log(this.state)
  }

  render() {
    return (
      <Provider
        value={{
          anotherValue: this.state.anotherValue,
          logOutTheStateSecond: this.logOutTheStateSecond,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { SecondProvider, Consumer as SecondConsumer }
