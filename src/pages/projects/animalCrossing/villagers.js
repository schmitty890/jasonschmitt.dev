import React, { Component } from "react"
import { ChakraProvider, Box, Container, Grid } from "@chakra-ui/react"
import Header from "../../../projects/animalCrossing/components/Header/Header"
import Navigation from "../../../projects/animalCrossing/components/Navigation/Navigation"
import TableDataVillagers from "../../../projects/animalCrossing/components/TableData/TableDataVillagers"
import {
  AnimalCrossingVillagersProvider,
  AnimalCrossingVillagersConsumer,
} from "../../../projects/animalCrossing/contexts/animalCrossingVillagerContext"

export default function VillagersPage() {
  return (
    <ChakraProvider>
      <AnimalCrossingVillagersProvider>
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
              <TableDataVillagers />
            </Grid>
          </Box>
        </Container>
      </AnimalCrossingVillagersProvider>
    </ChakraProvider>
  )
}
