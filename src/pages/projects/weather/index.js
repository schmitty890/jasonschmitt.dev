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
import { WeatherProvider } from "../../../projects/weather/contexts/WeatherContext"
import Main from "../../../projects/weather/components/Main/Main"

export default function Weather() {
  return (
    <ChakraProvider>
      <WeatherProvider>
        <Main />
      </WeatherProvider>
    </ChakraProvider>
  )
}
