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
  Divider,
  Link,
} from "@chakra-ui/react"
import me from "../images/jasonschmitt2.png"
import nodejs from "../images/node.jpeg"
import boaLogo from "../images/boa.jpg"
import lowesLogo from "../images/lowesLogo.jpg"
import brooksBellLogo from "../images/brooksbell.png"
import unccLogo from "../images/uncc.png"
import linkedInLogo from "../images/linkedin.png"
import githubLogo from "../images/github.png"
import { SocialIcon } from "react-social-icons"

export default function Home() {
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
              <Flex>
                <Avatar src={me} size="lg" />
                <Box ml="3">
                  <Text fontWeight="bold">Jason Schmitt</Text>
                  <Text fontSize="sm">Website Developer</Text>
                  <Text fontSize="xs">Location: North Carolina</Text>
                </Box>
              </Flex>
              <Flex>
                <Avatar src={unccLogo} size="lg" />
                <Box ml="3">
                  <Text fontWeight="bold">
                    UNC Charlotte
                    <Badge ml="1" colorScheme="yellow">
                      In Progress
                    </Badge>
                  </Text>
                  <Text fontSize="sm">Information Technology, M.S.</Text>
                  <Text fontSize="xs">
                    Concentration: Software Systems Design and Engineering
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={{ base: 12, md: 6, lg: 8 }}
              bg={{ base: "white" }}
              p={4}
            >
              <Text fontSize="2xl">About me</Text>
              <Text fontSize="md">
                Hi, I am Jason, a North Carolina based front end web developer.
                Currently pursuing a Masters in Information Technology,
                concentrating in Software Systems Design and Engineering at UNC
                Charlotte, I am excited about progressing my career in full
                stack web development as well as learning more about website
                architecture.
              </Text>
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={{ base: 12, md: 6, lg: 4 }}
              bg={{ base: "white" }}
              p={4}
            >
              <Text fontSize="md" mb="3">
                Places of employment
              </Text>
              <Divider mb="3" />
              <Flex mb="3">
                <Avatar src={boaLogo} />
                <Box ml="3">
                  <Text fontWeight="bold">Bank of America</Text>
                  <Text fontSize="sm">Front End Engineer</Text>
                  <Text fontSize="xs">Oct 2018 - Present</Text>
                </Box>
              </Flex>
              <Divider mb="3" />
              <Flex mb="3">
                <Avatar src={brooksBellLogo} />
                <Box ml="3">
                  <Text fontWeight="bold">Brooks Bell</Text>
                  <Text fontSize="sm">JavaScript Developer</Text>
                  <Text fontSize="xs">July 2017 - Oct 2018</Text>
                </Box>
              </Flex>
              <Divider mb="3" />
              <Flex mb="3">
                <Avatar src={lowesLogo} />
                <Box ml="3">
                  <Text fontWeight="bold">Lowes Home Improvement</Text>
                  <Text fontSize="sm">Software Developer</Text>
                  <Text fontSize="xs">Jan 2015 - July 2017</Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={{ base: 12 }}
              bg={{ base: "white" }}
              p={4}
            >
              I focus my efforts in learning the following technologies
            </GridItem>
            <GridItem
              rowSpan={12}
              colSpan={{ base: 3, md: 2, lg: 1 }}
              bg={{ base: "white" }}
              p={4}
            >
              Node.js
              <Avatar showBorder={true} src={nodejs} />
            </GridItem>
            <GridItem
              rowSpan={12}
              colSpan={{ base: 3, md: 2, lg: 1 }}
              bg={{ base: "white" }}
              p={4}
            >
              2
            </GridItem>
            <GridItem
              rowSpan={12}
              colSpan={{ base: 3, md: 2, lg: 1 }}
              bg={{ base: "white" }}
              p={4}
            >
              3
            </GridItem>
            <GridItem
              rowSpan={12}
              colSpan={{ base: 3, md: 2, lg: 1 }}
              bg={{ base: "white" }}
              p={4}
            >
              4
            </GridItem>
            <GridItem
              rowSpan={12}
              colSpan={{ base: 3, md: 2, lg: 1 }}
              bg={{ base: "white" }}
              p={4}
            >
              5
            </GridItem>
            <GridItem
              rowSpan={12}
              colSpan={{ base: 3, md: 2, lg: 1 }}
              bg={{ base: "white" }}
              p={4}
            >
              6
            </GridItem>
            <GridItem
              rowSpan={12}
              colSpan={{ base: 3, md: 2, lg: 1 }}
              bg={{ base: "white" }}
              p={4}
            >
              7
            </GridItem>
            <GridItem
              rowSpan={12}
              colSpan={{ base: 3, md: 2, lg: 1 }}
              bg={{ base: "white" }}
              p={4}
            >
              8
            </GridItem>
            <GridItem
              rowSpan={12}
              colSpan={{ base: 3, md: 2, lg: 1 }}
              bg={{ base: "white" }}
              p={4}
            >
              9
            </GridItem>
            <GridItem
              rowSpan={12}
              colSpan={{ base: 3, md: 2, lg: 1 }}
              bg={{ base: "white" }}
              p={4}
            >
              10
            </GridItem>
            <GridItem
              rowSpan={12}
              colSpan={{ base: 3, md: 2, lg: 1 }}
              bg={{ base: "white" }}
              p={4}
            >
              11
            </GridItem>
            <GridItem
              rowSpan={12}
              colSpan={{ base: 3, md: 2, lg: 1 }}
              bg={{ base: "white" }}
              p={4}
            >
              12
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={{ base: 12 }}
              bg={{ base: "white" }}
              p={4}
            >
              Projects - Below are a few projects I have worked on that state
              the tech stack, a url to view/demo the site, as well as the github
              repository associated with the project
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
            <GridItem
              p={4}
              rowSpan={6}
              colSpan={{ base: 12 }}
              bg={{ base: "white" }}
              justifyContent={"center"}
              display={"inline-flex"}
            >
              <Flex>
                <SocialIcon
                  target="_blank"
                  url="https://www.linkedin.com/in/jasonlschmitt/"
                />
              </Flex>

              <Flex ml={3}>
                <SocialIcon
                  target="_blank"
                  bgColor="#000"
                  url="https://github.com/schmitty890"
                />
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </ChakraProvider>
  )
}
