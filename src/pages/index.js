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
// import unccLogo from "../../images/uncc.png"
import { SocialIcon } from "react-social-icons"
import { IconContext } from "react-icons"
import Header from "../components/Header/Header"
import CarouselOfTech from "../components/CarouselOfTech/CarouselOfTech"

import Work from "../data/work.json"

export default function Home() {
  return (
    <ChakraProvider>
      <IconContext.Provider value={{ size: "2em" }}>
        <Container maxW="4xl" centerContent>
          <Box padding="2" bg="gray.100" maxW="4xl" width="100%">
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(12, 1fr)"
              gap={0.5}
              borderRadius="5px"
            >
              <Header />
              <GridItem
                rowSpan={1}
                colSpan={{ base: 12, md: 6, lg: 8 }}
                bg={{ base: "white" }}
                p={4}
              >
                <Text fontSize="2xl">About me</Text>
                <Text fontSize="md">
                  Hi, I am Jason, a North Carolina based front end web
                  developer. Currently pursuing a Masters in Information
                  Technology, concentrating in Software Systems Design and
                  Engineering at UNC Charlotte, I am excited about progressing
                  my career in full stack web development as well as learning
                  more about website architecture.
                </Text>
              </GridItem>

              <GridItem
                rowSpan={1}
                colSpan={{ base: 12, md: 6, lg: 4 }}
                bg={{ base: "white" }}
                p={4}
              >
                <Text fontSize="md" mb="3">
                  {Work.title}
                </Text>
                <Divider mb="3" />
                {Work.employers.map(item => (
                  <Flex mb="3" key={item.id}>
                    <Avatar src={item.image} />
                    <Box ml="3">
                      <Text fontWeight="bold">{item.company}</Text>
                      <Text fontSize="sm">{item.title}</Text>
                      <Text fontSize="xs">{item.duration}</Text>
                    </Box>
                  </Flex>
                ))}
              </GridItem>

              <GridItem
                rowSpan={1}
                colSpan={{ base: 12 }}
                bg={{ base: "white" }}
                p={4}
                justifyContent={"center"}
                display={"inline-flex"}
              >
                I focus my efforts in becoming proficient in the following
                technologies
              </GridItem>

              <CarouselOfTech />

              <GridItem
                rowSpan={1}
                colSpan={{ base: 12 }}
                bg={{ base: "white" }}
                p={4}
              >
                Projects - Below are a few projects I have worked on that state
                the tech stack, a url to view/demo the site, as well as the
                github repository associated with the project
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
      </IconContext.Provider>
    </ChakraProvider>
  )
}
