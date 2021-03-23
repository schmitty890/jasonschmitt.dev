import React, { Component } from "react"
import { ChakraProvider, Box, Container, Grid } from "@chakra-ui/react"
import Header from "../projects/animalCrossingProject/components/Header/Header"
import Navigation from "../projects/animalCrossingProject/components/Navigation/Navigation"
import TableData from "../projects/animalCrossingProject/components/TableData/TableData"
import {
  AnimalCrossingProvider,
  AnimalCrossingConsumer,
} from "../projects/animalCrossingProject/contexts/animalCrossingContext"

export default function AnimalCrossingProject() {
  return (
    <ChakraProvider>
      <AnimalCrossingProvider>
        <Container maxW="4xl" centerContent>
          <Box padding="2" bg="gray.100" maxW="4xl" width="100%">
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(12, 1fr)"
              gap={0.5}
              borderRadius="5px"
            >
              <Header />
              <Navigation />
              <TableData />
            </Grid>
          </Box>
        </Container>
      </AnimalCrossingProvider>
    </ChakraProvider>
  )
}
