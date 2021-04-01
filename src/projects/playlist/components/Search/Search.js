import React from "react"
import SearchResults from "../SearchResults/SearchResults"
import { GridItem, Text, Input, Box } from "@chakra-ui/react"
import {
  SpotifySearchProvider,
  SpotifySearchConsumer,
} from "../../contexts/SpotifySearchContext"
import { SpotifyUserControlsConsumer } from "../../contexts/SpotifyUserControlsContext"

const Search = () => {
  return (
    <SpotifySearchProvider>
      <SpotifySearchConsumer>
        {({ searchResults, getSearchResults, test }) => (
          <SpotifyUserControlsConsumer>
            {({ userCanEdit, userCanSearch }) => (
              <GridItem
                rowSpan={1}
                colSpan={{ base: 12, md: 8 }}
                bg={{ base: "white" }}
                p={4}
                justifyContent={"center"}
              >
                <Input
                  placeholder="Search for a song to add to the playlist"
                  isDisabled={
                    userCanEdit ? false : userCanSearch ? false : true
                  }
                  onChange={getSearchResults}
                />
                <SearchResults />
              </GridItem>
            )}
          </SpotifyUserControlsConsumer>
        )}
      </SpotifySearchConsumer>
    </SpotifySearchProvider>
  )
}

export default Search
