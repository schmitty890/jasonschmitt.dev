import React from "react"
import {
  Box,
  Container,
  Grid,
  Text,
  GridItem,
  Heading,
  Switch,
  Button,
  Input,
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
            {({
              userCanEdit,
              toggleUserCanEdit,
              createPlaylist,
              play,
              pause,
              nextTrack,
              prevTrack,
            }) => (
              <GridItem
                p={4}
                colSpan={{ base: 12, md: 8 }}
                bg={{ base: "white" }}
                justifyContent={"space-between"}
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
                      {/* <Input placeholder="add new playlist title" /> */}
                      <Button onClick={createPlaylist}>create playlist</Button>
                      <Button onClick={play}>play</Button>
                      <Button onClick={pause}>pause</Button>
                      <Button onClick={nextTrack}>next track</Button>
                      <Button onClick={prevTrack}>prev track</Button>
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
