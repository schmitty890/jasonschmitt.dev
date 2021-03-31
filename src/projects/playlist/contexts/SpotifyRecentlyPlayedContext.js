import React, { Component } from "react"
// import { listGithubRepos, test } from "../api/github"
import { recentlyPlayed, test } from "../api/spotify"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class SpotifyRecentlyPlayedProvider extends Component {
  state = {
    test: "ourTextExample",
    recentlyPlayedSongs: [],
  }

  componentDidMount() {
    this.getData()
    // updateCurrentSong()
    // this.getNewSong()

    this.recentlyPlayed()
  }

  recentlyPlayed = async () => {
    setInterval(async () => {
      const recentlyPlayedSongData = await recentlyPlayed()
      console.log(recentlyPlayedSongData)
      this.setState({ recentlyPlayedSongs: recentlyPlayedSongData })
    }, 1000)
    // setInterval(async () => {
    //   const songData = await getCurrentPlaybackState()
    //   console.log(songData)
    //   if (songData !== null) {
    //     // console.log(songData.progress_ms)
    //     // console.log(songData.item.duration_ms)
    //     let progress = (songData.progress_ms / songData.item.duration_ms) * 100
    //     // if (songData.is_playing) {
    //     // progress = (songData.progress_ms / songData.item.duration_ms) * 100
    //     // }
    //     // console.log(progress)
    //     console.log("set state here")
    //     this.setState({
    //       isLoading: false,
    //       isPlaying: songData.is_playing,
    //       currentSong: songData.item.name,
    //       currentSongImage: songData.item.album.images[2].url,
    //       currentAlbumName: songData.item.album.name,
    //       currentPreviewURL: songData.item.preview_url,
    //       currentSongProgress: progress,
    //       currentSongReleaseDate: dayjs(
    //         songData.item.album.release_date
    //       ).fromNow(),
    //     })
    //   }
    // }, 1000)
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
          recentlyPlayedSongs: this.state.recentlyPlayedSongs,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export {
  SpotifyRecentlyPlayedProvider,
  Consumer as SpotifyRecentlyPlayedConsumer,
}
