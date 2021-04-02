import React from "react"
import {
  Box,
  Container,
  Grid,
  Text,
  GridItem,
  Heading,
  Switch,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Image,
  Badge,
  Link,
  ExternalLinkIcon,
  Progress,
} from "@chakra-ui/react"
import NowPlaying from "../NowPlaying/NowPlaying"
import Header from "../Header/Header"
import Search from "../Search/Search"
import RecentlyPlayed from "../RecentlyPlayed/RecentlyPlayed"
import CurrentPlaylist from "../CurrentPlaylist/CurrentPlaylist"
import { useForm } from "react-hook-form"

export default function Main() {
  const defaultValues = {
    boolean: true, // SWITCH DOESN'T READS THIS VALUES
  }

  const { handleSubmit, register, formState } = useForm({
    defaultValues,
  })

  function onChange(values) {
    // setTimeout(() => {
    console.log(values.boolean)
    // }, 1000)
  }

  return (
    <Container maxW="4xl" centerContent>
      <Box padding="2" bg="gray.100" maxW="4xl" width="100%">
        <Grid
          // templateRows="repeat(2, 1fr)"
          templateColumns="repeat(12, 1fr)"
          gap={0.5}
          borderRadius="5px"
        >
          <NowPlaying />
          <Header />

          <CurrentPlaylist />
          <Search />
          <RecentlyPlayed />
        </Grid>
      </Box>
    </Container>
  )
}
