import React, { Component } from "react"
import { GridItem, Text } from "@chakra-ui/react"
import { listGithubRepos, test } from "../../api/github"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

// const About = () => {
class About extends Component {
  state = {
    uiRepoLastUpdated: null,
    apiRepoLastUpdated: null,
  }
  componentDidMount() {
    // this.getData()
    this.getGithubData()
  }

  // getData = async () => {
  //   const testHere = await test()
  //   console.log(testHere)
  // }

  getGithubData = async () => {
    const githubData = await listGithubRepos()

    let URLsForPorfolioUiAndAPI = ["jasonschmitt.dev", "jasonschmitt.dev-api"]

    const dataObj = {
      uiRepoLastUpdated: "",
      apiRepoLastUpdated: "",
    }
    githubData.data.forEach(arrayItem => {
      if (arrayItem.name == URLsForPorfolioUiAndAPI[0]) {
        dataObj.uiRepoLastUpdated = dayjs(arrayItem.updated_at).fromNow()
      } else if (arrayItem.name == URLsForPorfolioUiAndAPI[1]) {
        dataObj.apiRepoLastUpdated = dayjs(arrayItem.updated_at).fromNow()
      }
    })
    console.log(dataObj)
    this.setState({ uiRepoLastUpdated: dataObj.uiRepoLastUpdated })
    this.setState({ apiRepoLastUpdated: dataObj.apiRepoLastUpdated })
    // console.log(githubData)
  }

  render() {
    return (
      <GridItem
        rowSpan={1}
        colSpan={{ base: 12, md: 6, lg: 8 }}
        bg={{ base: "white" }}
        p={4}
      >
        <Text fontSize="2xl">About me</Text>
        <Text fontSize="md">
          Hi, I am Jason, a North Carolina based front end web developer.
          Currently pursuing a Masters in Information Technology, concentrating
          in Software Systems Design and Engineering at UNC Charlotte, I am
          excited about progressing my career in full stack web development as
          well as learning more about website architecture! The UI to this repo
          was last updated {this.state.uiRepoLastUpdated} and the API to this
          repo was last updated {this.state.apiRepoLastUpdated}.
        </Text>
      </GridItem>
    )
  }
}

export default About
