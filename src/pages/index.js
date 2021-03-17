import React, { Component } from "react"
import {
  ChakraProvider,
  Box,
  Container,
  Grid,
  GridItem,
  Wrap,
  WrapItem,
  Center,
  Flex,
  Avatar,
  Text,
  Badge,
} from "@chakra-ui/react"

export default function Home() {
  return (
    <ChakraProvider>
      <Container maxW="4xl" centerContent>
        <Box padding="4" bg="gray.100" maxW="4xl" width="100%">
          <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(12, 1fr)"
            gap={4}
          >
            <GridItem
              p={4}
              rowSpan={1}
              colSpan={{ base: 12 }}
              bg={{ base: "white" }}
            >
              <Flex>
                <Avatar src="/images/jasonschmitt.jpg" />
                <Box ml="3">
                  <Text fontWeight="bold">
                    Jason Schmitt
                    <Badge ml="1" colorScheme="green">
                      New
                    </Badge>
                  </Text>
                  <Text fontSize="sm">UI Engineer</Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={{ base: 12, md: 6, lg: 4 }}
              bg={{ base: "black", md: "green", lg: "blue" }}
            >
              here is text
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={{ base: 12, md: 6, lg: 4 }}
              bg={{ base: "black", md: "green", lg: "green" }}
              centerContent
            >
              here is text
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={{ base: 12, md: 6, lg: 4 }}
              bg={{ base: "black", md: "green", lg: "red" }}
              centerContent
            >
              here is text
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </ChakraProvider>
  )
}
