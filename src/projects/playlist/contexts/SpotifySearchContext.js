import React, { Component } from "react"
import { searchTracks, getPlaylists, addToPlaylist } from "../api/spotify"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class SpotifySearchProvider extends Component {
  state = {
    searchResults: "",
  }

  getSearchResults = async value => {
    // console.log("get search")
    // console.log(value.nativeEvent.target.value)
    const searchValue = value.nativeEvent.target.value
    // make axios call to get results
    const searchResults = await searchTracks(searchValue)
    // console.log(searchResults.tracks)
    if (
      searchResults.tracks == undefined ||
      searchResults.tracks.items.length == 0
    ) {
      this.setState({ searchResults: "" })
    } else {
      this.setState({ searchResults: searchResults.tracks.items })
    }
  }

  addTrackToPlaylist = async value => {
    const latestPlaylist = await getPlaylists()
    // console.log(latestPlaylist.items[0].id)
    console.log(latestPlaylist)

    // console.log(
    //   "add track to playlist " +
    //     value.nativeEvent.target.getAttribute("spotifyURI")
    // )
    addToPlaylist(
      latestPlaylist.items[0].id,
      value.nativeEvent.target.getAttribute("spotifyURI")
    )
  }

  render() {
    return (
      <Provider
        value={{
          searchResults: this.state.searchResults,
          getSearchResults: this.getSearchResults,
          addTrackToPlaylist: this.addTrackToPlaylist,
          test: "testing",
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { SpotifySearchProvider, Consumer as SpotifySearchConsumer }
