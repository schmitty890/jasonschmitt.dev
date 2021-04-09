import React from "react"
import { ChakraProvider, Box, Container, Grid, Text } from "@chakra-ui/react"
import { AuthProvider } from "../../../projects/hockey/contexts/AuthContext"
import {
  SignUpProvider,
  SignUpConsumer,
} from "../../../projects/test/contexts/SignUpContext"
import { redirectToHome } from "../../../projects/hockey/api/auth"
import Main from "../../../projects/hockey/components/Main/Main"

export default function Test() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <SignUpProvider>
          <Main />
        </SignUpProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}
