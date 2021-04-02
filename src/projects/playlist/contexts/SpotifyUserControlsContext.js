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
    canEdit: Boolean,
    canEditPlay: Boolean,
    canEditPause: Boolean,
    canEditSkip: Boolean,
    canEditSearch: Boolean,
  }

  componentDidMount() {
    this.getuserCanEditValue()
  }

  getuserCanEditValue = async () => {
    // get value if user can edit from db and set it to the state
    setInterval(async () => {
      const usersCanEdit = await getUserCanEditBoolean()

      const userData = usersCanEdit.data[0]

      this.setState({
        canEdit: userData.canEdit,
        canEditPlay: userData.canEditPlay,
        canEditPause: userData.canEditPause,
        canEditSkip: userData.canEditSkip,
        canEditSearch: userData.canEditSearch,
      })
    }, 1000)
    setInterval(async () => {
      console.log("CURRENT STATE")
      console.log(this.state)
    }, 1000)
  }

  createPlaylist = async () => {
    createPlaylist()
  }

  toggleUserCanEdit = value => {
    // console.log(value)
    // console.log(value.nativeEvent.target.name)
    const stateName = value.nativeEvent.target.name
    const isChecked = value.nativeEvent.target.checked
    console.log(stateName + " " + isChecked)

    console.log("setting state")
    // this.setState({ [stateName]: isChecked })
    // this.setState({ canEdit: false })
    this.setState({ ...this.state[stateName], [stateName]: isChecked }, () => {
      updateUserCanEditBoolean(this.state)
    })

    // const updateState = { ...this.state, [stateName]: isChecked }
    // this.setState(() => updateState)

    // console.log("new state")
    // console.log(this.state)

    // const userEditObj = {
    //   canEdit: true,
    //   canEditPlay: true,
    // }

    // updateUserCanEditBoolean(this.state)
  }

  play = async () => {
    const result = await play()
    console.log(result)
    return result
  }

  pause = async () => {
    const result = await pause()
    console.log(result)
    return result
  }

  nextTrack = async () => {
    const result = await nextTrack()
    console.log(result)
    return result
  }

  prevTrack = async () => {
    const result = await prevTrack()
    console.log(result)
    return result
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
          userCanEdit: this.state.canEdit,
          userCanPlay: this.state.canEditPlay,
          userCanPause: this.state.canEditPause,
          userCanSkip: this.state.canEditSkip,
          userCanSearch: this.state.canEditSearch,
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
