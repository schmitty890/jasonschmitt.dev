import axios from "axios"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

export const getSchedule = async () => {
  try {
    let URL = "https://statsapi.web.nhl.com/api/v1/schedule"
    // fetch data from a url endpoint
    const response = await axios.get(`${URL}`)
    console.log(response)

    response.data.dates[0].games.forEach(game => {
      game.gameDate = dayjs(game.gameDate).fromNow()
    })

    return response
  } catch (error) {
    console.log(error) // catches both errors
  }
}
