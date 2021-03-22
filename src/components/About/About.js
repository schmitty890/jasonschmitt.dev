import React from "react"
import { GridItem, Text } from "@chakra-ui/react"
import { GithubConsumer } from "../../contexts/GithubContext"

const About = () => {
  return (
    <GithubConsumer>
      {({ uiRepoLastUpdated, apiRepoLastUpdated, test }) => (
        <GridItem
          rowSpan={1}
          colSpan={{ base: 12, md: 6, lg: 8 }}
          bg={{ base: "white" }}
          p={4}
        >
          <Text fontSize="2xl">About me</Text>
          <Text fontSize="md">
            Hi, I am Jason, a North Carolina based front end web developer.
            Currently pursuing a Masters in Information Technology,
            concentrating in Software Systems Design and Engineering at UNC
            Charlotte, I am excited about progressing my career in full stack
            web development as well as learning more about website architecture.
          </Text>
          <Text fontSize="md" mt={4}>
            This is also my playground servers. This site was built with reacts
            gatsby.js for the frontend, where the UI repo was last updated{" "}
            {uiRepoLastUpdated}, and is hosted on netlify. And built with
            node.js for the backend API and data services, where the API repo
            was last updated {apiRepoLastUpdated}, and is hosted on digital
            ocean. I enjoy tinkering and testing out projects and new node
            modules with this playground site, that also acts as a portfolio
            site.
          </Text>
        </GridItem>
      )}
    </GithubConsumer>
  )
}

export default About
