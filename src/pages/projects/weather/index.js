import React, { Component } from "react"
import {
  ChakraProvider,
  Box,
  Container,
  Grid,
  Text,
  GridItem,
  Heading,
  Spinner,
} from "@chakra-ui/react"
import {
  WeatherProvider,
  WeatherConsumer,
} from "../../../projects/weather/contexts/WeatherContext"

export default function Weather() {
  return (
    <ChakraProvider>
      <WeatherProvider>
        <WeatherConsumer>
          {({ zipCode, loading }) => (
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
                      <Heading mb={4}>weather</Heading>
                      {loading ? (
                        <Spinner color="red.500" />
                      ) : (
                        <Text fontSize="xl">current zip code: {zipCode}</Text>
                      )}
                    </Box>
                  </GridItem>
                </Grid>
              </Box>
            </Container>
          )}
        </WeatherConsumer>
      </WeatherProvider>
    </ChakraProvider>
  )
}
