import React from "react"
import { GridItem, Text, Button, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
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
            This site also acts as a playground for my UI and API projects. The
            site was built with reacts gatsby.js for the frontend, where the UI
            repo was last updated {uiRepoLastUpdated}, and is hosted on netlify.
            And built with node.js for the backend API and data services, where
            the API repo was last updated {apiRepoLastUpdated}, and is hosted on
            digital ocean. I enjoy tinkering and testing out projects and new
            node modules with this playground site, that also acts as a
            portfolio site.
          </Text>
          <Text fontSize="md" mt={4}>
            One of the biggest opportunities working with a fortune 500 company
            is the size and number of teams to work with. My core responsibility
            involved building a global styleguide for our internal application
            teams which grew into an entire front-end framework involving the
            dynamic creation of components, modules, utilities, helpers, and
            more.
          </Text>
          <Text fontSize="md" mt={4}>
            Feel free to put a 15 minute meeting on my calendar or use the
            contact form below to get in touch!
          </Text>

          <Link
            href="https://calendly.com/jasonschmitt/15min"
            _hover={{
              textDecoration: "none",
            }}
            isExternal
          >
            <Button colorScheme="linkedin" mt={4} w="100%">
              Schedule 15 minute meeting with me
              <ExternalLinkIcon mx="2px" />
            </Button>
          </Link>
        </GridItem>
      )}
    </GithubConsumer>
  )
}

export default About
