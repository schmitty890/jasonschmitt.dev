import React from "react"
import {
  Box,
  Container,
  Grid,
  Text,
  GridItem,
  Heading,
  Switch,
} from "@chakra-ui/react"
import { AuthConsumer } from "../../../../projects/test/contexts/AuthContext"
import {
  SpotifyUserControlsProvider,
  SpotifyUserControlsConsumer,
} from "../../contexts/SpotifyUserControlsContext"
import { useForm } from "react-hook-form"

export default function Header() {
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
        <SpotifyUserControlsProvider>
          <SpotifyUserControlsConsumer>
            {({ userCanEdit, toggleUserCanEdit }) => (
              <GridItem
                p={4}
                rowSpan={6}
                colSpan={{ base: 12 }}
                bg={{ base: "white" }}
                justifyContent={"space-between"}
                display={"inline-flex"}
              >
                <Box>
                  <Heading mb={4}>Playlist</Heading>
                  {user ? (
                    <Heading mb={4}>
                      <Text>
                        users can edit {userCanEdit ? "true" : "false"}
                      </Text>
                      <Switch
                        name="boolean"
                        ref={register}
                        colorScheme="red"
                        isChecked={userCanEdit}
                        onChange={toggleUserCanEdit}
                      />
                    </Heading>
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
            )}
          </SpotifyUserControlsConsumer>
        </SpotifyUserControlsProvider>
      )}
    </AuthConsumer>
  )
}
