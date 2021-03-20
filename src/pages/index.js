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

import Work from "../data/work.json"

import {
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaGulp,
  FaHtml5,
  FaCss3,
  FaLess,
  FaSass,
} from "react-icons/fa"

import {
  SiMongodb,
  SiMysql,
  SiJsonwebtokens,
  SiJavascript,
  SiJquery,
  SiBootstrap,
} from "react-icons/si"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  }

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
              <GridItem
                p={4}
                rowSpan={6}
                colSpan={{ base: 12 }}
                bg={{ base: "white" }}
                justifyContent={"space-between"}
                display={"inline-flex"}
              >
                <Flex>
                  {/* <Avatar src={me} size="lg" /> */}
                  <Box ml="3">
                    <Text fontWeight="bold">Jason Schmitt</Text>
                    <Text fontSize="sm">Website Developer</Text>
                    <Text fontSize="xs">Location: North Carolina</Text>
                  </Box>
                </Flex>
                <Flex>
                  {/* <Avatar src={unccLogo} size="lg" /> */}
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
                  <Flex mb="3">
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

              <GridItem
                rowSpan={1}
                colSpan={{ base: 12 }}
                bg={{ base: "white" }}
                p={4}
                pb={10}
              >
                <Slider {...settings}>
                  <GridItem
                    rowSpan={12}
                    colSpan={{ base: 3, md: 2, lg: 1 }}
                    bg={{ base: "white" }}
                    p={4}
                  >
                    <FaNodeJs style={{ margin: "auto", color: "#68A063" }} />
                  </GridItem>
                  <GridItem
                    rowSpan={12}
                    colSpan={{ base: 3, md: 2, lg: 1 }}
                    bg={{ base: "white" }}
                    p={4}
                  >
                    <FaReact style={{ margin: "auto", color: "#61DBFB" }} />
                  </GridItem>
                  <GridItem
                    rowSpan={12}
                    colSpan={{ base: 3, md: 2, lg: 1 }}
                    bg={{ base: "white" }}
                    p={4}
                  >
                    <FaVuejs style={{ margin: "auto", color: "#41B883" }} />
                  </GridItem>
                  <GridItem
                    rowSpan={12}
                    colSpan={{ base: 3, md: 2, lg: 1 }}
                    bg={{ base: "white" }}
                    p={4}
                  >
                    <FaGulp style={{ margin: "auto", color: "#DB4446" }} />
                  </GridItem>
                  <GridItem
                    rowSpan={12}
                    colSpan={{ base: 3, md: 2, lg: 1 }}
                    bg={{ base: "white" }}
                    p={4}
                  >
                    <FaHtml5 style={{ margin: "auto", color: "#F16529" }} />
                  </GridItem>
                  <GridItem
                    rowSpan={12}
                    colSpan={{ base: 3, md: 2, lg: 1 }}
                    bg={{ base: "white" }}
                    p={4}
                  >
                    <FaCss3 style={{ margin: "auto", color: "#2965f1" }} />
                  </GridItem>
                  <GridItem
                    rowSpan={12}
                    colSpan={{ base: 3, md: 2, lg: 1 }}
                    bg={{ base: "white" }}
                    p={4}
                  >
                    <SiMongodb style={{ margin: "auto", color: "#3FA037" }} />
                  </GridItem>
                  <GridItem
                    rowSpan={12}
                    colSpan={{ base: 3, md: 2, lg: 1 }}
                    bg={{ base: "white" }}
                    p={4}
                  >
                    <SiMysql style={{ margin: "auto", color: "#00758F" }} />
                  </GridItem>
                  <GridItem
                    rowSpan={12}
                    colSpan={{ base: 3, md: 2, lg: 1 }}
                    bg={{ base: "white" }}
                    p={4}
                  >
                    <SiJsonwebtokens
                      style={{ margin: "auto", color: "#d63aff" }}
                    />
                  </GridItem>
                  <GridItem
                    rowSpan={12}
                    colSpan={{ base: 3, md: 2, lg: 1 }}
                    bg={{ base: "white" }}
                    p={4}
                  >
                    <SiJavascript
                      style={{ margin: "auto", color: "#F0DB4F" }}
                    />
                  </GridItem>
                  <GridItem
                    rowSpan={12}
                    colSpan={{ base: 3, md: 2, lg: 1 }}
                    bg={{ base: "white" }}
                    p={4}
                  >
                    <SiJquery style={{ margin: "auto", color: "#0868AC" }} />
                  </GridItem>
                  <GridItem
                    rowSpan={12}
                    colSpan={{ base: 3, md: 2, lg: 1 }}
                    bg={{ base: "white" }}
                    p={4}
                  >
                    <FaLess style={{ margin: "auto", color: "#1d365d" }} />
                  </GridItem>
                  <GridItem
                    rowSpan={12}
                    colSpan={{ base: 3, md: 2, lg: 1 }}
                    bg={{ base: "white" }}
                    p={4}
                  >
                    <FaSass style={{ margin: "auto", color: "#CD6799" }} />
                  </GridItem>
                  <GridItem
                    rowSpan={12}
                    colSpan={{ base: 3, md: 2, lg: 1 }}
                    bg={{ base: "white" }}
                    p={4}
                  >
                    <SiBootstrap style={{ margin: "auto", color: "#602C50" }} />
                  </GridItem>
                </Slider>
              </GridItem>

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
