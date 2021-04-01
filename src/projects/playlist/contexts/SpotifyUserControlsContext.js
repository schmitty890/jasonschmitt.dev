import React, { Component } from "react"
import {
  updateUserCanEditBoolean,
  getUserCanEditBoolean,
  createPlaylist,
  play,
  pause,
  nextTrack,
  prevTrack,
  recentlyPlayed,
  removeSongFromPlaylist,
} from "../api/spotify"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class SpotifyUserControlsProvider extends Component {
  state = {
    userCanEdit: Boolean,
  }

  componentDidMount() {
    this.getuserCanEditValue()
  }

  getuserCanEditValue = async () => {
    // get value if user can edit from db and set it to the state
    setInterval(async () => {
      const usersCanEdit = await getUserCanEditBoolean()
      console.log(usersCanEdit.data[0].canEdit)

      this.setState({ userCanEdit: usersCanEdit.data[0].canEdit })
    }, 1000)
  }

  createPlaylist = async () => {
    createPlaylist()
  }

  toggleUserCanEdit = value => {
    const isChecked = value.nativeEvent.target.checked
    console.log(isChecked)
    this.setState({ userCanEdit: isChecked })
    updateUserCanEditBoolean(isChecked)
  }

  play = async () => {
    play()
  }

  pause = async () => {
    pause()
  }

  nextTrack = async () => {
    nextTrack()
  }

  prevTrack = async () => {
    prevTrack()
  }

  removeTrackAfterPlayed = async () => {
    // TODO: havent figured this out yet
    //get the last played track by id from recentlyPlayed()
    // const lastPlayedTrackId = await recentlyPlayed()
    // console.log(lastPlayedTrackId)
    // // var tracks = [{ uri : "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" }];
    // var tracks = [{ uri: lastPlayedTrackId[0].track.uri }]
    // // var playlistId = '5ieJqeLJjjI8iJWaxeBLuK';
    // var playlistId = lastPlayedTrackId[0].context.uri
    // // var options = { snapshot_id : "0wD+DKCUxiSR/WY8lF3fiCTb7Z8X4ifTUtqn8rO82O4Mvi5wsX8BsLj7IbIpLVM9" };
    // { uri : "spotify:track:491rM2JN8KvmV6p0oDDuJT", positions : [0, 15] }
    // var options = {uri: lastPlayedTrackId[0].track.uri, positions: []}
    // // remove all instances of song from playlist by id
    // removeSongFromPlaylist(tracks, playlistId)
  }

  render() {
    return (
      <Provider
        value={{
          toggleUserCanEdit: this.toggleUserCanEdit,
          userCanEdit: this.state.userCanEdit,
          createPlaylist: this.createPlaylist,
          play: this.play,
          pause: this.pause,
          nextTrack: this.nextTrack,
          prevTrack: this.prevTrack,
          removeTrackAfterPlayed: this.removeTrackAfterPlayed,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { SpotifyUserControlsProvider, Consumer as SpotifyUserControlsConsumer }
