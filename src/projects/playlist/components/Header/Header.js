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
  Wrap,
  WrapItem,
  Center,
  useToast,
} from "@chakra-ui/react"
import { AuthConsumer } from "../../../../projects/test/contexts/AuthContext"
import { SpotifyUserControlsConsumer } from "../../contexts/SpotifyUserControlsContext"
import { useForm } from "react-hook-form"
import { FaPlay, FaPause, FaUserEdit, FaSearch } from "react-icons/fa"
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
  const toast = useToast()

  return (
    <AuthConsumer>
      {({ user }) => (
        <SpotifyUserControlsConsumer>
          {({
            userCanEdit,
            userCanPlay,
            userCanPause,
            userCanSkip,
            userCanSearch,
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
                      <Wrap>
                        <WrapItem>
                          <Center
                            border="1px"
                            borderColor="gray.200"
                            borderRadius="md"
                            p={1}
                          >
                            <FaUserEdit color="gray" size={20} />
                            <Switch
                              ref={register}
                              colorScheme="cyan"
                              name="canEdit"
                              isChecked={userCanEdit}
                              onChange={toggleUserCanEdit}
                            />
                          </Center>
                        </WrapItem>
                        <WrapItem>
                          <Center
                            border="1px"
                            borderColor="gray.200"
                            borderRadius="md"
                            p={1}
                          >
                            <FaPlay color="green" size={20} />
                            <Switch
                              ref={register}
                              colorScheme="cyan"
                              name="canEditPlay"
                              isChecked={userCanPlay}
                              onChange={toggleUserCanEdit}
                            />
                          </Center>
                        </WrapItem>
                        <WrapItem>
                          <Center
                            border="1px"
                            borderColor="gray.200"
                            borderRadius="md"
                            p={1}
                          >
                            <FaPause color="darkOrange" size={20} />
                            <Switch
                              name="canEditPause"
                              ref={register}
                              colorScheme="cyan"
                              isChecked={userCanPause}
                              onChange={toggleUserCanEdit}
                            />
                          </Center>
                        </WrapItem>
                        <WrapItem>
                          <Center
                            border="1px"
                            borderColor="gray.200"
                            borderRadius="md"
                            p={1}
                          >
                            <BsFillSkipStartFill color="red" size={30} />
                            <BsSkipEndFill color="red" size={30} />
                            <Switch
                              name="canEditSkip"
                              ref={register}
                              colorScheme="cyan"
                              isChecked={userCanSkip}
                              onChange={toggleUserCanEdit}
                            />
                          </Center>
                        </WrapItem>
                        <WrapItem>
                          <Center
                            border="1px"
                            borderColor="gray.200"
                            borderRadius="md"
                            p={1}
                          >
                            <FaSearch color="gray" size={30} />

                            <Switch
                              name="canEditSearch"
                              ref={register}
                              colorScheme="cyan"
                              isChecked={userCanSearch}
                              onChange={toggleUserCanEdit}
                            />
                          </Center>
                        </WrapItem>
                      </Wrap>
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
                      <Button
                        onClick={e =>
                          play().then(res => {
                            console.log(res)
                            if (res.status == "error") {
                              toast({
                                title: `${res.msg}`,
                                status: res.status,
                                isClosable: true,
                                duration: 3000,
                              })
                            } else if (res.status == "success") {
                              toast({
                                title: `${res.msg}`,
                                status: res.status,
                                isClosable: true,
                                duration: 3000,
                              })
                            }
                          })
                        }
                        width="100%"
                        isDisabled={
                          userCanEdit ? false : userCanPlay ? false : true
                        }
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
                        onClick={e =>
                          pause().then(res => {
                            console.log(res)
                            if (res.status == "error") {
                              toast({
                                title: `${res.msg}`,
                                status: res.status,
                                isClosable: true,
                                duration: 3000,
                              })
                            } else if (res.status == "success") {
                              toast({
                                title: `${res.msg}`,
                                status: res.status,
                                isClosable: true,
                                duration: 3000,
                              })
                            }
                          })
                        }
                        width="100%"
                        isDisabled={
                          userCanEdit ? false : userCanPause ? false : true
                        }
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
                        onClick={e =>
                          prevTrack().then(res => {
                            console.log(res)
                            if (res.status == "error") {
                              toast({
                                title: `${res.msg}`,
                                status: res.status,
                                isClosable: true,
                                duration: 3000,
                              })
                            } else if (res.status == "success") {
                              toast({
                                title: `${res.msg}`,
                                status: res.status,
                                isClosable: true,
                                duration: 3000,
                              })
                            }
                          })
                        }
                        width="100%"
                        isDisabled={
                          userCanEdit ? false : userCanSkip ? false : true
                        }
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
                        onClick={e =>
                          nextTrack().then(res => {
                            console.log(res)
                            if (res.status == "error") {
                              toast({
                                title: `${res.msg}`,
                                status: res.status,
                                isClosable: true,
                                duration: 3000,
                              })
                            } else if (res.status == "success") {
                              toast({
                                title: `${res.msg}`,
                                status: res.status,
                                isClosable: true,
                                duration: 3000,
                              })
                            }
                          })
                        }
                        width="100%"
                        isDisabled={
                          userCanEdit ? false : userCanSkip ? false : true
                        }
                      >
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
                        onClick={e =>
                          play().then(res => {
                            console.log(res)
                            if (res.status == "error") {
                              toast({
                                title: `${res.msg}`,
                                status: res.status,
                                isClosable: true,
                                duration: 3000,
                              })
                            } else if (res.status == "success") {
                              toast({
                                title: `${res.msg}`,
                                status: res.status,
                                isClosable: true,
                                duration: 3000,
                              })
                            }
                          })
                        }
                        isDisabled={
                          userCanEdit ? false : userCanPlay ? false : true
                        }
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
                        onClick={e =>
                          pause().then(res => {
                            console.log(res)
                            if (res.status == "error") {
                              toast({
                                title: `${res.msg}`,
                                status: res.status,
                                isClosable: true,
                                duration: 3000,
                              })
                            } else if (res.status == "success") {
                              toast({
                                title: `${res.msg}`,
                                status: res.status,
                                isClosable: true,
                                duration: 3000,
                              })
                            }
                          })
                        }
                        isDisabled={
                          userCanEdit ? false : userCanPause ? false : true
                        }
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
                        onClick={e =>
                          prevTrack().then(res => {
                            console.log(res)
                            if (res.status == "error") {
                              toast({
                                title: `${res.msg}`,
                                status: res.status,
                                isClosable: true,
                                duration: 3000,
                              })
                            } else if (res.status == "success") {
                              toast({
                                title: `${res.msg}`,
                                status: res.status,
                                isClosable: true,
                                duration: 3000,
                              })
                            }
                          })
                        }
                        isDisabled={
                          userCanEdit ? false : userCanSkip ? false : true
                        }
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
                        onClick={e =>
                          nextTrack().then(res => {
                            console.log(res)
                            if (res.status == "error") {
                              toast({
                                title: `${res.msg}`,
                                status: res.status,
                                isClosable: true,
                                duration: 3000,
                              })
                            } else if (res.status == "success") {
                              toast({
                                title: `${res.msg}`,
                                status: res.status,
                                isClosable: true,
                                duration: 3000,
                              })
                            }
                          })
                        }
                        isDisabled={
                          userCanEdit ? false : userCanSkip ? false : true
                        }
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
