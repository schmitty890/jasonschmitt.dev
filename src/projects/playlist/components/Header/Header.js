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
  SimpleGrid,
} from "@chakra-ui/react"
import { AuthConsumer } from "../../../../projects/test/contexts/AuthContext"
import { SpotifyUserControlsConsumer } from "../../contexts/SpotifyUserControlsContext"
import { useForm } from "react-hook-form"
import { FaPlay, FaPause, FaUserEdit } from "react-icons/fa"
import { BsSkipEndFill, BsFillSkipStartFill } from "react-icons/bs"
import { RiPlayListFill } from "react-icons/ri"

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
        <SpotifyUserControlsConsumer>
          {({
            userCanEdit,
            toggleUserCanEdit,
            createPlaylist,
            play,
            pause,
            nextTrack,
            prevTrack,
            removeTrackAfterPlayed,
          }) => (
            <GridItem
              p={4}
              colSpan={{ base: 12, md: 8 }}
              bg={{ base: "white" }}
              justifyContent={"space-between"}
            >
              <Box>
                {user ? (
                  <SimpleGrid
                    columns={2}
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    p={4}
                  >
                    <Box
                      m={1}
                      p={2}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="md"
                      align="center"
                    >
                      <FaUserEdit display="inline" />
                      <Switch
                        name="boolean"
                        ref={register}
                        colorScheme="cyan"
                        isChecked={userCanEdit}
                        onChange={toggleUserCanEdit}
                      />
                    </Box>
                    <Box
                      m={1}
                      p={2}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="md"
                      align="center"
                    >
                      <Button onClick={createPlaylist} width="100%">
                        <RiPlayListFill color="green" size={20} />
                      </Button>
                    </Box>
                    <Box
                      m={1}
                      p={2}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="md"
                      align="center"
                    >
                      <Button onClick={play} width="100%">
                        <FaPlay color="green" size={20} />
                      </Button>
                    </Box>
                    <Box
                      m={1}
                      p={2}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="md"
                      align="center"
                    >
                      <Button onClick={pause} width="100%">
                        <FaPause color="darkOrange" size={20} />
                      </Button>
                    </Box>

                    <Box
                      m={1}
                      p={2}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="md"
                      align="center"
                    >
                      <Button onClick={prevTrack} width="100%">
                        <BsFillSkipStartFill color="red" size={30} />
                      </Button>
                    </Box>
                    <Box
                      m={1}
                      p={2}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="md"
                      align="center"
                    >
                      <Button onClick={nextTrack} width="100%">
                        <BsSkipEndFill color="red" size={30} />
                      </Button>
                    </Box>
                  </SimpleGrid>
                ) : (
                  <SimpleGrid
                    columns={2}
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    p={4}
                  >
                    <Box
                      m={1}
                      p={2}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="md"
                      align="center"
                    >
                      <Button
                        onClick={play}
                        isDisabled={userCanEdit ? false : true}
                        width="100%"
                      >
                        <FaPlay color="green" size={20} />
                      </Button>
                    </Box>
                    <Box
                      m={1}
                      p={2}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="md"
                      align="center"
                    >
                      <Button
                        onClick={pause}
                        isDisabled={userCanEdit ? false : true}
                        width="100%"
                      >
                        <FaPause color="darkOrange" size={20} />
                      </Button>
                    </Box>

                    <Box
                      m={1}
                      p={2}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="md"
                      align="center"
                    >
                      <Button
                        onClick={prevTrack}
                        isDisabled={userCanEdit ? false : true}
                        width="100%"
                      >
                        <BsFillSkipStartFill color="red" size={30} />
                      </Button>
                    </Box>
                    <Box
                      m={1}
                      p={2}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="md"
                      align="center"
                    >
                      <Button
                        onClick={nextTrack}
                        isDisabled={userCanEdit ? false : true}
                        width="100%"
                      >
                        <BsSkipEndFill color="red" size={30} />
                      </Button>
                    </Box>
                  </SimpleGrid>
                )}
              </Box>
            </GridItem>
          )}
        </SpotifyUserControlsConsumer>
      )}
    </AuthConsumer>
  )
}
