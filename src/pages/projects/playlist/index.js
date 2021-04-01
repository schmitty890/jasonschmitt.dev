import React from "react"
import Main from "../../../projects/playlist/components/Main/Main"
import { ChakraProvider } from "@chakra-ui/react"
import { AuthProvider } from "../../../projects/test/contexts/AuthContext"
import { SpotifyNowPlayingProvider } from "../../../projects/playlist/contexts/SpotifyNowPlayingContext"
import { SpotifyUserControlsProvider } from "../../../projects/playlist/contexts/SpotifyUserControlsContext"

export default function Playlist() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <SpotifyNowPlayingProvider>
          <SpotifyUserControlsProvider>
            <Main />
          </SpotifyUserControlsProvider>
        </SpotifyNowPlayingProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}
