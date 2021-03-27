import React, { useState, useEffect } from "react"
import { test, logIn } from "../../../../projects/test/api/login"
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
import Header from "../../../../projects/test/components/Header/Header"
import { useFormik } from "formik"
import {
  LogInProvider,
  LogInConsumer,
} from "../../../../projects/test/contexts/LogInContext"
import {
  AuthProvider,
  AuthConsumer,
} from "../../../../projects/test/contexts/AuthContext"

export default function LogIn() {
  console.log("logIn")
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
      email: "",
      password: "",
    },

    onSubmit: values => {
      setIsLoading(true)
      // make post request here
      // console.log(values)
      // postEmailRoute(values) // post route
      test()
      logIn(values)
      console.log("send data")

      setIsLoading(false)
      // toast({
      //   title: "You Signed up!",
      //   description: "Horray!",
      //   status: "success",
      //   duration: 5000,
      //   isClosable: true,
      // })

      // document.getElementById("firstName").value = ""
      // document.getElementById("email").value = ""
      // document.getElementById("password").value = ""
    },
  })
  const toast = useToast()
  return (
    <ChakraProvider>
      <AuthProvider>
        <AuthConsumer>
          {({ authTest, user, loading }) => (
            <LogInProvider>
              <Container maxW="4xl" centerContent>
                <Box padding="2" bg="gray.100" maxW="4xl" width="100%">
                  <Grid
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(12, 1fr)"
                    gap={0.5}
                    borderRadius="5px"
                  >
                    <Header />
                    <Text>login</Text>
                    {!loading ? (
                      <GridItem
                        rowSpan={1}
                        colSpan={{ base: 12 }}
                        bg={{ base: "white" }}
                        p={4}
                        style={{ border: "5px solid red" }}
                      >
                        {user ? (
                          <Text>
                            user is logged in as {user.firstName}
                            {loading ? "true" : "false"}
                          </Text>
                        ) : (
                          <form onSubmit={handleSubmit}>
                            <FormControl isRequired>
                              <FormLabel mt={4} htmlFor="email">
                                email
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
                              <FormLabel mt={4} htmlFor="password">
                                password
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
                              Login
                            </Button>
                          </form>
                        )}
                      </GridItem>
                    ) : null}
                  </Grid>
                </Box>
              </Container>
            </LogInProvider>
          )}
        </AuthConsumer>
      </AuthProvider>
    </ChakraProvider>
  )
}
