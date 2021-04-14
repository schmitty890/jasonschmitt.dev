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
import Schedule from "../Schedule/Schedule"

export default function Main() {
  return (
    <Container maxW="4xl" centerContent>
      <Box padding="2" bg="gray.100" maxW="4xl" width="100%">
        <Schedule />
      </Box>
    </Container>
  )
}
