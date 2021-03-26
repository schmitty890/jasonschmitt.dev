import React from "react"
import { ChakraProvider, Box, Container, Grid, Text } from "@chakra-ui/react"
import Header from "../../../../projects/test/components/Header/Header"
import {
  SignUpProvider,
  SignUpConsumer,
} from "../../../../projects/test/contexts/SignUpContext"

export default function signUp() {
  console.log("signUp")

  return (
    <ChakraProvider>
      <SignUpProvider>
        <Container maxW="4xl" centerContent>
          <Box padding="2" bg="gray.100" maxW="4xl" width="100%">
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(12, 1fr)"
              gap={0.5}
              borderRadius="5px"
            >
              <Header />
              <Text>signup</Text>
            </Grid>
          </Box>
        </Container>
      </SignUpProvider>
    </ChakraProvider>
  )
}
