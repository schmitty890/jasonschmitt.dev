import React, { Component } from "react"
import {
  ChakraProvider,
  Box,
  Container,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react"

export default function Workouts() {
  return (
    <ChakraProvider>
      <Container maxW="4xl" centerContent>
        <Box padding="2" bg="gray.100" maxW="4xl" width="100%">
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(12, 1fr)"
            gap={0.5}
            borderRadius="5px"
          >
            <GridItem
              rowSpan={1}
              colSpan={{ base: 12 }}
              bg={{ base: "white" }}
              p={4}
            >
              <Text fontSize="2xl">Workout project</Text>
              <Text fontSize="md">Workout project</Text>
              <div className="ct-chart"></div>
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={{ base: 12 }}
              bg={{ base: "white" }}
              p={4}
            >
              <Text fontSize="2xl">Workout project</Text>
              <Text fontSize="md">Workout project</Text>
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={{ base: 12 }}
              bg={{ base: "white" }}
              p={4}
            >
              <Text fontSize="2xl">Workout project</Text>
              <Text fontSize="md">Workout project</Text>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </ChakraProvider>
  )
}
