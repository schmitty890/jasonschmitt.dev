import React from "react"
import { GridItem, Text, Grid } from "@chakra-ui/react"

const Projects = () => {
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={0.5}
    >
      <GridItem rowSpan={1} colSpan={{ base: 12 }} bg={{ base: "white" }} p={4}>
        <Text fontSize="md">
          Projects - Below are a few projects I have worked on that state the
          tech stack, a url to view/demo the site, as well as the github
          repository associated with the project
        </Text>
      </GridItem>
      <GridItem
        colSpan={{ base: 12, md: 6, lg: 4 }}
        bg={{ base: "white" }}
        p={4}
      >
        <Text>Project 1</Text>
      </GridItem>
      <GridItem
        colSpan={{ base: 12, md: 6, lg: 4 }}
        bg={{ base: "white" }}
        p={4}
      >
        <Text>Project 2</Text>
      </GridItem>
      <GridItem
        colSpan={{ base: 12, md: 6, lg: 4 }}
        bg={{ base: "white" }}
        p={4}
      >
        <Text>Project 3</Text>
      </GridItem>
    </Grid>
  )
}

export default Projects
