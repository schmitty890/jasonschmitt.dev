import axios from "axios"
import dayjs from "dayjs"
import SpotifyWebApi from "spotify-web-api-node"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)
var spotifyApi = new SpotifyWebApi()

const getAndSetTokenToMakeCallsToSpotifyAPI = async () => {
  let URL =
    window.location.hostname === "localhost"
      ? "http://localhost:8081"
      : "https://jasonschmitt-dev-api-9w29o.ondigitalocean.app"
  // console.log(URL)

  // fetch data from a url endpoint
  const token = await axios.get(`${URL}/getCurrentToken`)
  // console.log("token response")
  // console.log(token.data[0].token)
  const theCurrentToken = token.data[0].token
  // const theCurrentToken =
  //   "BQCyKZTJ73qC3axYWHACUby_Gy3hx3eR7lcL2YnwJ5vtYfJa2pCDddunM56nigqvxqF6XYbjzljGDN3qV_XXRm6BHBv2XGMdpgtW2wMnxnJ1m42iWIvPc3k-puq24y3bv5V0LoXFB1mqbkKRISXgUZo2Wwz-6e6EJe1oZg6nfFlMdNcVDIqesSuSDFmzVZ_WFYfSBzseMritP-ruaFZit8mcyo8XVMeUvdJi3C-qKithAFCKNBw-UbWlvhtlgG9oTieZyEXISptXrJRQiqDvGr5pOLX6ldcFOw"
  // make api call to get token from db here so we can set the access token
  spotifyApi.setAccessToken(theCurrentToken)
}

export const test = async () => {
  const dataObj = {
    data: "test",
  }
  return dataObj
}

export const updateUserCanEditBoolean = async val => {
  // console.log(`from updateUserCanEditBoolean function post to db: ${val}`)
  const dataObj = {
    canEdit: val,
  }
  // console.log(dataObj)
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://jasonschmitt-dev-api-9w29o.ondigitalocean.app"
    // post data to a url endpoint
    const response = await axios.post(`${baseURL}/postCanUsersEdit`, dataObj)
    // console.log(response)
  } catch (error) {
    // console.log(error) // catches both errors
  }
}

export const getUserCanEditBoolean = async () => {
  // console.log("getUserCanEditBoolean")
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://jasonschmitt-dev-api-9w29o.ondigitalocean.app"
    // post data to a url endpoint
    const response = await axios.get(`${baseURL}/getCanUsersEdit`)
    // console.log(response)
    return response
  } catch (error) {
    // console.log(error) // catches both errors
  }
}

export const getCurrentPlaybackState = async () => {
  await getAndSetTokenToMakeCallsToSpotifyAPI()

  // Get Information About The User's Current Playback State
  const response = await spotifyApi.getMyCurrentPlaybackState().then(
    function (data) {
      console.log(data.body)
      // Output items
      if (data.body && data.body.is_playing) {
        // console.log("User is currently playing something!")
      } else {
        // console.log("User is not playing anything, or doing so in private.")
      }
      return data.body
    },
    function (err) {
      // console.log("Something went wrong!", err)
    }
  )
  return response
}

export const searchTracks = async search => {
  await getAndSetTokenToMakeCallsToSpotifyAPI()
  // Search tracks whose name, album or artist contains 'Love'
  const response = await spotifyApi.searchTracks(search).then(
    function (data) {
      console.log(`Search by ${search}`, data.body)
      return data.body
    },
    function (err) {
      console.error(err)
      return err
    }
  )
  return response
}

export const createPlaylist = async () => {
  await getAndSetTokenToMakeCallsToSpotifyAPI()
  // Get a user's playlists
  // Create a private playlist

  const response = await spotifyApi
    .createPlaylist("jasonsProjects Playlist", {
      description: "My description",
      public: true,
    })
    .then(
      function (data) {
        console.log("Created playlist!")
      },
      function (err) {
        console.log("Something went wrong!", err)
      }
    )

  return response
}

export const getPlaylists = async () => {
  await getAndSetTokenToMakeCallsToSpotifyAPI()
  // Get a user's playlists

  const response = await spotifyApi.getUserPlaylists("schmitty890").then(
    function (data) {
      // console.log("Retrieved playlists", data.body)
      return data.body
    },
    function (err) {
      // console.log("Something went wrong!", err)
      return err
    }
  )

  return response
}

export const addToPlaylist = async (playlistId, track) => {
  await getAndSetTokenToMakeCallsToSpotifyAPI()
  // Add tracks to a playlist

  const response = await spotifyApi
    .addTracksToPlaylist(playlistId, [track])
    .then(
      function (data) {
        console.log("Added tracks to playlist!")
        return data
      },
      function (err) {
        console.log("Something went wrong!", err)
        return err
      }
    )

  return response
}

export const play = async () => {
  await getAndSetTokenToMakeCallsToSpotifyAPI()
  // Start/Resume a User's Playback

  const response = await spotifyApi.play().then(
    function () {
      console.log("Playback started")
    },
    function (err) {
      //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
      console.log("Something went wrong!", err)
    }
  )

  return response
}

export const pause = async () => {
  await getAndSetTokenToMakeCallsToSpotifyAPI()
  // Pause a User's Playback

  const response = await spotifyApi.pause().then(
    function () {
      console.log("Playback paused")
    },
    function (err) {
      //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
      console.log("Something went wrong!", err)
    }
  )

  return response
}

export const nextTrack = async () => {
  await getAndSetTokenToMakeCallsToSpotifyAPI()
  // Skip User’s Playback To Next Track

  const response = await spotifyApi.skipToNext().then(
    function () {
      console.log("Skip to next")
    },
    function (err) {
      //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
      console.log("Something went wrong!", err)
    }
  )

  return response
}

export const prevTrack = async () => {
  await getAndSetTokenToMakeCallsToSpotifyAPI()
  // Skip User’s Playback To Previous Track

  const response = await spotifyApi.skipToPrevious().then(
    function () {
      console.log("Skip to previous")
    },
    function (err) {
      //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
      console.log("Something went wrong!", err)
    }
  )

  return response
}

export const recentlyPlayed = async () => {
  await getAndSetTokenToMakeCallsToSpotifyAPI()
  // Get Current User's Recently Played Tracks

  const response = await spotifyApi
    .getMyRecentlyPlayedTracks({
      limit: 20,
    })
    .then(
      function (data) {
        // Output items
        console.log("Your 20 most recently played tracks are:")
        // console.log(data.body.items)
        data.body.items.forEach(item => {
          item.played_at = dayjs(item.played_at).fromNow()
        })
        return data.body.items
      },
      function (err) {
        console.log("Something went wrong!", err)
        return err
      }
    )

  return response
}
