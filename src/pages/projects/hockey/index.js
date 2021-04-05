import React from "react"
import { ChakraProvider, Box, Container, Grid, Text } from "@chakra-ui/react"
import Header from "../../../projects/hockey/components/Header/Header"
import {
  AuthProvider,
  AuthConsumer,
} from "../../../projects/hockey/contexts/AuthContext"
import {
  SignUpProvider,
  SignUpConsumer,
} from "../../../projects/test/contexts/SignUpContext"
import { redirectToHome } from "../../../projects/hockey/api/auth"

export default function Test() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <AuthConsumer>
          {({ authTest, user }) => (
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
                    {user ? (
                      <Text>user is {user.firstName}</Text>
                    ) : (
                      // redirectToHome()
                      // redirectToHome()
                      // <Text>user is {user.firstName}</Text>
                      <Text>user is not logged in</Text>
                    )}
                  </Grid>
                </Box>
              </Container>
            </SignUpProvider>
          )}
        </AuthConsumer>
      </AuthProvider>
    </ChakraProvider>
  )
}
