import React, { Component } from "react"
import Test from "../test/test"
import TestTwo from "../testTwo/testTwo"
import TestThree from "../testThree/testThree"
import axios from "axios"
import {UserConsumer} from "../../contexts/UserContext"

class TestHolder extends Component {

  render() {
    return (
      <UserConsumer>
        {({user}) =>
          <div>
            <Test></Test>
            <TestTwo></TestTwo>
            <TestThree></TestThree>
            here is test holder where our state persists as name {user}
          </div>
        }
      </UserConsumer>
    )
  }
}
export default TestHolder