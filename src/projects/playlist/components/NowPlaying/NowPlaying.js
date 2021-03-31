import React from "react"
import {
  GridItem,
  Flex,
  Grid,
  Text,
  Image,
  Box,
  Badge,
  Link,
  Progress,
} from "@chakra-ui/react"
import { SocialIcon } from "react-social-icons"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { SpotifyNowPlayingConsumer } from "../../contexts/SpotifyNowPlayingContext"

const NowPlaying = () => {
  return (
    <SpotifyNowPlayingConsumer>
      {({
        isLoading,
        isPlaying,
        currentSong,
        currentSongImage,
        currentAlbumName,
        currentPreviewURL,
        currentSongReleaseDate,
        currentSongProgress,
      }) => (
        <GridItem
          rowSpan={1}
          colSpan={{ base: 12 }}
          bg={{ base: "white" }}
          p={4}
          justifyContent={"center"}
          display={"inline-flex"}
        >
          <Flex ml={3}>
            {isLoading ? (
              <Text>Loading or waiting for music...</Text>
            ) : isPlaying ? (
              <Flex>
                <Image
                  src={currentSongImage}
                  alt="song"
                  style={{ border: "1px solid black", height: "50px" }}
                  ml={3}
                ></Image>
                <Box ml="3">
                  <Text fontWeight="bold">
                    {currentSong}

                    <Badge ml="1" colorScheme="green">
                      Currently Playing
                    </Badge>
                  </Text>
                  <Text fontSize="sm">album: {currentAlbumName}</Text>
                  <Link fontSize="sm" href={currentPreviewURL} isExternal>
                    preview song
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                  <Text fontSize="sm">
                    release date: {currentSongReleaseDate}
                  </Text>
                  <Progress
                    value={currentSongProgress}
                    size="xs"
                    colorScheme="green"
                    isAnimated
                    hasStripe
                  />
                </Box>
              </Flex>
            ) : (
              <Flex>
                <Image
                  src={currentSongImage}
                  alt="song"
                  style={{ border: "1px solid black", height: "50px" }}
                  ml={3}
                ></Image>
                <Box ml="3">
                  <Text fontWeight="bold">
                    {currentSong}

                    <Badge ml="1" colorScheme="red">
                      Paused
                    </Badge>
                  </Text>
                  <Text fontSize="sm">album: {currentAlbumName}</Text>
                  <Link fontSize="sm" href={currentPreviewURL} isExternal>
                    preview song
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                  <Text fontSize="sm">
                    release date: {currentSongReleaseDate}
                  </Text>
                  <Progress
                    value={currentSongProgress}
                    size="xs"
                    colorScheme="red"
                  />
                </Box>
              </Flex>
            )}
          </Flex>
        </GridItem>
      )}
    </SpotifyNowPlayingConsumer>
  )
}

export default NowPlaying
