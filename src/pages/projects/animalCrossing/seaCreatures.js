import React, { Component } from "react"
import { ChakraProvider, Box, Container, Grid } from "@chakra-ui/react"
import Header from "../../../projects/animalCrossing/components/Header/Header"
import Navigation from "../../../projects/animalCrossing/components/Navigation/Navigation"
import TableDataSeaCreatures from "../../../projects/animalCrossing/components/TableData/TableDataSeaCreatures"
import {
  AnimalCrossingSeaCreatureProvider,
  AnimalCrossingSeaCreatureConsumer,
} from "../../../projects/animalCrossing/contexts/animalCrossingSeaCreatureContext"

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
              <TableDataSeaCreatures />
            </Grid>
          </Box>
        </Container>
      </AnimalCrossingSeaCreatureProvider>
    </ChakraProvider>
  )
}
