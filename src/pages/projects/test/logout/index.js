import React, { useState } from "react"
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
  AuthProvider,
  AuthConsumer,
} from "../../../../projects/test/contexts/AuthContext"

export default function LogOut() {
  console.log("logout")
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
      // test()
      // logIn(values)
      console.log("logout")
      localStorage.clear()
      window.location.href = "/"

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
                  {loading ? null : (
                    <GridItem
                      rowSpan={1}
                      colSpan={{ base: 12 }}
                      bg={{ base: "white" }}
                      p={4}
                    >
                      {user ? (
                        <form onSubmit={handleSubmit}>
                          <Button
                            mt={4}
                            colorScheme="linkedin"
                            type="submit"
                            isLoading={isLoading}
                          >
                            logout
                          </Button>
                        </form>
                      ) : (
                        <Text>go login</Text>
                      )}
                    </GridItem>
                  )}
                </Grid>
              </Box>
            </Container>
          )}
        </AuthConsumer>
      </AuthProvider>
    </ChakraProvider>
  )
}
