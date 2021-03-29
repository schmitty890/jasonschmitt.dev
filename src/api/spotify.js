import axios from "axios"
import dayjs from "dayjs"
import SpotifyWebApi from "spotify-web-api-node"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

export const test = async () => {
  const dataObj = {
    data: "test",
  }
  return dataObj
}

export const getCurrentPlaybackState = async () => {
  var spotifyApi = new SpotifyWebApi()

  let URL =
    window.location.hostname === "localhost"
      ? "http://localhost:8081"
      : "https://jasonschmitt-dev-api-9w29o.ondigitalocean.app"
  console.log(URL)

  // fetch data from a url endpoint
  const token = await axios.get(`${URL}/getCurrentToken`)
  console.log("token response")
  console.log(token.data[0].token)
  const theCurrentToken = token.data[0].token
  // const theCurrentToken =
  //   "BQCyKZTJ73qC3axYWHACUby_Gy3hx3eR7lcL2YnwJ5vtYfJa2pCDddunM56nigqvxqF6XYbjzljGDN3qV_XXRm6BHBv2XGMdpgtW2wMnxnJ1m42iWIvPc3k-puq24y3bv5V0LoXFB1mqbkKRISXgUZo2Wwz-6e6EJe1oZg6nfFlMdNcVDIqesSuSDFmzVZ_WFYfSBzseMritP-ruaFZit8mcyo8XVMeUvdJi3C-qKithAFCKNBw-UbWlvhtlgG9oTieZyEXISptXrJRQiqDvGr5pOLX6ldcFOw"
  // make api call to get token from db here so we can set the access token
  spotifyApi.setAccessToken(theCurrentToken)

  // Get Information About The User's Current Playback State
  const response = await spotifyApi.getMyCurrentPlaybackState().then(
    function (data) {
      console.log(data.body)
      // Output items
      if (data.body && data.body.is_playing) {
        console.log("User is currently playing something!")
      } else {
        console.log("User is not playing anything, or doing so in private.")
      }
      return data.body
    },
    function (err) {
      console.log("Something went wrong!", err)
    }
  )
  return response
}

export const getCurrentSong = async () => {
  //fetch from database instead
  try {
    let URL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://jasonschmitt-dev-api-9w29o.ondigitalocean.app"
    console.log(URL)

    // fetch data from a url endpoint
    const response = await axios.get(`${URL}/getCurrentSong`)
    console.log("responseo")
    console.log(response.data)
    // window.location.href = response.data
    // window.location.href = "http://localhost:8000"
    // const getSongData = await axios.get(response.data)
    // console.log("get song data")
    // console.log(getSongData)
    // return response
  } catch (error) {
    console.log(error) // catches both errors
  }
}

export const updateCurrentSong = async () => {
  //fetch from database instead
  try {
    let URL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://jasonschmitt-dev-api-9w29o.ondigitalocean.app"
    console.log(URL)

    // fetch data from a url endpoint
    const response = await axios.get(`${URL}/getCurrentSongFromClient`)
    console.log(response)
    // return response
  } catch (error) {
    console.log(error) // catches both errors
  }
}
