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
import me from "../images/jasonschmitt2.png"

export default function Home() {
  return (
    <ChakraProvider>
      <Container maxW="4xl" centerContent>
        <Box padding="4" bg="gray.100" maxW="4xl" width="100%">
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(12, 1fr)"
            gap={4}
          >
            <GridItem
              p={4}
              rowSpan={6}
              colSpan={{ base: 12 }}
              bg={{ base: "white" }}
            >
              <Flex>
                <Avatar src={me} />
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
              colSpan={{ base: 12, md: 6, lg: 8 }}
              bg={{ base: "white" }}
              p={4}
            >
              Hi, I am Jason. Currently pursuing a Masters in Information
              Technology, I am excited about progressing my career in full stack
              web development.
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={{ base: 12, md: 6, lg: 4 }}
              bg={{ base: "white" }}
              p={4}
            >
              Employment
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={{ base: 12 }}
              bg={{ base: "white" }}
              p={4}
            >
              Projects
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={{ base: 12, md: 6, lg: 4 }}
              bg={{ base: "white" }}
              p={4}
            >
              Project 1
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={{ base: 12, md: 6, lg: 4 }}
              bg={{ base: "white" }}
              p={4}
            >
              Project 2
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={{ base: 12, md: 6, lg: 4 }}
              bg={{ base: "white" }}
              p={4}
            >
              Project 3
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </ChakraProvider>
  )
}
