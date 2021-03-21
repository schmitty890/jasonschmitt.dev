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
import { getTestRoute } from "../api/test"

import { IconContext } from "react-icons"
import Header from "../components/Header/Header"
import CarouselOfTech from "../components/CarouselOfTech/CarouselOfTech"
import About from "../components/About/About"
import Employers from "../components/Employers/Employers"
import Efforts from "../components/Efforts/Efforts"
import Social from "../components/Social/Social"
import Projects from "../components/Projects/Projects"
import ContactForm from "../components/ContactForm/ContactForm"

// export default function Home() {
class Home extends Component {
  componentDidMount() {
    getTestRoute()
  }
  render() {
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

                <About />

                <Employers />

                <Efforts />

                <CarouselOfTech />
              </Grid>
              {/* <Projects /> */}
              <ContactForm />
              <Social />
            </Box>
          </Container>
        </IconContext.Provider>
      </ChakraProvider>
    )
  }
}

export default Home
