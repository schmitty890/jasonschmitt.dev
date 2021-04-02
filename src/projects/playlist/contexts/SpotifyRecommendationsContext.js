import React, { Component } from "react"
// import { listGithubRepos, test } from "../api/github"
import {
  getPlaylists,
  getPlaylistTracks,
  getRecommendations,
  addToPlaylist,
  test,
} from "../api/spotify"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class SpotifyRecommendationsProvider extends Component {
  state = {
    test: "ourTextExample",
    recommendedTracks: [],
  }

  componentDidMount() {
    this.getData()
    // updateCurrentSong()
    // this.getNewSong()

    this.getTracks()
    this.getNewTracks()
  }

  getTracks = async () => {
    // setInterval(async () => {
    const getCurrentPlaylists = await getPlaylists()
    console.log("GETTING PLAYLISTSSSS")
    console.log(getCurrentPlaylists.items[0])
    // console.log(getCurrentPlaylists.items[0].tracks.total)
    const getCurrentPlaylistTracks = await getPlaylistTracks(
      getCurrentPlaylists.items[0].id
    )
    console.log(getCurrentPlaylistTracks)
    let arrayOfSongIds = []
    const randomNumber = Math.floor(
      Math.random() * getCurrentPlaylistTracks.body.tracks.items.length
    )

    console.log(randomNumber)

    for (
      var i = 0;
      i < getCurrentPlaylistTracks.body.tracks.items.length;
      i++
    ) {
      // if (a[i] == 1) a.push(5);
      // console.log(a[i]);
      console.log(getCurrentPlaylistTracks.body.tracks.items[i])
      if (i == randomNumber) {
        arrayOfSongIds.push(
          getCurrentPlaylistTracks.body.tracks.items[i].track.artists[0].id
        )
      }
    }

    // getCurrentPlaylistTracks.body.tracks.items.forEach(song => {
    //   debugger
    //   console.log(song.track.id)

    //   // arrayOfSongIds.push(song.tracks.id)
    // })

    console.log(arrayOfSongIds)
    const getRecommendationTracks = await getRecommendations(arrayOfSongIds)
    console.log(getRecommendationTracks)

    this.setState({
      recommendedTracks: getRecommendationTracks,
    })
    // }, 300000) // 5 minutes in ms
  }

  getNewTracks = async => {
    setInterval(async () => {
      this.getTracks()
    }, 300000) // 5 minutes in ms
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
    console.log("addingSong")
    console.log(addingSong)
    if (addingSong.statusCode === 201) {
      return { msg: "Song added", status: "success" }
    } else {
      return { msg: "Something went wrong", status: "error" }
    }
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
          recommendedTracks: this.state.recommendedTracks,
          addTrackToPlaylist: this.addTrackToPlaylist,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export {
  SpotifyRecommendationsProvider,
  Consumer as SpotifyRecommendationsConsumer,
}
