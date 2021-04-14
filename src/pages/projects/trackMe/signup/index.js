import React, { useState } from "react"
import { signUp } from "../../../../projects/trackMe/api/signup"
import {
  ChakraProvider,
  Box,
  Container,
  Grid,
  Text,
  Input,
  Stack,
  GridItem,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react"
import Header from "../../../../projects/trackMe/components/Header/Header"
import { useFormik } from "formik"
import {
  SignUpProvider,
  SignUpConsumer,
} from "../../../../projects/trackMe/contexts/SignUpContext"
import {
  AuthProvider,
  AuthConsumer,
} from "../../../../projects/trackMe/contexts/AuthContext"

export default function SignUp() {
  console.log("signUp")
  const [isLoading, setIsLoading] = useState(false)
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values, // use this if you want controlled components
    errors,
  } = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      yourMessage: "",
    },

    onSubmit: values => {
      setIsLoading(true)
      // make post request here
      // console.log(values)
      // postEmailRoute(values) // post route
      signUp(values)
      console.log("send data")

      setIsLoading(false)
      toast({
        title: "You Signed up!",
        description: "Horray!",
        status: "success",
        duration: 5000,
        isClosable: true,
      })

      document.getElementById("firstName").value = ""
      document.getElementById("email").value = ""
      document.getElementById("password").value = ""
    },
  })
  const toast = useToast()
  return (
    <ChakraProvider>
      <AuthProvider>
        <AuthConsumer>
          {({ authTest, user, loading }) => (
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
                    {loading ? null : (
                      <GridItem
                        rowSpan={1}
                        colSpan={{ base: 12 }}
                        bg={{ base: "white" }}
                        p={4}
                      >
                        {user ? (
                          <Text>user is logged in as {user.firstName}</Text>
                        ) : (
                          <form onSubmit={handleSubmit}>
                            <FormControl isRequired>
                              <FormLabel mt={4} htmlFor="firstName">
                                First name
                              </FormLabel>
                              <Input
                                id="firstName"
                                type="text"
                                name="firstName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel mt={4} htmlFor="email">
                                Email
                              </FormLabel>
                              <Input
                                id="email"
                                type="text"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel mt={4} htmlFor="yourMessage">
                                Password
                              </FormLabel>
                              <Input
                                id="password"
                                type="text"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </FormControl>

                            <Button
                              mt={4}
                              colorScheme="linkedin"
                              type="submit"
                              isLoading={isLoading}
                            >
                              Add user
                            </Button>
                          </form>
                        )}
                      </GridItem>
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
