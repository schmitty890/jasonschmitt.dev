import React, { Component } from "react"
// import { listGithubRepos, test } from "../api/github"
import { getPlaylists, getPlaylistTracks, test } from "../api/spotify"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class SpotifyCurrentPlaylistProvider extends Component {
  state = {
    test: "ourTextExample",
    currentPlaylistTracks: [],
  }

  componentDidMount() {
    this.getData()
    // updateCurrentSong()
    // this.getNewSong()

    this.getTracks()
  }

  getTracks = async () => {
    setInterval(async () => {
      const getCurrentPlaylists = await getPlaylists()
      // console.log("GETTING PLAYLISTSSSS")
      // console.log(getCurrentPlaylists.items[0].id)
      // console.log(getCurrentPlaylists.items[0].tracks.total)
      const getCurrentPlaylistTracks = await getPlaylistTracks(
        getCurrentPlaylists.items[0].id
      )
      // console.log(getCurrentPlaylistTracks)
      this.setState({
        currentPlaylistTracks: getCurrentPlaylistTracks.body.tracks.items.reverse(),
      })
    }, 1000)
  }

  getData = async () => {
    const testHere = await test()
    console.log(testHere)
    this.setState({ test: testHere.data })
  }

  render() {
    return (
      <Provider
        value={{
          test: this.state.test,
          currentPlaylistTracks: this.state.currentPlaylistTracks,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export {
  SpotifyCurrentPlaylistProvider,
  Consumer as SpotifyCurrentPlaylistConsumer,
}
