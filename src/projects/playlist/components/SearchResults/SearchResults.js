import React from "react"
import {
  GridItem,
  Text,
  Button,
  Input,
  Box,
  Flex,
  Grid,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Image,
  useToast,
} from "@chakra-ui/react"

import { SpotifySearchConsumer } from "../../contexts/SpotifySearchContext"

const SearchResults = () => {
  function addSong(e) {
    console.log("add song")
    console.log(e.target.value)
  }
  const toast = useToast()
  return (
    <SpotifySearchConsumer>
      {({ searchResults, getSearchResults, addTrackToPlaylist }) => (
        <GridItem
          rowSpan={1}
          colSpan={{ base: 12, md: 8 }}
          bg={{ base: "white" }}
          p={4}
          justifyContent={"center"}
          // display={"inline-flex"}
        >
          {searchResults ? (
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th display={{ base: "none", md: "block" }}>Image</Th>
                  <Th>Song</Th>
                  <Th>Add</Th>
                </Tr>
              </Thead>
              <Tbody>
                {searchResults.map((item, index) => (
                  <Tr>
                    <Td display={{ base: "none", md: "table-cell" }}>
                      <Image
                        src={item.album.images[2].url}
                        alt="song"
                        style={{ border: "1px solid black", height: "30px" }}
                      ></Image>
                    </Td>

                    <Td>{item.name}</Td>
                    <Td>
                      <Button
                        colorScheme="teal"
                        variant="outline"
                        spotifyURI={item.uri}
                        onClick={e =>
                          addTrackToPlaylist(e).then(res => {
                            console.log(res)
                            toast({
                              title: `${res.msg}`,
                              status: res.status,
                              isClosable: true,
                              duration: 3000,
                            })
                          })
                        }
                      >
                        Add
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          ) : (
            <Text>Search results here...</Text>
          )}
        </GridItem>
      )}
    </SpotifySearchConsumer>
  )
}

export default SearchResults
