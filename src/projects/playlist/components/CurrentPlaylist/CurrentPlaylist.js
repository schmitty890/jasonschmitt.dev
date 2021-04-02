import React from "react"
import {
  GridItem,
  Text,
  Divider,
  Flex,
  Avatar,
  Box,
  Spinner,
  SkeletonCircle,
} from "@chakra-ui/react"
import {
  SpotifyCurrentPlaylistProvider,
  SpotifyCurrentPlaylistConsumer,
} from "../../contexts/SpotifyCurrentPlaylistContext"

const CurrentPlaylist = () => {
  return (
    <SpotifyCurrentPlaylistProvider>
      <SpotifyCurrentPlaylistConsumer>
        {({ test, currentPlaylistTracks }) => (
          <GridItem
            rowSpan={1}
            colSpan={{ base: 12, md: 4 }}
            bg={{ base: "white" }}
            p={4}
          >
            <Text fontSize="md" mb="3">
              Current playlist
            </Text>
            <Divider mb="3" />

            {currentPlaylistTracks.map((item, index) => (
              <Flex mb="3" key={index}>
                <Avatar
                  src={item.track.album.images[2].url}
                  alt={item.track.album.name}
                  loading="eager"
                  icon={<SkeletonCircle size="12" />}
                />
                <Box ml="3">
                  <Text fontWeight="bold">{item.track.name}</Text>
                  <Text fontSize="sm">{item.track.album.name}</Text>
                  <Text fontSize="xs">{item.added_at}</Text>
                </Box>
              </Flex>
            ))}
          </GridItem>
        )}
      </SpotifyCurrentPlaylistConsumer>
    </SpotifyCurrentPlaylistProvider>
  )
}

export default CurrentPlaylist
