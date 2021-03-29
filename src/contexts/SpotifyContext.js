import React, { Component } from "react"
// import { listGithubRepos, test } from "../api/github"
import { getCurrentPlaybackState, test } from "../api/spotify"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class SpotifyProvider extends Component {
  state = {
    uiRepoLastUpdated: "a day ago",
    apiRepoLastUpdated: "a day ago",
    test: "ourTextExample",
    currentSong: "",
    currentSongImage: "",
    currentAlbumName: "",
    currentPreviewURL: "",
    currentSongProgress: "",
    currentSongReleaseDate: "",
    isPlaying: false,
  }

  componentDidMount() {
    this.getData()
    // updateCurrentSong()
    // this.getNewSong()

    this.currentPlaybackState()
  }

  currentPlaybackState = async () => {
    setInterval(async () => {
      const songData = await getCurrentPlaybackState()
      console.log(songData)
      // console.log(songData.progress_ms)
      // console.log(songData.item.duration_ms)
      console.log(
        (songData.progress_ms / songData.item.duration_ms) * 100 +
          "% of song complmete"
      )
      console.log("set state here")
      this.setState({
        isPlaying: songData.is_playing,
        currentSong: songData.item.name,
        currentSongImage: songData.item.album.images[2].url,
        currentAlbumName: songData.item.album.name,
        currentPreviewURL: songData.item.preview_url,
        currentSongProgress:
          (songData.progress_ms / songData.item.duration_ms) * 100,
        currentSongReleaseDate: dayjs(
          songData.item.album.release_date
        ).fromNow(),
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
          uiRepoLastUpdated: this.state.uiRepoLastUpdated,
          apiRepoLastUpdated: this.state.apiRepoLastUpdated,
          test: this.state.test,
          isPlaying: this.state.isPlaying,
          currentSong: this.state.currentSong,
          currentSongImage: this.state.currentSongImage,
          currentAlbumName: this.state.currentAlbumName,
          currentPreviewURL: this.state.currentPreviewURL,
          currentSongProgress: this.state.currentSongProgress,
          currentSongReleaseDate: this.state.currentSongReleaseDate,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { SpotifyProvider, Consumer as SpotifyConsumer }
