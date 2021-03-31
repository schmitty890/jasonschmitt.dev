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
import { AuthConsumer } from "../../../../projects/test/contexts/AuthContext"
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
    <AuthConsumer>
      {({ user }) => (
        <Container maxW="4xl" centerContent>
          <Box padding="2" bg="gray.100" maxW="4xl" width="100%">
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(12, 1fr)"
              gap={0.5}
              borderRadius="5px"
            >
              <GridItem
                p={4}
                rowSpan={6}
                colSpan={{ base: 12 }}
                bg={{ base: "white" }}
                justifyContent={"space-between"}
                display={"inline-flex"}
              >
                <Box>
                  <Heading mb={4}>Projects</Heading>
                  {user ? (
                    <Switch
                      name="boolean"
                      ref={register}
                      colorScheme="red"
                      onChange={handleSubmit(onChange)}
                    />
                  ) : (
                    // <FormControl display="flex" alignItems="center">
                    //   <FormLabel htmlFor="email-alerts" mb="0">
                    //     Playlist - logged in as {user.firstName}
                    //   </FormLabel>
                    //   <Switch id="email-alerts" onChange={handleChange} />
                    // </FormControl>
                    <Text fontSize="xl">Playlist - no user is logged in</Text>
                  )}
                </Box>
              </GridItem>
              <NowPlaying />
            </Grid>
          </Box>
        </Container>
      )}
    </AuthConsumer>
  )
}
