import React from "react"
import Main from "../../../projects/playlist/components/Main/Main"
import { ChakraProvider } from "@chakra-ui/react"
import { AuthProvider } from "../../../projects/test/contexts/AuthContext"
import { SpotifyNowPlayingProvider } from "../../../projects/playlist/contexts/SpotifyNowPlayingContext"

export default function Playlist() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <SpotifyNowPlayingProvider>
          <Main />
        </SpotifyNowPlayingProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}
