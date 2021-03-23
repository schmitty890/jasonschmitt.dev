import React, { Component } from "react"
import { ChakraProvider, Box, Container, Grid } from "@chakra-ui/react"
import Header from "../animalCrossing/components/Header/Header"
import Navigation from "../animalCrossing/components/Navigation/Navigation"
import TableData from "../animalCrossing/components/TableData/TableDataSeaCreatures"
import {
  AnimalCrossingSeaCreatureProvider,
  AnimalCrossingSeaCreatureConsumer,
} from "../animalCrossing/contexts/animalCrossingSeaCreatureContext"

export default function SeaCreaturePage() {
  return (
    <ChakraProvider>
      <AnimalCrossingSeaCreatureProvider>
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
      </AnimalCrossingSeaCreatureProvider>
    </ChakraProvider>
  )
}
