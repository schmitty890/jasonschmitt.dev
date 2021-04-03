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
  Grid,
} from "@chakra-ui/react"
import {
  SpotifyRecentlyPlayedProvider,
  SpotifyRecentlyPlayedConsumer,
} from "../../contexts/SpotifyRecentlyPlayedContext"

const RecentlyPlayed = () => {
  return (
    <SpotifyRecentlyPlayedProvider>
      <SpotifyRecentlyPlayedConsumer>
        {({ test, recentlyPlayedSongs }) => (
          <GridItem
            rowSpan={1}
            colSpan={{ base: 12 }}
            bg={{ base: "white" }}
            p={4}
          >
            <Text fontSize="md" mb="3">
              Recently played
            </Text>
            <Divider mb="3" />
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
              gap={6}
            >
              {recentlyPlayedSongs.slice(0, 3).map((item, index) => (
                <Box ml="3" key={index}>
                  <Text fontWeight="bold">{item.track.name}</Text>
                  <Text fontSize="sm">{item.track.album.name}</Text>
                  <Text fontSize="xs">{item.played_at}</Text>
                </Box>
              ))}
            </Grid>
          </GridItem>
        )}
      </SpotifyRecentlyPlayedConsumer>
    </SpotifyRecentlyPlayedProvider>
  )
}

export default RecentlyPlayed
