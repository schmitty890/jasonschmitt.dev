import React, { Component } from "react"
import {
  ChakraProvider,
  Box,
  Container,
  Grid,
  Text,
  GridItem,
  Heading,
} from "@chakra-ui/react"

export default function Projects() {
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
              p={4}
              rowSpan={6}
              colSpan={{ base: 12 }}
              bg={{ base: "white" }}
              justifyContent={"space-between"}
              display={"inline-flex"}
            >
              <Box>
                <Heading mb={4}>Projects</Heading>
                <Text fontSize="xl">List your super cool projects here</Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </ChakraProvider>
  )
}
