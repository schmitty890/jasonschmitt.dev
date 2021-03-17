import React, { Component } from "react"
import { Button } from "@chakra-ui/react"
import { UserConsumer } from "../../contexts/UserContext"
import { SecondConsumer } from "../../contexts/SecondContext"
import { get, set } from "../../services/local-storage"
import { getRandomUser } from "../../api/randomUser"
class TestTwo extends Component {
  /**
   * React lifecycle method to fetch the data
   */
  componentDidMount() {
    getRandomUser()
  }

  // here we are passing the "testInsideComponent function from the main page into a component, and using it in this components function"
  testItOut = (e, testInsideComponent) => {
    testInsideComponent()
  }

  logState = (e, logOutTheState, logOutTheStateSecond) => {
    logOutTheState()
    logOutTheStateSecond()
    get()
    set("test name")
  }

  render() {
    // const queryResults = searchQuery === "" ? bookList : searchResults
    return (
      <UserConsumer>
        {({ user, testInsideComponent, logOutTheState }) => (
          <SecondConsumer>
            {({ logOutTheStateSecond }) => (
              <div>
                <div>here is test two {user}</div>
                <Button
                  colorScheme="blue"
                  onClick={e => this.testItOut(e, testInsideComponent)}
                >
                  test btn 2
                </Button>
                <Button
                  colorScheme="blue"
                  onClick={e =>
                    this.logState(e, logOutTheState, logOutTheStateSecond)
                  }
                >
                  log out the current state
                </Button>
              </div>
            )}
          </SecondConsumer>
        )}
      </UserConsumer>
    )
  }
}
export default TestTwo
