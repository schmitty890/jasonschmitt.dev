import React, { Component } from "react"
import { ChakraProvider, Box, Container, Grid } from "@chakra-ui/react"
import Header from "../../../projects/animalCrossing/components/Header/Header"
import Navigation from "../../../projects/animalCrossing/components/Navigation/Navigation"
import TableDataFossils from "../../../projects/animalCrossing/components/TableData/TableDataFossils"
import {
  AnimalCrossingFossilProvider,
  AnimalCrossingFossilConsumer,
} from "../../../projects/animalCrossing/contexts/animalCrossingFossilContext"

export default function FossilPage() {
  return (
    <ChakraProvider>
      <AnimalCrossingFossilProvider>
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
              <TableDataFossils />
            </Grid>
          </Box>
        </Container>
      </AnimalCrossingFossilProvider>
    </ChakraProvider>
  )
}
