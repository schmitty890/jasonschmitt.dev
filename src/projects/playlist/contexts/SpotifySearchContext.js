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
    // console.log(value)
    // console.log(value.nativeEvent.target.value)
    let searchValue = ""
    let searchResults = ""
    if (value != undefined) {
      searchValue = value.nativeEvent.target.value
      // make axios call to get results
      searchResults = await searchTracks(searchValue)
    } else {
      searchValue = ""
    }
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
    const addingSong = await addToPlaylist(
      latestPlaylist.items[0].id,
      value.nativeEvent.target.getAttribute("spotifyURI")
    )
    console.log("addingSong!!!!!!!!!!!!!!")
    console.log(addingSong)
    if (addingSong.statusCode === 201) {
      return { msg: "Song added", status: "success" }
    } else {
      return { msg: "Something went wrong", status: "error" }
    }
  }

  clearForm = async () => {
    console.log("clearform")
    document.getElementById("search").value = ""
    this.getSearchResults()
  }

  render() {
    return (
      <Provider
        value={{
          searchResults: this.state.searchResults,
          getSearchResults: this.getSearchResults,
          addTrackToPlaylist: this.addTrackToPlaylist,
          clearForm: this.clearForm,
          test: "testing",
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { SpotifySearchProvider, Consumer as SpotifySearchConsumer }
